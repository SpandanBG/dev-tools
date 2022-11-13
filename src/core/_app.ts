import { app, BrowserWindow } from 'electron';

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  });

  mainWindow.removeMenu();
  mainWindow.loadFile('./_document.html');
  mainWindow.webContents.openDevTools();
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  /*
   * For Mac OS: 
   * Keep the application active in the
   * menu bar untill the user explicitly 
   * quits with Cmd + Q
   */ 
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  /*
   * For Mac OS:
   * Re-create window when the docker icon is
   * clicked and there are no other window open.
   */
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
