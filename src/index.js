const electron = require("electron")
const ipc = electron.ipcRenderer

const btnclose = document.getElementById('btnclose')
const btnmaximize = document.getElementById('btnmaximize')
const btnhide = document.getElementById('btnhide')

btnclose.addEventListener('click',function(){
    ipc.send('close')
})

btnmaximize.addEventListener('click',function(){
    ipc.send('maximize')
})

btnhide.addEventListener('click',function(){
    ipc.send('hide')
})

const myNotification = new Notification('SX Code Editor', {
    body: 'Welcome back',
    icon:'./2.png',
    sound:true
  })
  
  myNotification.onclick = () => {
    console.log('Notification clicked')
  }
// const remote = require('electron').remote

// const btnclose = document.getElementById('btnclose')
// const btnmaximize = document.getElementById('btnmaximize')
// const btnhide = document.getElementById('btnhide')


// btnclose.addEventListener('click',function(){
//     var window=remote.getCurrentWindow();
//     console.log("vdfbkfjs");
//     window.close();
// })

// btnmaximize.addEventListener('click',function(){
//     var window=remote.getCurrentWindow();
//     window.minimize
// })

// btnhide.addEventListener('click',function(){
//     var window=remote.getCurrentWindow();
//     window.maximize()
// })

// const { remote } = require('electron');
// document.addEventListener('DOMContentLoaded', () => {
//     console.log(remote);
//     document.getElementById('container').innerHTML = remote
// });