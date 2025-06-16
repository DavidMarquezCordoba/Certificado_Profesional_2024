<?php 
namespace Controllers;

use Models\Usuario;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';

class UserController {

    public static function update() {
        //mensajeError('Estas en update');

        // Autorizaciones::checkToken();

        // Sanitizamos los datos entrantes
        $nombre = preg_replace("/[^a-zA-ZñÑáéíóúÁÉÍÓÚ Çç`ü]/u","", trim($_POST['name']));
        $usuario = filter_var(trim($_POST['email']), FILTER_SANITIZE_EMAIL);
        $password = trim($_POST['password'] ?? '');
        $password1 = trim($_POST['password1'] ?? '');
        $password2 = trim($_POST['password2'] ?? '');

        if(empty($usuario) || empty($password)) {
            mensajeError('Faltan campos obligatorios');
        }
        
        if(!filter_var($usuario, FILTER_VALIDATE_EMAIL)) {
            mensajeError('No has introducido un Email válido');
        }

        if(strlen($password) < 8) {
            mensajeError('La contraseña actual tiene que tener como mínimo 8 carácteres');
        }

        if(!preg_match("/^[a-zA-Z0-9Çç!$%&.-_]{8,16}$/", $password)){
            mensajeError('La contraseña no es válida');
        }

        if((strlen($password1) > 0) || (strlen($password2) > 0)) {

            if(!preg_match("/^[a-zA-Z0-9Çç!$%&.-_]{8,16}$/", $password1)){
                mensajeError('La contraseña1 nueva no es válida');
            }
            if(!preg_match("/^[a-zA-Z0-9Çç!$%&.-_]{8,16}$/", $password2)){
                mensajeError('La contraseña2 nueva no es válida');
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
            mensajeError('Contraseña actual no es correcta');
        }

        // Imagen
        $nombreImagen = '';
        if(!empty($_FILES['miimagen']['tmp_name'])) { // si hay algún archivo, lo cargo
            $esImagen = getimagesize($_FILES['miimagen']['tmp_name']);
            if($esImagen) {
                $extension = pathinfo($_FILES['miimagen']['name'], PATHINFO_EXTENSION);
                $nombreUnico = 'yp_' . uniqid() . '.' . strtolower($extension);
                move_uploaded_file($_FILES['miimagen']['tmp_name'], 'img/avatares/' . $nombreUnico);
                $nombreImagen = $nombreUnico;
                // borramos la foto anterior si existe en el servidor
                if((!empty($_SESSION['usuario']['foto']))
                    && ($_SESSION['usuario']['foto'] != 'youngpeople.png')
                    && (file_exists($_SESSION['usuario']['foto']))) {
                    unlink('img/avatares/' . $_SESSION['usuario']['foto']);
                }
            } else {
                mensajeError('El archivo subido no es una imagen válida');
            }
        }

        //guardar datos en la base de datos
        $usuarioModificado = $miUsuario->modificar($nombre, $password1, $nombreImagen);
        if($usuarioModificado){
            mensajeOK('Perfil modificado correctamente');
        } else {
            mensajeError('No podido guardar lo cambios del perfil');
        }
    }



}
?>