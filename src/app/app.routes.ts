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
        
    }
    

];
