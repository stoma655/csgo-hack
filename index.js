

const { app, BrowserWindow, Menu, ipcMain, ipcRenderer } = require('electron');

let win;

function startWindow() { 
  win = new BrowserWindow({
    width: 400,
    width: 700,
    height: 250,
    height: 700,
    frame: false,
    icon: __dirname + '/axios.ico',
    webPreferences: {
      nodeIntegration: true
    },
    resizable: false
  })
  win.setMenu(null)
  win.loadFile('public/index.html')
  win.webContents.openDevTools()
  win.on('closed', () => {
    win = null
  })
};
ipcMain.on('closed', function() {
  win.close();
});

app.on('ready', startWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  startWindow()
})

