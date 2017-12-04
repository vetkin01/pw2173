<?php
	include 'conexion.php';

	function validaEntrada()
	{
		$conexion = conectaBD();
		$respuesta = false;
		$usuario = $_POST["usuario"];
		$clave = $_POST["clave"];
		$consulta = "select ncontrol, clave from alumnos where ncontrol='".$usuario."' and clave='".$clave."' limit 1";
		$resConsulta = mysql_query($conexion,$consulta);
		if (mysql_num_rows($resConsulta)>0)
		{
			$respuesta = true;
		}
		$salida = array('respuesta' => $respuesta );
		print json_encode($saldia);
		
	}
	$opc=$_POST["opc"];
	switch ($opc) {
		case 'valida':
			validaEntrada();
			break;
		
		default:

			break;
	}
?>	