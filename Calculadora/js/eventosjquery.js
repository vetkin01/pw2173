// "jquery" es lo mismo que "$"

var inicia = function()
{
	//JSON= JavaScript Object Notation
	$.ajax({
	  url: 'https://randomuser.me/api/',
 	  dataType: 'json',
 	  success: function(data) 
 	  {
 	  	alert(data.results[0].name.first+" "+data.results[0].name.last);
 	    //console.log(data);
  	  }
});
}
//Iniciamos JQuery cuando la pagina está lista ejecuta la función inicia.
$(document).ready(inicia);