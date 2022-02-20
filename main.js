const { BrowserWindow ,Menu} = require("electron");

const shell= require("electron").shell;
const electron = require("electron");
const app=electron.app;
const BrowswerWindow=electron.BrowserWindow;
const path=require("path");
const url=require("url");
const ipc = electron.ipcMain
let win;

function createWindow(){
    win = new BrowserWindow(
        {frame:false,show:false,minHeight:600,minWidth:800,
            webPreferences: {
                nodeIntegration: true
            }
        }
    );

win.maximize();
win.show();
    
    win.loadURL(url.format({
        pathname:path.join(__dirname,"src/index.html"),
        protocol:'file',
        slashes:true
    }));
    // win.webContents.openDevTools();
    win.on('close',()=>{
        win=null;
    })
var menu=Menu.buildFromTemplate([{
    label:'Menu',
    submenu:[
        {
            label:'About'
        },
        {type:'separator'},
        {
            label:'Adjust',
            click()
            {
               shell.openExternal('http://google.com')
            }
        },  
        {
            label:'Exit',
            click()
            {
                app.quit()
            }
        }
    ]
},
{
    label:'info',
}
])
Menu.setApplicationMenu(menu);

ipc.on('close',function(event)
{
    app.quit()
})

ipc.on('maximize',function(event)
{

    if(win.isMaximized())
    win.unmaximize()
    else
    win.maximize()
})

ipc.on('hide',function(event)
{
    win.minimize()
})




}

app.on('ready',createWindow);