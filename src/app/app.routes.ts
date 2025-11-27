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
}

    
    
    

];
