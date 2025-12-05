import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-module5-ssr',
  standalone: true,
  imports: [],
  templateUrl: './routing-module5-ssr.component.html',
  styleUrl: './routing-module5-ssr.component.css'
})
export class RoutingModule5SSRComponent {

  // CLI command
  code_ng_add_ssr = `
# Add Angular SSR support to an existing app
ng add @angular/ssr
`;

  // main.ts with hydration
  code_main_ts_hydration = `
// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideClientHydration()
  ]
});
`;

  // main.server.ts
  code_main_server_ts = `
// main.server.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, appConfig);

export default bootstrap;
`;

  // app.config.server.ts (server-side config)
  code_app_config_server = `
// app.config.server.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideServerRendering } from '@angular/platform-server';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideServerRendering()
  ]
};
`;

  // Basic Express server (server.ts)
  code_server_ts = `
// server.ts
import 'zone.js/node';
import express from 'express';
import { join } from 'path';
import { fileURLToPath } from 'url';

// Import the server-side bootstrap function
import bootstrap from './src/main.server';

const app = express();
const port = process.env['PORT'] || 4000;

// Folder where browser build is placed
const __filename = fileURLToPath(import.meta.url);
const __dirname = join(__filename, '..');
const browserDistFolder = join(__dirname, 'browser');

// Serve static files
app.use(express.static(browserDistFolder, { maxAge: '1y' }));

// Universal server-side rendering handler
app.get('*', async (req, res, next) => {
  try {
    const { renderApplication } = await import('@angular/platform-server');

    const html = await renderApplication(bootstrap, {
      url: req.originalUrl
    });

    res.status(200).send(html);
  } catch (error) {
    next(error);
  }
});

app.listen(port, () => {
  console.log(\`Angular SSR server listening on http://localhost:\${port}\`);
});
`;

  // isPlatformBrowser / isPlatformServer usage
  code_is_platform_example = `
// example.component.ts
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'app-example',
  template: '<p>Example component</p>'
})
export class ExampleComponent {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {

    if (isPlatformBrowser(this.platformId)) {
      // Browser-only code (safe to use window, document, localStorage)
      console.log('Running in the browser');
    }

    if (isPlatformServer(this.platformId)) {
      // Server-side rendering code
      console.log('Running on the server');
    }
  }
}
`;

  // TransferState service
  code_transfer_state_service = `
// products.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';

export interface Product {
  id: number;
  name: string;
}

const PRODUCTS_KEY = makeStateKey<Product[]>('products');

@Injectable({ providedIn: 'root' })
export class ProductsService {

  constructor(
    private http: HttpClient,
    private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  getProducts(): Observable<Product[]> {
    // If data is already in transfer state, use it (client side)
    const existing = this.transferState.get(PRODUCTS_KEY, null as any);
    if (existing) {
      // Clear after first read
      this.transferState.remove(PRODUCTS_KEY);
      return of(existing);
    }

    // If not present, call API
    return this.http.get<Product[]>('/api/products').pipe(
      tap(products => {
        if (isPlatformServer(this.platformId)) {
          // Store data during SSR so client can reuse it
          this.transferState.set(PRODUCTS_KEY, products);
        }
      })
    );
  }
}
`;

  // Component using TransferState-backed service
  code_transfer_state_component = `
// products.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from './products.service';

@Component({
  selector: 'app-products',
  template: \`
    <h2>Products</h2>
    <ul>
      <li *ngFor="let p of products">{{ p.name }}</li>
    </ul>
  \`
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(data => {
      this.products = data;
    });
  }
}
`;

  // Example of cookie-based auth idea in SSR (high level)
  code_ssr_auth_cookie = `
// high level idea (not full code)

// In an Express middleware before SSR:
app.use((req, res, next) => {
  const authCookie = req.cookies['auth_token'];
  // Decode or verify token on server
  // Attach user info to request object for SSR
  (req as any).user = decodeToken(authCookie);
  next();
});

// Then inside your SSR rendering context,
// you can pass user data so Angular can render
// user specific content during SSR.
`;

  // Simple window-safe analytics usage
  code_analytics_safe = `
// analytics.service.ts
import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class AnalyticsService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  trackPageView(url: string) {
    if (isPlatformBrowser(this.platformId)) {
      // Safe: will not run on the server
      console.log('Track page view:', url);
      // analytics call here
    }
  }
}
`;

  // Problem: 'window is not defined' example (fixed)
  code_window_not_defined_fix = `
// bad:
localStorage.setItem('key', 'value');

// good:
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

saveToStorage() {
  if (isPlatformBrowser(this.platformId)) {
    localStorage.setItem('key', 'value');
  }
}
`;

  // Simple prerender command snippet
  code_prerender_cmd = `
# Build and prerender with Angular SSR tooling
ng run app:prerender
`;

}

