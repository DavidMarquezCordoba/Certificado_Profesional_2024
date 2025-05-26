<?php 

namespace Controllers;

use MVC\Autorizaciones;
use Services\CorreoService;

require_once __DIR__ . '/../core/helpers.php';

class FormularioController {

    public static function info() {

        // aqui verifico si llego hasta aqui y la ruta va bien
        // mensajeError('funcion no terminada');
        
        Autorizaciones::checkToken();

        // no es estrictamente necesario, es para el que reciba sepa que es un json
        header('Content-Type: application/json');

        // Sanitizar los datos recibidos
        $datos = [];
        foreach ($_POST as $key => $valor) {
            if(is_array($valor)){
                $datos[$key] = array_map('htmlspecialchars', array_map('trim', $valor)); //
            } else {
                $datos[$key] = htmlspecialchars(trim($valor));
            }
        }

        // Validar esos datos
        if(empty($datos['nombre'])){
            mensajeError('El nombre es obligatorio');
        }
        if(empty($datos['contacto'])){
            mensajeError('Elige un metodo de contacto');
        }
        if(empty($datos['email'])){
            if($datos['contacto'] == "e-mail"){
                mensajeError('El Email no puede estar vacio');
            }
        } else {
            if(!filter_var($datos['email'], FILTER_VALIDATE_EMAIL)){
                mensajeError('El Email no tiene un formato valido');
            }
        }
        if(empty($datos['telefono'])){
            if($datos['contacto'] == "teléfono"){
                mensajeError('El Teléfono no puede estar vacio');
            }
        } else {
            $datos['telefono'] = preg_replace('/[^0-9+]/', '', $datos['telefono']);
            if(preg_match('/^\+?[0-9]d{7,15}$/', $datos['telefono'])){
                mensajeError('El Telefono no tiene un formato valido');
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

        //$asunto = $_POST['asunto'];
        $asunto = "Nuevo mensaje del formulario YoungPeople";
        $destinatario = "competenciasdigitales55@gmail.com";
        
        $correo = new CorreoService();
        $enviado = $correo->enviarCorreo($destinatario, $asunto, $cuerpo);
        if($enviado) {
            mensajeOK("Correo enviado correctamente");
        } else {
            mensajeError("Correo NO enviado");
        }
        
    }
    
    
    
    
}

?>

<?php 
// ----------------------------- PRUEBA VICKY -------------------------------------
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $nombre = trim($_POST['nombre'] ?? '');
//     $email = trim($_POST['email'] ?? '');
//     $telefono = trim($_POST['telefono'] ?? '');
//     $contacto = $_POST['contacto'] ?? '';
//     $tipoInfo = $_POST['tipoinfo'] ?? '';
//     $asunto = trim($_POST['asunto'] ?? '');
//     $mensaje = trim($_POST['mensaje'] ?? '');
//     $interes = $_POST['interes'] ?? [];
    

//     if (empty($nombre)) {
//         mensajeError('El nombre es obligatorio');
//         return;
//     }

//     if ($contacto === 'e-mail' && empty($email)) {
//         mensajeError('Se seleccionó contacto por email, pero no se proporcionó uno');
//         return;
//     }

//     if ($contacto === 'teléfono' && empty($telefono)) {
//         mensajeError('Se seleccionó contacto por teléfono, pero no se proporcionó uno');
//         return;
//     }

//     if (empty($tipoInfo)) {
//         mensajeError('Debe seleccionar un tipo de información');
//         return;
//     }

//     if (empty($asunto)) {
//         mensajeError('Debe escribir un asunto');
//         return;
//     }

//     if (empty($interes) || !is_array($interes)) {
//         mensajeError('Debe seleccionar al menos un campo de interés');
//         return;
//     }

//     if (empty($mensaje)) {
//         mensajeError('El mensaje no puede estar vacío');
//         return;
//     }
// }
?>