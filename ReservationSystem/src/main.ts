import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/store/app.config';
import { AppComponent } from './app/store/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
