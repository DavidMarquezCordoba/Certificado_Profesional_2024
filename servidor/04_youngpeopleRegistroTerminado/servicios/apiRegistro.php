<?php 

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    session_start();

    if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['password2'])){
        $usuario = filter_var(trim($_POST['username']), FILTER_SANITIZE_EMAIL);
        $pass1 = htmlentities($_POST['password']);
        $pass2 = htmlentities($_POST['password2']);
        if(empty($usuario) || empty($pass1) || empty($pass2)){
            mensajeError('Campos sin completar');
        } else if($pass1 != $pass2) {
            mensajeError('Contraseñas no coinciden');
        } else {
            $archivoUsuarios = "../json/usuarios.json";
            if(!file_exists($archivoUsuarios)) {
                mensajeError('Archivo de usuarios no encontrado');
            } else {
                $usuarios_json = file_get_contents($archivoUsuarios);
                $usuarios = [];
                if(json_validate($usuarios_json)){
                    $usuarios = json_decode($usuarios_json, true);
                }
                foreach ($usuarios as $miUsuario) {
                    if ($miUsuario['username'] == $usuario) { // si coinciden es que el usuario está repetido
                        exit(json_encode(["ok"=>false, "error"=>'El usuario ya existe']));
                        mensajeError('El usuario ya existe');
                    }
                }
                $nuevoUsuario = [
                    'username' => $usuario,
                    'nombre' => '',
                    'foto' => '',
                    'password' => password_hash($pass1, PASSWORD_DEFAULT)
                ];
                $usuarios[] = $nuevoUsuario; // Añadimos al final al nuevo usuario
                $_SESSION['usuario'] = $usuario;
                $_SESSION['nombre'] = '';
                file_put_contents($archivoUsuarios, json_encode($usuarios, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
                $mensaje = [
                    "ok" => true,
                    "mensaje" => "Usuario creado correctamente"
                ];
                echo(json_encode($mensaje)); // die() o exit() finaliza la ejecución del código PHP en el servidor 
            }
        }
    } else {
        mensajeError('Falta información');
    }

    
}

function mensajeError($error) {
    $mensaje = [
        "ok" => false,
        "error" => $error
    ];
    exit(json_encode($mensaje, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)); // die() o exit() finaliza la ejecución del código PHP en el servidor 
}
?>