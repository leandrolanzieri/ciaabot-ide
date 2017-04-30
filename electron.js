/**
 * Include our app
 */
const { app, BrowserWindow, ipcMain } = require('electron');

// browser-window creates a native window
let mainWindow = null;
let loaderWindow = null;

app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

const createWindow = () => {
  const { screen } = require('electron');
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;

  // Initialize the window to our specified dimensions
  mainWindow = new BrowserWindow({ width: width, height: height, show: true, icon: __dirname + '/ciaabot-ide.ico' });

  // Tell Electron where to load the entry point from
  mainWindow.loadURL('file://' + __dirname + '/dist/index.html');

  // Open the DevTools.
  // mainWindow.webContents.openDevTools();

  // Clear out the main window when the app is closed
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};

const createLoader = () => {
  loaderWindow = new BrowserWindow(
    {
      width: 400,
      height: 300,
      transparent: true,
      frame: false,
    }
  );

  loaderWindow.loadURL('file://' + __dirname + '/src/loader/index.html');

  loaderWindow.on('closed', () => {
    loaderWindow = null;
  });

  loaderWindow.once('ready-to-show', function () {
    loaderWindow.show();
  });
}

app.on('ready', () => {
  createLoader();
  createWindow();
});

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    // createWindow();
    createLoader();
  }
});

ipcMain.on('app-cargada', (event, arg) => {
    console.log('app cargada');
    mainWindow.maximize();
    pantallaCarga.close();
    pantallaCarga = null;
})