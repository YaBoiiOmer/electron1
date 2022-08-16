const {ipcRenderer} = require('electron')
window.addEventListener('DOMContentLoaded', ()=>{
    let exitButton = document.querySelector('.titlebar > .buttons > #close');
    exitButton.addEventListener('click', ()=>{
        ipcRenderer.send('exit-app')
    })

})