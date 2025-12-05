import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-module4-auth',
  standalone: true,
  imports: [],
  templateUrl: './routing-module4-auth.component.html',
  styleUrl: './routing-module4-auth.component.css'
})
export class RoutingModule4AuthComponent {

  // Backend contract (for explanation)
  code_backend_contract = `
POST /api/auth/login
Request body:
{
  "email": "user@example.com",
  "password": "password123"
}

Response body:
{
  "accessToken": "JWT_HERE",
  "user": {
    "id": "123",
    "email": "user@example.com",
    "role": "admin"
  }
}

Also sets HttpOnly refresh token cookie.

POST /api/auth/refresh
- Uses HttpOnly refresh cookie
Response:
{
  "accessToken": "NEW_JWT_HERE"
}

POST /api/auth/logout
- Clears refresh token cookie on server
`;

  // Models
  code_auth_models = `
// auth.models.ts
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  accessToken: string;
  user: {
    id: string;
    email: string;
    role: 'user' | 'admin' | 'manager' | string;
  };
}

export interface JwtPayload {
  sub: string;   // user id
  email: string;
  role: string;
  exp: number;   // expiry (seconds since epoch)
  iat?: number;
}
`;

  // AuthService
  code_auth_service = `
// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  BehaviorSubject,
  Observable,
  map,
  tap
} from 'rxjs';
import { LoginRequest, LoginResponse, JwtPayload } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private accessTokenKey = 'access_token';

  // current access token in memory
  private accessTokenSubject = new BehaviorSubject<string | null>(null);
  accessToken$ = this.accessTokenSubject.asObservable();

  // simple user info from token
  private currentUserSubject = new BehaviorSubject<JwtPayload | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private http: HttpClient) {
    const token = localStorage.getItem(this.accessTokenKey);
    if (token) {
      this.setAccessToken(token);
    }
  }

  // 1. LOGIN
  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(
      '/api/auth/login',
      payload,
      { withCredentials: true } // send/receive refresh cookie
    ).pipe(
      tap(res => {
        this.setAccessToken(res.accessToken);
      })
    );
  }

  // 2. LOGOUT
  logout(): Observable<void> {
    // Clear local data immediately
    this.clearAccessToken();

    // Inform backend to clear refresh token cookie
    return this.http.post<void>('/api/auth/logout', {}, { withCredentials: true });
  }

  // 3. SET/STORE TOKEN
  private setAccessToken(token: string) {
    localStorage.setItem(this.accessTokenKey, token);
    this.accessTokenSubject.next(token);

    const payload = this.decodeJwt(token);
    this.currentUserSubject.next(payload);
  }

  private clearAccessToken() {
    localStorage.removeItem(this.accessTokenKey);
    this.accessTokenSubject.next(null);
    this.currentUserSubject.next(null);
  }

  getAccessToken(): string | null {
    return this.accessTokenSubject.value;
  }

  // 4. BASIC HELPERS

  isLoggedIn(): boolean {
    const token = this.accessTokenSubject.value;
    if (!token) return false;

    const payload = this.decodeJwt(token);
    if (!payload) return false;

    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now;
  }

  getUserRole(): string | null {
    return this.currentUserSubject.value?.role ?? null;
  }

  getUserId(): string | null {
    return this.currentUserSubject.value?.sub ?? null;
  }

  // 5. REFRESH TOKEN
  refreshAccessToken(): Observable<string> {
    return this.http.post<{ accessToken: string }>(
      '/api/auth/refresh',
      {},
      { withCredentials: true }
    ).pipe(
      tap(res => this.setAccessToken(res.accessToken)),
      map(res => res.accessToken)
    );
  }

  // 6. JWT DECODE (simple, no verification)
  private decodeJwt(token: string): JwtPayload | null {
    try {
      const parts = token.split('.');
      if (parts.length !== 3) return null;
      const payload = atob(parts[1].replace(/-/g, '+').replace(/_/g, '/'));
      return JSON.parse(payload) as JwtPayload;
    } catch (e) {
      console.error('Failed to decode JWT', e);
      return null;
    }
  }
}
`;

  // Interceptor
  code_auth_interceptor = `
// auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import {
  Observable,
  catchError,
  switchMap,
  throwError,
  filter,
  take
} from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private isRefreshing = false;
  private refreshInProgress$ = this.auth.accessToken$;

  constructor(private auth: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = this.auth.getAccessToken();

    if (token && !this.isAuthEndpoint(req.url)) {
      authReq = req.clone({
        setHeaders: {
          Authorization: \`Bearer \${token}\`
        },
        withCredentials: true
      });
    } else {
      authReq = req.clone({ withCredentials: true });
    }

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status !== 401) {
          return throwError(() => error);
        }

        if (!this.isRefreshing) {
          this.isRefreshing = true;

          return this.auth.refreshAccessToken().pipe(
            switchMap(newToken => {
              this.isRefreshing = false;

              const retryReq = req.clone({
                setHeaders: {
                  Authorization: \`Bearer \${newToken}\`
                },
                withCredentials: true
              });

              return next.handle(retryReq);
            }),
            catchError(refreshError => {
              this.isRefreshing = false;
              this.auth.logout().subscribe({
                error: e => console.error('Logout error', e)
              });
              return throwError(() => refreshError);
            })
          );
        } else {
          // Wait until a new token is emitted
          return this.refreshInProgress$.pipe(
            filter(t => t != null),
            take(1),
            switchMap(newToken => {
              const retryReq = req.clone({
                setHeaders: {
                  Authorization: \`Bearer \${newToken}\`
                },
                withCredentials: true
              });
              return next.handle(retryReq);
            })
          );
        }
      })
    );
  }

  private isAuthEndpoint(url: string): boolean {
    return url.includes('/api/auth/login') || url.includes('/api/auth/refresh');
  }
}
`;

  code_auth_interceptor_provider = `
// app.module.ts or app.config.ts
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';

providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }
];
`;

  // AuthGuard integrating token & roles
  code_auth_guard = `
// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    if (!this.auth.isLoggedIn()) {
      return this.router.parseUrl('/login?returnUrl=' + encodeURIComponent(state.url));
    }

    const allowedRoles = route.data['roles'] as Array<string>;
    const userRole = this.auth.getUserRole();

    if (allowedRoles && !allowedRoles.includes(userRole ?? '')) {
      return this.router.parseUrl('/unauthorized');
    }

    return true;
  }
}
`;

  code_auth_guard_route = `
// Example route
{
  path: 'admin',
  component: AdminDashboardComponent,
  canActivate: [AuthGuard],
  data: { roles: ['admin'] }
}
`;

  // Login Component TS
  code_login_component_ts = `
// login.component.ts
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  loading = false;
  error: string | null = null;

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  submit() {
    if (this.form.invalid) return;
    this.loading = true;
    this.error = null;

    this.auth.login(this.form.value as any).subscribe({
      next: () => {
        this.loading = false;
        const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
        this.router.navigateByUrl(returnUrl);
      },
      error: err => {
        this.loading = false;
        this.error = err.error?.message || 'Login failed';
      }
    });
  }
}
`;

  // Login HTML (for reference / docs)
  code_login_component_html = `<!-- login.component.html -->
<form [formGroup]="form" (ngSubmit)="submit()">
  <div>
    <label>Email</label>
    <input type="email" formControlName="email" />
  </div>

  <div>
    <label>Password</label>
    <input type="password" formControlName="password" />
  </div>

  <button type="submit" [disabled]="loading">
    {{ loading ? 'Logging in...' : 'Login' }}
  </button>

  <div *ngIf="error" class="error">
    {{ error }}
  </div>
</form>
`;

  // Role based UI snippet
  code_role_based_ui = `<!-- Example role-based UI in a component template -->
<div *ngIf="(auth.currentUser$ | async) as user">
  <p>Welcome, {{ user.email }}</p>

  <button *ngIf="user.role === 'admin'">
    Admin Settings
  </button>
</div>
`;

  // Token storage summary (for docs)
  code_token_storage_table = `
Storage options:

- Access token:
  - Can be stored in localStorage or kept only in memory.
  - Short lived (for example 15 minutes).
  - Sent in Authorization header.

- Refresh token:
  - Should be stored only in HttpOnly cookie.
  - Long lived (for example days).
  - Never exposed to JavaScript.
`;

}

