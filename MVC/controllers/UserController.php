<?php 

namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';

class UserController {

    public static function update() {
        // mensajeError('Estas en update');
    
        header('Content-Type: application/json'); // buenas practicas seria ponerlo, y antes de cualquier echo

        // Autorizaciones::checkToken();  // en todas las apis lo usamos para protegerla para que no puedan usar un bot y acceder a ella
        // para usar POSTMAN tenemos que dejarlo comentado

        // Sanitizamos los datos entrantes
        $nombre = preg_replace("/[^a-zA-ZñÑáéíóúÁÉÍÓÚ çÇü]/u","", trim($_POST['name']));
        $usuario = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL); // filter_var: todo lo que no sea un email valido, te lo quita
        $password = trim($_POST['password'] ?? '');
        $password1 = trim($_POST['password1'] ?? '');
        $password2 = trim($_POST['password2'] ?? '');

        if(empty($usuario) || empty($password)) {
            mensajeError('Faltan campos obligatorios');
        }

        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un email valido');
        }
        
        if((strlen($password) < 8)) {
            mensajeError('La contraseña actual tiene que tener como minimo 8 caracteres');
        }

        if(!preg_match("/^[a-zA-Z0-9çÇ!$%&._-]{8,16}$/", $password)){
            mensajeError('La contraseña no es valida');
        }

        if((strlen($password1) > 0) || (strlen($password2) > 0)) {

            if(!preg_match("/^[a-zA-Z0-9çÇ!$%&._-]{8,16}$/", $password1)){
                mensajeError('La contraseña nueva no es valida');
            }
            if(!preg_match("/^[a-zA-Z0-9çÇ!$%&._-]{8,16}$/", $password2)){
                mensajeError('La contraseña nueva no es valida');
            }
            if($password1 !== $password2) {
                mensajeError('Las contraseñas deben ser iguales');
            }
        }

        $miUsuario = new Usuario($usuario);

        if($miUsuario->existe() === false) {
            mensajeError('El usuario no existe, introduce el usuario correcto');
        }

        $logeado = $miUsuario->verificaPassword($password);

        if(!$logeado) {
            mensajeError('La contraseña actual no es correcta');
        }
    
        // Imagen
        $nombreImagen = '';
        if(!empty($_FILES['miimagen']['tmp_name'])) { // los archivos vienen como $_FILE para recogerlos del servidor... // en la variable "miimagen" hay algun nombre temporal? (si hay algun archivo, lo cargo)
            // $_FILES es un input que recoge los datos ('miimagen' es el name que tiene en el js)
            $esImagen = getimagesize($_FILES['miimagen']['tmp_name']); // el tamaño de la imagen y si no tiene tamaño es porque es falso
            if($esImagen) {
                $extension = pathinfo($_FILES['miimagen']['name'], PATHINFO_EXTENSION); // del archivo que yo le doy, me dice cual es su extension
                $nombreUnico = 'yp_' . uniqid() . '.' . strtolower($extension); // con esto nos garantizamos que todos los textos van a empezar por "yp_"
                move_uploaded_file($_FILES['miimagen']['tmp_name'], 'img/avatares/' . $nombreUnico); // lo guarda en el disco duro pero no estamos modificando la bbdd
                $nombreImagen = $nombreUnico;
                // borramos la foto anterior si existe en el servidor
                if((!empty($_SESSION['usuario']['foto'])) 
                    && ($_SESSION['usuario']['foto'] != 'youngpeople.png') 
                    && (file_exists($_SESSION['usuario']['foto']))) { 
                // en nuestro caso por defecto le ponemos "youngpeople.png", entonces compruebo que en la bbdd haya foto y luego que no sea la foto por defecto para no eliminarla
                    unlink('img/avatares/' . $_SESSION['usuario']['foto']); // unlink: si el archivo existe, la borra
                }
            } else {
                mensajeError('El archivo subido no es una imagen valida');
            }
        }

        // guardar datos en la base de datos
        $usuarioModificado = $miUsuario->modificar($nombre, $password1, $nombreImagen);  
        // modificar tiene que hacer un update del usuario
        if($usuarioModificado) {
            mensajeOK('Perfil modificado correctamente');
        } else {
            mensajeError('No se han podido guardar los cambios del perfil');
        }
    
    
    
    }


}
?>