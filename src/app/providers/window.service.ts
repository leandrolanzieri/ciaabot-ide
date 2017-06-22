import { Injectable } from '@angular/core';

const BrowserWindow = require('electron').remote.BrowserWindow;

@Injectable()
export class WindowService {

  constructor() { }

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
}
