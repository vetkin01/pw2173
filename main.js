// const app=require('electron').app
const {app,BrowserWindow} = require('electron');
const path = require('path')//Muestra la ruta del archivo
const url = require('url');//Carga una página

// Constantes para PDF
const electron = require('electron');
//Sistema de archivos
const fs = require('fs');
//Acceso al sistema operativo
const os = require('os');
//Para declarar una funcion remota
const ipc = electron.ipcMain;
//Acceso a la terminal/lena de comandos
const shell = electron.shell;


//let PantallaDetalle;
//ECMASCRIPT = 6
let PantallaPrincipal;
//Objeto global para compartir datos entre pantallas
global.infoUsuarios =
{
	nombre: '',
	genero: '',
	foto: '',
	direccion: '',
	telefono: ''
}
function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({width:320,height:425})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	// PantallaPrincipal.webContents.openDevTools(); //Sirve para ver el codigo(herramientas)
	PantallaPrincipal.show();
}

//Evento para PDF
ipc.on('print-to-pdf',function(event){
	const pdfPath=path.join(os.tmpdir(),'print.pdf')
	const win=BrowserWindow.fromWebContents(event.sender)
	win.webContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error;
			}
			shell.openExternal('file://'+pdfPath)
			win.close()
		})
	})
});

app.on('ready',muestraPantallaPrincipal)






