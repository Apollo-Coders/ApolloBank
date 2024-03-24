import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withFetch, withInterceptorsFromDi } from '@angular/common/http';
import { TokenServiceService } from './services/token-service.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideHttpClient(withFetch()), provideHttpClient(withInterceptorsFromDi()), HttpClientModule, { provide: HTTP_INTERCEPTORS, useClass: TokenServiceService, multi: true },
  ],
};
