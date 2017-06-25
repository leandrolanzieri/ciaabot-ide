import { Component, ChangeDetectorRef } from '@angular/core';
import { ElectronService } from './providers/electron.service';
import { NotificationsService } from 'angular2-notifications';
import { WindowService } from './providers/window.service';
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
  public isMaximizedWindow: boolean = false;
  constructor(
    public electronService: ElectronService,
    private notificationsService: NotificationsService,
    private windowService: WindowService ) {

    if (electronService.isElectron()) {
      console.log('Mode electron');
      // Check if electron is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.ipcRenderer);
      // Check if nodeJs childProcess is correctly injected (see externals in webpack.config.js)
      console.log('c', electronService.childProcess);
    } else {
      console.log('Mode web');
    }

    setInterval(() => {
      this.isMaximizedWindow = this.maximizedWindow();
    }, 500);
  }

  public minimizeWindow() {
    this.windowService.minimizeWindow();
  }

  public unmaximizeWindow() {
    this.windowService.unmaximizeWindow();
  }

  public maximizeWindow() {
    this.windowService.maximizeWindow();
  }

  public maximizedWindow() {
    return this.windowService.isMaximizedWindow();
  }

  public closeWindow() {
    this.windowService.closeWindow();
  }
}
