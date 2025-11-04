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
    }
];
