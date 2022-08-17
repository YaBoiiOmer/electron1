const {ipcRenderer} = require('electron')
window.addEventListener('DOMContentLoaded', ()=>{
    let exitButton = document.querySelector('.titlebar > .buttons > #close');
    let minButton = document.querySelector('.titlebar > .buttons > #minimize');
    exitButton.addEventListener('click', ()=>{
        ipcRenderer.send('exit-app')
    })
    minButton.addEventListener('click', ()=>{
        ipcRenderer.send('minimize-app')
    })

})