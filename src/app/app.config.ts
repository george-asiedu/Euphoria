import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { AuthServiceService } from './service/auth-service.service';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(),
  [provideHttpClient(), AuthServiceService]]
};
