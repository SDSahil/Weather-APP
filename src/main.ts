import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core'
import { environment as configs } from './environments/environment';
import { AppModule } from './app/app.module';

if (configs.production) {
  enableProdMode();
  window.console.log = function() {};
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
