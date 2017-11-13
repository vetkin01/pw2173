// "jquery" es lo mismo que "$"

var inicia = function()
{
	var nuevo = function()
	{
		//JSON= JavaScript Object Notation
		$.ajax
		({
		  url: 'https://randomuser.me/api/',
	 	  dataType: 'json',
	 	  success: function(data) 
	 	  {
		 	//alert(data.results[0].name.first+" "+data.results[0].name.last);
		     //console.log(data);
		     $("#nombre").html(data.results[0].name.first+" "+
		       				 data.results[0].name.last);
		     $("#foto").attr("src",data.results[0].picture.large);
		     $("#email").html(data.results[0].email);
		     $("#dob").html(data.results[0].dob);
		     $("#phone").html(data.results[0].phone);
		     $("#location").html(data.results[0].location.street+", "+
		     					data.results[0].location.city+", "+
		     					data.results[0].location.state+", "+
		     					data.results[0].location.postcode	);
		  	  }
		});
	}
	//alert("Lista la paágina");
		$("#btnNuevo").on("click",nuevo);
}
//Iniciamos JQuery cuando la pagina está lista ejecuta la función inicia.
$(document).ready(inicia);