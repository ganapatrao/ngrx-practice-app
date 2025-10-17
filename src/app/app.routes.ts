import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'counter-input-output',
        loadComponent: () => import('./counter/counter.component').then(m => m.CounterComponent)
    }
];
