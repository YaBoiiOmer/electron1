const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
require('electron-reload')(__dirname);

const createWindow = () =>{
    const win = new BrowserWindow({
        width: 400, // width = 400
        height: 600, // height = 600
        frame: false,
        opacity: 0.98,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })
    //win.webContents.openDevTools();
    win.setResizable(false);
    win.loadFile('index.html')
    // add button check
    ipcMain.on('exit-app', () => {
        app.quit()
    })
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})
