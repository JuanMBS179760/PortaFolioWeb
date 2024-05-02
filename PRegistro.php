<?php
    if(isset($_POST['submit'])){
        $para = "179760@upslp.edu.mx";
        $asunto = "Enviando Informacion";
        $nombre = $_POST['nombre'];
        $correo = $_POST['correo'];
        $mensaje = $_POST['mensaje'];
        $headers = "MIME-Version: 1.0\r\n";
        $headers .= "Content-type: text/html; charset=utf8\r\n";
        $cuerpo = "Enviado por: $nombre\n Email: $correo\n Mensaje: $mensaje\n";

        $bool = mail($para,$asunto,$cuerpo,$headers);
    }else{
        echo "No se ha enviado el formulario";
    }
?>