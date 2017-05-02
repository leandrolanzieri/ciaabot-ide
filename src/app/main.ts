import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

const { ipcRenderer } = require('electron');

if (process.env.ENV === 'production') {
    enableProdMode();
} else {
    // Development
    Error['stackTraceLimit'] = Infinity;
    require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic()
    .bootstrapModule(AppModule)
    .then(() => {
        // Le avisamos a electron que ya estamos cargados.
        global.setTimeout(() => {
            ipcRenderer.send('app-cargada', 'ping');
        }, 0);
    });
