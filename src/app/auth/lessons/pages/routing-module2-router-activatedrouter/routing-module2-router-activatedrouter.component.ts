import { Component } from '@angular/core';

@Component({
  selector: 'app-routing-module2-router-activatedrouter',
  standalone: true,
  imports: [],
  templateUrl: './routing-module2-router-activatedrouter.component.html',
  styleUrl: './routing-module2-router-activatedrouter.component.css'
})
export class RoutingModule2RouterActivatedrouterComponent {
// ---------------------------
  // INJECTING ROUTER & ACTIVATED ROUTE
  // ---------------------------
  code_inject_router_route = `
constructor(
  private router: Router,
  private route: ActivatedRoute
) {}
`;


  // ---------------------------
  // ROUTER IN SERVICE
  // ---------------------------
  code_service_router = `
@Injectable({ providedIn: 'root' })
export class AuthService {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
`;


  // ---------------------------
  // ROUTE PARAMS
  // ---------------------------
  code_route_params_config = `
{ path: 'users/:id', component: UserDetailsComponent }
`;

  code_route_params_nav = `
this.router.navigate(['/users', 10]);
`;

  code_route_params_read = `
// Snapshot
const id = this.route.snapshot.paramMap.get('id');

// Observable
this.route.paramMap.subscribe(p => console.log(p.get('id')));
`;

  url_route_params = `/users/10`;


  // ---------------------------
  // QUERY PARAMS
  // ---------------------------
  code_queryparams_nav = `
this.router.navigate(['/users'], { queryParams: { page: 2, sort: 'name' } });
`;

  code_queryparams_read = `
this.route.queryParamMap.subscribe(q => {
  console.log(q.get('page'));
  console.log(q.get('sort'));
});
`;

  url_query_params = `/users?page=2&sort=name`;


  // ---------------------------
  // FRAGMENT
  // ---------------------------
  code_fragment_nav = `
this.router.navigate(['/users'], { fragment: 'top' });
`;

  code_fragment_read = `
this.route.fragment.subscribe(f => {
  if (f === 'top') {
    document.getElementById('top')?.scrollIntoView({ behavior: 'smooth' });
  }
});
`;

  code_fragment_html = `
<div id="top"></div>
<button (click)="goToTop()">Go To Top</button>
`;

  url_fragment = `/users#top`;


  // ---------------------------
  // STATIC DATA
  // ---------------------------
  code_static_data_route = `
{
  path: 'admin',
  component: AdminDashboardComponent,
  data: { title: 'Admin Dashboard', role: 'admin' }
}
`;

  code_static_data_read = `
this.route.data.subscribe(d => {
  console.log(d['title']);
  console.log(d['role']);
});
`;

  url_static_data = `/admin  (Static data does not change URL)`;


  // ---------------------------
  // NAVIGATION STATE
  // ---------------------------
  code_state_nav = `
this.router.navigate(['/checkout'], {
  state: { cart: this.cartItems }
});
`;

  code_state_read = `
const state = this.router.getCurrentNavigation()?.extras.state;
console.log(state?.['cart']);
`;

  url_navigation_state = `/checkout  (State does not appear in URL)`;


  // ---------------------------
  // SNAPSHOT VS OBSERVABLE
  // ---------------------------
  code_snapshot_vs_observable = `
// Snapshot
const id = this.route.snapshot.paramMap.get('id');

// Observable
this.route.paramMap.subscribe(p => console.log(p.get('id')));
`;


  // ---------------------------
  // RELATIVE NAVIGATION
  // ---------------------------
  code_relative_nav = `
this.router.navigate(['10', 'details'], { relativeTo: this.route });
`;

  url_relative_navigation_example = `
If current URL = /users  
After navigation → /users/10/details
`;

}
