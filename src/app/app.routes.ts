import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'counter-input-output',
        loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)
    },
    {
        path: 'ngrx-counter',
        loadComponent: () => import('./ngrx-counter/ngrx-counter.component').then(m => m.NgrxCounterComponent)
    },
       {
        path: 'ngrx-course',
        loadComponent: () => import('./courses/pages/courses/courses.component').then(m => m.CoursesComponent)
    },
    //load chil;dren for aut
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'practice-session/debouncing',
        loadComponent: () => import('./auth/lessons/pages/debounce-example/debounce-example.component').then(m => m.DebounceExampleComponent)
    },
    {
        path:'practice-session/accordion',
        loadComponent: () => import('./auth/lessons/pages/accordian/accordian.component').then(m => m.AccordianComponent)
        
    },
    {
        path:'practice-session/dropdown',
        loadComponent :()=>import('./auth/lessons/pages/drop-down/drop-down.component').then(m=>m.DropDownComponent)
    }
    ,{
        path:'practice-session/ngclass',
        loadComponent :()=>import('./auth/lessons/pages/ng-class-logical/ng-class-logical.component').then(m=>m.NgClassLogicalComponent)
    },
    {
        path:'practice-session/enum-colors',
        loadComponent :()=>import('./auth/lessons/pages/enum-color/enum-color.component').then(m=>m.EnumColorComponent)
    },
    {
        path:'practice-session/accordian-basic',
        loadComponent:()=> import('./auth/lessons/pages/accordian-basic/accordian-basic.component').then (m=>m.AccordianBasicComponent)

    },
    {
        path:'practice-session/tool-tip',
        loadComponent() {
            return import('./auth/lessons/pages/tool-tip/tool-tip.component').then(m => m.ToolTipComponent)
        },
    },
    {
        path:'practice-session/templateform',
        loadComponent() {
            return import('./auth/lessons/pages/user-form/user-form.component').then(m => m.UserFormComponent)
        },  
    },
{
    path: 'practice-session/reactiveform',
    loadComponent: () => import('./auth/lessons/pages/reactive-form/reactive-form.component').then(m => m.ReactiveFormComponent)
},
{
    path: 'practice-session/ParentFormComponent',
    loadComponent: () => import('./auth/lessons/pages/dynamic-table/parent-form/parent-form.component').then(m => m.ParentFormComponent)
},
{
    path: 'practice-session/Pagination',
    loadComponent: () => import('./auth/lessons/pages/pagination/pagination.component').then(m => m.PaginationComponent)
},
{
    path: 'practice-session/Ecommerce',
    loadComponent: () => import('./auth/lessons/pages/ecommerce-test/ecommerce-test.component').then(m => m.EcommerceTestComponent)   
}
,
{
    path: 'practice-session/family-reactive',
loadComponent:()=>import('./auth/lessons/pages/reactive-form-family/reactive-form-family.component').then(m=>m.ReactiveFormFamilyComponent)
},
{
    path: 'practice-session/reactiveform-machine-test',
    loadComponent: () => import('./auth/lessons/pages/reactive-forms-machine-test/reactive-forms-machine-test.component').then(m => m.ReactiveFormsMachineTestComponent)
},

{
    path: 'practice-session/reactiveform-machine-test-level2',
    loadComponent: () => import('./auth/lessons/pages/reactive-forms-machine-test-level2/reactive-forms-machine-test-level2.component').then(m => m.ReactiveFormsMachineTestLevel2Component)
}
,{
    path: 'practice-session/reactiveform-machine-test-level3',
    loadComponent: () => import('./auth/lessons/pages/reactive-forms-machine-test-level3/reactive-forms-machine-test-level3.component').then(m => m.ReactiveFormsMachineTestLevel3Component)
},
{
    path: 'practice-session/bootstrap-brushup',
    loadComponent: () => import('./auth/lessons/pages/bootstrap-brushup/bootstrap-brushup.component').then(m => m.BootstrapBrushupComponent)
},
{
    path: 'practice-session/routing-module1',
    loadComponent: () => import('./auth/lessons/pages/routing-module1/routing-module1.component').then(m => m.RoutingModule1Component)
},
{
    path: 'practice-session/routing-module2-router-activatedrouter',
    loadComponent: () => import('./auth/lessons/pages/routing-module2-router-activatedrouter/routing-module2-router-activatedrouter.component').then(m => m.RoutingModule2RouterActivatedrouterComponent)       
},{
    path: 'practice-session/routing-module3-guards',
    loadComponent: () => import('./auth/lessons/pages/routing-module3-guards/routing-module3-guards.component').then(m => m.RoutingModule3GuardsComponent)  
}
,{
    path: 'practice-session/routing-module4-auth',
    loadComponent: () => import('./auth/lessons/pages/routing-module4-auth/routing-module4-auth.component').then(m => m.RoutingModule4AuthComponent)
},
{
    path:'practice-session/module5-ssr',
    loadComponent: () => import('./auth/lessons/pages/routing-module5-ssr/routing-module5-ssr.component').then(m => m.RoutingModule5SSRComponent)       
}
,{
    path:'practice-session/module6-preloading',
    loadComponent: () => import('./auth/lessons/pages/profiling-performance/profiling-performance.component').then(m => m.ProfilingPerformanceComponent)
},

{
  path: 'recorder',
  loadChildren: () => import('./interview-recorder-ui/recorder/recorder.routes').then(m => m.recorderRoutes)
}
,{
    path: 'angular-module1-revision',
    loadComponent: () => import('./courses/pages/angular-revision-module1/angular-revision-module1.component').then(m => m.AngularRevisionModule1Component)
},{
    path: 'angular-ng-afterviewinit',
    loadComponent: () => import('./auth/lessons/pages/after-view-init-usecases/after-view-init-usecases.component').then(m => m.AfterViewInitUsecasesComponent)
},
{
    path: 'practice-session/employee-management',
    loadComponent: () => import('./auth/lessons/pages/employee/employee.component').then(m => m.EmployeeComponent)
},
    



];
