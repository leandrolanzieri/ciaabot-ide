import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from 'environments';

const { ipcRenderer } = require('electron');

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(() => {
    // Le avisamos a electron que ya estamos cargados.
    global.setTimeout(() => {
      ipcRenderer.send('app-cargada', 'ping');
    }, 0);
  });
