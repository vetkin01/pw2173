

const {BrowserWindow}=require('electron').remote
const app=require('electron').app;
const path=require('path');
const url=require('url');
const $ = require('jquery');
let PantallaDetalle;

function datos(nombre,genero,foto,direccion,telefono)
{
	this.nombre		  = nombre;
	this.genero 	  = genero;
	this.foto 		  = foto;
	this.direccion    = direccion;
	this.telefono     = telefono;
}

var usuarios = new Array(20);
function inicia()
{
	$.ajax
		({
			 url: 'https://randomuser.me/api/?results=20',
		 	 dataType: 'json',
		 	 success: function(data) 
		 	 {
		 	 	var resultado = "";
		 	 	var nombre	  = "";
		 	 	var genero 	  = "";
		 	 	var direccion = "";
		 	 	var telefono  = "";
		 	 	var foto  	  = "";
		 	 	for(var i=0;i<25;i++)
		 	 	{
		 	 		nombre = data.results[i].name.first+" "+data.results[i].name.last;
		 	 		genero = data.results[i].gender;
		 	 		direccion = data.results[i].location.street;
		 	 		telefono = data.results[i].phone;
		 	 		foto = data.results[i].picture.medium;
		 	 		resultado="<li><img src="+foto+">"+nombre+"<button id='"+i+"'>Detalle</button></li>";
		 	 		$("#lstUsuarios").append(resultado);
		 	 		usuarios[i] = new datos(nombre,genero,foto,direccion,telefono);
		 	 	}
			 	
			 }
		});

}
function botonDetalle()
{
	// alert(usuarios[this.id].nombre);
	require('electron').remote.getGlobal('infoUsuarios').nombre=usuarios[this.id].nombre;
	require('electron').remote.getGlobal('infoUsuarios').genero=usuarios[this.id].genero;
	require('electron').remote.getGlobal('infoUsuarios').foto=usuarios[this.id].foto;
	require('electron').remote.getGlobal('infoUsuarios').direccion=usuarios[this.id].direccion;
	require('electron').remote.getGlobal('infoUsuarios').telefono=usuarios[this.id].telefono;
	PantallaDetalle = new BrowserWindow({width:320,height:425})
	PantallaDetalle.loadURL(url.format({
		pathname: path.join(__dirname,'detalleusuarios.html'),
		protocol: 'file',
		slashes: true
	}))
	//PantallaDetalle.webContents.openDevTools(); //Sirve para ver el codigo(herramientas)
	PantallaDetalle.show();
}
$("body").on("click","li > button",botonDetalle);
inicia();
