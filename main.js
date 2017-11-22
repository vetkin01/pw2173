// const app=require('electron').app
const {app,BrowserWindow} = require('electron');
const path = require('path')//Muestra la ruta del archivo
const url = require('url');//Carga una página
let PantallaDetalle;
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

app.on('ready',muestraPantallaPrincipal)