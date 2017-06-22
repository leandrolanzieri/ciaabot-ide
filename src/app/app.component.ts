import { Component, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { NotificationsService } from 'angular2-notifications';
const BrowserWindow = require('electron').remote.BrowserWindow;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public notificationsOptions = {
    position: ['top', 'right'],
    timeOut: 5000
  };
  constructor(
    public electronService: ElectronService,
    private notificationsService: NotificationsService,
    private changeDetector: ChangeDetectorRef ) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }
  }

  public minimizeWindow() {
    BrowserWindow.getFocusedWindow().minimize();
  }

  public unmaximizeWindow() {
    console.log('Minimizando ventana');
    BrowserWindow.getFocusedWindow().unmaximize();
  }

  public maximizeWindow() {
    console.log('Maximizando ventana');
    BrowserWindow.getFocusedWindow().maximize();
  }

  public isMaximizedWindow() {
    if (BrowserWindow.getFocusedWindow()) {
      let max: boolean;
      try {
        max = BrowserWindow.getFocusedWindow().isMaximized();
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }
}
