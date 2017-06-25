import { Injectable, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { ConfirmationService } from './confirmation.service';
import { ElectronService } from './electron.service';

const BrowserWindow = require('electron').remote.BrowserWindow;
// const ipcRenderer = require('electron').ipcRenderer;

@Injectable()
export class WindowService implements OnInit {

  constructor(
    private projectService: ProjectService,
    private confirmationService: ConfirmationService,
    private electronService: ElectronService
  ) {
    this.electronService.ipcRenderer.send('window-service', 'init');
    this.electronService.ipcRenderer.on('wnidow-service', (event, arg) => {
      if ('closing' === arg) {
        this.electronService.ipcRenderer.send('window-service', 'cerrando');
        if (this.projectService.getProjectChange().valueOf()) {
          this.confirmationService.openDialog({
            title: 'Hay cambios en el proyecto',
            titleClass: 'warning',
            description: 'Existen cambios en el proyecto. ¿Desea guardarlos?',
            options: [{
              text: 'Si',
              class: 'success',
              icon: 'floppy-o',
              callback: () => {
                this.projectService.saveCurrentProject();
              }
            }, {
              text: 'No',
              class: 'default',
              icon: 'times'
            }],
            canDismiss: false
          });
        }
      }
    });
  }

  public ngOnInit() {

  }

  public minimizeWindow() {
    BrowserWindow.getFocusedWindow().minimize();
  }

  public unmaximizeWindow() {
    BrowserWindow.getFocusedWindow().unmaximize();
  }

  public maximizeWindow() {
    BrowserWindow.getFocusedWindow().maximize();
  }

  public isMaximizedWindow() {
    if (BrowserWindow.getFocusedWindow()) {
      let max: boolean;
      try {
        max = BrowserWindow.getFocusedWindow().isMaximized();
        return max;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  }

  public closeWindow() {
    BrowserWindow.getFocusedWindow().close();
  }
}
