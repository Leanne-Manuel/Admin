const {app, BrowserWindow} = require('electron');
const path=require("path")


function createWindow(){
       const primeiraJanela= new BrowserWindow({

                width:890,
                height:690,
                preload: path.join(__dirname,"preloader.js")
        });
        primeiraJanela.loadURL("http://localhost:3000/");
}

app.whenReady().then(() => {
    createWindow();
//macbook ao fechar janelas
    app.on("activate",()=>{
        if(BrowserWindow.getAllWindows().length===0) createWindow();
    })

})

//fechar apenas qd tds janelas estiverem fechadas (windows e linux)
app.on("window-all-closed", ()=> {
    if(process.platform !== "darwin") app.quit();
})
