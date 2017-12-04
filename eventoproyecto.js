var inicia = function(){
    var entrada = function(){
    	var usuario = $("#txtUsuario").val();
    	var clave   = $("#txtClave").val();
    	var parametros="opc=valida"+
    				   "&usuario="+usuario+
    				   "&clave="+clave+
    				   "&id="+Math.random();
    	$.ajax({
    		url:"php/entrada.php",
    		dateType: 'json',
            type: "POST", //retorno
            data: parametros, //lo que enviamos
    		success: function(data){
                if (data.respuesta == true) {
                    alert("Bienvenido");
                }else{
                    alert("Usuario y/o clave incorrectos")
                }
                ;

    		},
    		error: function(a,b,c){
                alert("No se pudo conectar al servidor")

    		}
    	});
    }

	$("#btnEntrar").on("click",entrada)
}
$(document).ready(inicia);