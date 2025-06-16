<?php 
namespace Controllers;

use MVC\Autorizaciones;
use Services\CorreoService;

require_once __DIR__ . '/../core/helpers.php';

class FormularioController {

    public static function info() {

        Autorizaciones::checkToken();

        header('Content-Type: application/json');

        // Sanitizar los datos recibidos
        $datos = [];
        foreach ($_POST as $key => $valor) {
            if(is_array($valor)){
                $datos[$key] = array_map('htmlspecialchars', array_map('trim', $valor));
            } else {
                $datos[$key] = htmlspecialchars(trim($valor));
            }
        }

        // Validar esos datos
        if(empty($datos['nombre'])){
            mensajeError('El nombre es obligatorio');
        }
        if(empty($datos['contacto'])){
            mensajeError('Elige un método de contacto');
        }
        if(empty($datos['email'])){
            if($datos['contacto'] == 'e-mail'){
                mensajeError('El Email no puede estar vacio');
            }
        } else {
            if(!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)){
                mensajeError('El Email no tiene un formato válido');
            }
        }

        if(empty($datos['telefono'])){
            if($datos['contacto'] == 'teléfono'){
                mensajeError('El teléfono no puede estar vacio');
            }
        } else {
            $datos['telefono'] = preg_replace('/[^0-9+]/', '', $datos['telefono']);
            if(preg_match('/^\+?[0-9]d{7,15}$/', $datos['telefono'])){
                mensajeError('El teléfono no tiene un formato válido');
            }
        }


        $cuerpo = "<h2>Nuevo mensaje del formulario YoungPeople</h2><table>";
        foreach($datos as $clave => $valor) {
            if(is_array($valor)){
                $valor = implode(', ', $valor);
            }
            $cuerpo .= "<tr><td><strong>{$clave}:</strong></td><td>{$valor}</td></tr>";
        }
        $cuerpo .= "</table>";

        $asunto = "Nuevo mensaje del formulario YoungPeople";
        $destinatario = 'competenciasdigitales55@gmail.com';

        $correo = new CorreoService();
        $enviado = $correo->enviarCorreo($destinatario, $asunto, $cuerpo);
        if($enviado){
            mensajeOK("Correo enviado correctamente");
        } else {
            mensajeError("Correo NO enviado");
        }


        
    }

}
?>