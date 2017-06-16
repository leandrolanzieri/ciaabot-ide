import { app, BrowserWindow, screen, ipcMain } from 'electron';
import * as path from 'path';


let win, serve, loaderWindow;
const args = process.argv.slice(1);
serve = args.some(val => val === "--serve");

if (serve) {
  require('electron-reload')(__dirname, {
  });
}

function createWindow() {

  let electronScreen = screen;
  let size = electronScreen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    show: false,
    icon: __dirname + '/favicon.ico'
  });

  win.setMenu(null);
  // and load the index.html of the app.
  win.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  if (serve) {
    win.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

function createLoader() {
  loaderWindow = new BrowserWindow({
    width: 400,
    height: 300,
    transparent: true,
    frame: false,
    icon: __dirname + '/favicon.ico'
  });

  loaderWindow.loadURL('file://' + __dirname + '/assets/loader/index.html');

  loaderWindow.on('closed', () => {
    loaderWindow = null;
  });

  loaderWindow.once('ready-to-show', function () {
    loaderWindow.show();
  });
}

try {

  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', () => {
    createLoader();
    createWindow();
  });

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });

  ipcMain.on('app-cargada', (event, arg) => {
    console.log('app cargada');
    win.maximize();
    loaderWindow.close();
    // loaderWindow = null;
  })

} catch (e) {
  // Catch Error
  //throw e;
}
