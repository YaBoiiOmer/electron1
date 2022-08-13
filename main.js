const {app, BrowserWindow} = require('electron')
require('electron-reload')(__dirname);
const createWindow = () =>{
    const win = new BrowserWindow({
        width: 800,
        height:600,
        frame: false
    });
    win.setResizable(false);
    win.loadFile('index.html')
}

app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit()
})