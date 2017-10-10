import { Injectable } from '@angular/core';

// If you import a module but never use any of the imported values other than as TypeScript types,
// the resulting javascript file will look as if you never imported the module at all.
import { ipcRenderer, BrowserWindow } from 'electron';
import * as childProcess from 'child_process';
import * as process from 'process';
import * as path from 'path';
import * as os from 'os';

@Injectable()
export class ElectronService {

  ipcRenderer: typeof ipcRenderer;
  childProcess: typeof childProcess;
  browserWindow: typeof BrowserWindow;
  process: typeof process;
  path: typeof path;

  constructor() {
    // Conditional imports
    if (this.isElectron()) {
      this.ipcRenderer = window.require('electron').ipcRenderer;
      this.childProcess = window.require('child_process');
      this.browserWindow = window.require('electron').remote.BrowserWindow;
      this.process = window.require('process');
      this.path = window.require('path');
    }
  }

  public isElectron = () => {
    return window && window.process && window.process.type;
  }

  public getEnvVariables() {
    return this.process.env;
  }

  public getPathDelimiter() {
    return this.path.delimiter;
  }

  /**
   * Returns a variable formatted correctly to run in bash/batch
   * depending on the platform.
   * @param variable string Variable name
   * @return string Formatted variable
   */
  public getFormattedBashVariable(variable: string): string {
    switch (os.platform()) {
      case 'win32':
        return '%' + variable + '%';
      default:
        return '$' + variable;
    }
  }

}
