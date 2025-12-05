import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-module3-guards',
  standalone: true,
  imports: [],
  templateUrl: './routing-module3-guards.component.html',
  styleUrl: './routing-module3-guards.component.css'
})
export class RoutingModule3GuardsComponent {

  // ===========================
  // PART A – THEORY STRINGS (if needed for future HTML)
  // ===========================
  // (We will write theory as plain HTML text, so no TS needed here)


  // ===========================
  // PART B – PRACTICAL CODE SNIPPETS
  // ===========================

  // 1. CanActivate Guard
  code_canactivate_guard = `
import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { AuthService } from '../services/auth.service';

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
      return this.router.parseUrl('/login');
    }

    const allowedRoles = route.data['roles'] as Array<string>;
    const userRole = this.auth.getUserRole();

    if (allowedRoles && !allowedRoles.includes(userRole)) {
      return this.router.parseUrl('/unauthorized');
    }

    return true;
  }
}
`;

  code_canactivate_route = `
{
  path: 'admin',
  component: AdminDashboardComponent,
  canActivate: [AuthGuard],
  data: { roles: ['admin'] }
}
`;


  // 2. CanActivateChild Guard
  code_canactivatechild_guard = `
import { Injectable } from '@angular/core';
import {
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminChildGuard implements CanActivateChild {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {

    if (this.auth.getUserRole() !== 'admin') {
      return this.router.parseUrl('/unauthorized');
    }

    return true;
  }
}
`;

  code_canactivatechild_route = `
{
  path: 'admin',
  canActivateChild: [AdminChildGuard],
  children: [
    { path: 'users', component: UserListComponent },
    { path: 'reports', component: ReportsComponent }
  ]
}
`;


  // 3. CanDeactivate Guard
  code_candeactivate_interface = `
export interface CanExit {
  canExit: () => boolean | Observable<boolean> | Promise<boolean>;
}
`;

  code_candeactivate_guard = `
import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { CanExit } from './can-exit.interface';

@Injectable({ providedIn: 'root' })
export class DeactivateGuard implements CanDeactivate<CanExit> {
  canDeactivate(component: CanExit) {
    return component.canExit();
  }
}
`;

  code_candeactivate_component = `
import { Component } from '@angular/core';
import { CanExit } from '../guards/can-exit.interface';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html'
})
export class ProfileEditComponent implements CanExit {

  isFormDirty = true;

  canExit(): boolean {
    if (this.isFormDirty) {
      return confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
`;

  code_candeactivate_route = `
{
  path: 'edit-profile',
  component: ProfileEditComponent,
  canDeactivate: [DeactivateGuard]
}
`;


  // 4. CanLoad Guard
  code_canload_guard = `
import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  Router,
  UrlTree
} from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class AdminModuleGuard implements CanLoad {

  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean | UrlTree {

    if (this.auth.getUserRole() !== 'admin') {
      return this.router.parseUrl('/unauthorized');
    }

    return true;
  }
}
`;

  code_canload_route = `
{
  path: 'admin',
  canLoad: [AdminModuleGuard],
  loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
}
`;


  // 5. Resolve Guard
  code_resolve_guard = `
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserResolver implements Resolve<any> {

  constructor(private userService: UserService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const userId = route.paramMap.get('id');
    return this.userService.getUser(userId!);
  }
}
`;

  code_resolve_route = `
{
  path: 'users/:id',
  component: UserDetailsComponent,
  resolve: { user: UserResolver }
}
`;

  code_resolve_component = `
export class UserDetailsComponent {

  user: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}
`;


  // 6. CanMatch – Feature Flag Example (New Dashboard)
  code_canmatch_feature_routes = `
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard-v1.module').then(m => m.DashboardV1Module),
  canMatch: [OldDashboardMatchGuard]
},
{
  path: 'dashboard',
  loadChildren: () => import('./dashboard-v2.module').then(m => m.NewDashboardV2Module),
  canMatch: [NewDashboardMatchGuard]
}
`;

  code_canmatch_feature_old_guard = `
@Injectable({ providedIn: 'root' })
export class OldDashboardMatchGuard implements CanMatch {

  constructor(private flags: FeatureFlagService) {}

  canMatch(): boolean {
    return !this.flags.isEnabled('newDashboard');
  }
}
`;

  code_canmatch_feature_new_guard = `
@Injectable({ providedIn: 'root' })
export class NewDashboardMatchGuard implements CanMatch {

  constructor(private flags: FeatureFlagService) {}

  canMatch(): boolean {
    return this.flags.isEnabled('newDashboard');
  }
}
`;


  // 7. CanMatch – A/B Testing Example
  code_canmatch_ab_routes = `
{
  path: 'checkout',
  loadChildren: () => import('./checkout-A.module').then(m => m.CheckoutAModule),
  canMatch: [CheckoutAMatchGuard]
},
{
  path: 'checkout',
  loadChildren: () => import('./checkout-B.module').then(m => m.CheckoutBModule),
  canMatch: [CheckoutBMatchGuard]
}
`;

  code_canmatch_ab_guard_a = `
@Injectable({ providedIn: 'root' })
export class CheckoutAMatchGuard implements CanMatch {

  constructor(private experiment: ExperimentService) {}

  canMatch(): boolean {
    return this.experiment.isGroup('A');
  }
}
`;

  code_canmatch_ab_guard_b = `
@Injectable({ providedIn: 'root' })
export class CheckoutBMatchGuard implements CanMatch {

  constructor(private experiment: ExperimentService) {}

  canMatch(): boolean {
    return this.experiment.isGroup('B');
  }
}
`;


  // 8. CanMatch – Device-based Routing Example
  code_canmatch_device_routes = `
{
  path: 'home',
  loadChildren: () => import('./mobile-home.module').then(m => m.MobileHomeModule),
  canMatch: [MobileMatchGuard]
},
{
  path: 'home',
  loadChildren: () => import('./desktop-home.module').then(m => m.DesktopHomeModule),
  canMatch: [DesktopMatchGuard]
}
`;

  code_canmatch_device_mobile_guard = `
@Injectable({ providedIn: 'root' })
export class MobileMatchGuard implements CanMatch {

  constructor(private device: DeviceService) {}

  canMatch(): boolean {
    return this.device.isMobile();
  }
}
`;

  code_canmatch_device_desktop_guard = `
@Injectable({ providedIn: 'root' })
export class DesktopMatchGuard implements CanMatch {

  constructor(private device: DeviceService) {}

  canMatch(): boolean {
    return this.device.isDesktop();
  }
}
`;


  // 9. CanMatch – Auth-based conditional route selection
  code_canmatch_auth_routes = `
{
  path: 'home',
  loadChildren: () => import('./dashboard.module').then(m => m.DashboardModule),
  canMatch: [LoggedInMatchGuard]
},
{
  path: 'home',
  loadChildren: () => import('./public-home.module').then(m => m.PublicHomeModule),
  canMatch: [LoggedOutMatchGuard]
}
`;

  code_canmatch_auth_loggedin_guard = `
@Injectable({ providedIn: 'root' })
export class LoggedInMatchGuard implements CanMatch {

  constructor(private auth: AuthService) {}

  canMatch(): boolean {
    return this.auth.isLoggedIn();
  }
}
`;

  code_canmatch_auth_loggedout_guard = `
@Injectable({ providedIn: 'root' })
export class LoggedOutMatchGuard implements CanMatch {

  constructor(private auth: AuthService) {}

  canMatch(): boolean {
    return !this.auth.isLoggedIn();
  }
}
`;


  // 10. UrlTree in Guards (true / false / UrlTree)
  code_guard_urltree_example = `
canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | UrlTree {

  if (!this.auth.isLoggedIn()) {
    return this.router.parseUrl('/login');
  }

  if (!this.auth.hasPermission('ADMIN')) {
    return this.router.parseUrl('/unauthorized');
  }

  return true;
}
`;


}
