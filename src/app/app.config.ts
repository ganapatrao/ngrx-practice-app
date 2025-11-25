import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { counterReducer } from './ngrx-counter/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { coursesReducer } from './courses/state/courses.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { dummyApiInterceptor } from './auth/lessons/pages/dummy-api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ count: counterReducer , course: coursesReducer}),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideAnimationsAsync(),
    provideHttpClient(
      withInterceptors([dummyApiInterceptor])
    )
],
};
