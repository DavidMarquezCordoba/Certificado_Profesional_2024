<?php 

if($_SERVER['REQUEST_METHOD'] == 'POST'){ //si no la envias por POST ni te contesta
    session_start();

    if(isset($_POST['username']) && isset($_POST['password']) && isset($_POST['password2'])){  //primero se fija que estemos enviando todos los datos
        $usuario = filter_var(trim($_POST['username']), FILTER_SANITIZE_EMAIL); //filter_var: hacerle unos cambios a la variable, FILTER_SANITIZE_EMAIL: esa constante le dice al filter que todo lo que no tenga forma de email lo borre (evitar que pongas simbolos raros...)
        $pass1 = htmlentities($_POST['password']); //htmlentities (para sanear/sanitizar): cada vez que meta algo que pueda afectar a mi codigo, le va a poner la barra de escape delante
        $pass2 = htmlentities($_POST['password2']);
        if(empty($usuario) || empty($pass1) || empty($pass2)) {
            mensajeError('Campos sin completar');
        } else if($pass1 != $pass2) {
            mensajeError('Contraseñas no coinciden');
        } else {
            $archivoUsuarios = "../json/usuarios.json";
            if(!file_exists($archivoUsuarios)) { //si NO existe el archivo (!)
                mensajeError('Archivo de usuarios no encontrado');
            } else {
                $usuarios_json = file_get_contents($archivoUsuarios); //usuarios_json tiene todo el contenido de archivoUsuarios
                $usuarios = [];
                if(json_validate($usuarios_json)){
                    $usuarios = json_decode($usuarios_json, true); //el true es por si fuera un array asociativo
                }
                foreach ($usuarios as $miUsuario) {
                    if ($miUsuario['username'] == $usuario) { //si coinciden es que el usuario esta repetido
                        mensajeError('El usuario ya existe');
                    }
                }
                $nuevoUsuario = [
                    'username' => $usuario,
                    'nombre' => '',
                    'foro' => '',
                    'password' => password_hash($pass1, PASSWORD_DEFAULT) //con esto le estamos dando seguridad | password_hash: pasa por un algoritmo de un solo sentido para encriptar la contraseña //password_default: que tipo de algoritmo quiero que use
                ];
                $usuarios[] = $nuevoUsuario; //añadimos al final al nuevo usuario
                $_SESSION['usuario'] = $usuario;
                $_SESSION['nombre'] = ''; //ahora mismo estara vacio, pero cuando haga un login y rellene... para no ir a la base de datos a buscar su nombre...
                file_put_contents($archivoUsuarios, json_encode($usuarios, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE)); //guarda informacion dentro de un archivo, primero le damos la ruta y despues el nombre del archivo
                // JSON_PRETTY_PRINT: con los saltos de linea y las sangria | JSON_UNESCAPED_UNICODE: no va a escapar a los codigos unicode (es decir, no te lo transforma a htmlentities)
                $mensaje = [
                    "ok" => true,
                    "mensaje" => "Usuario creado correctamente"
                ];
                exit(json_encode($mensaje)); //tambien podria poner echo
            }
        }
    } else {
        mensajeError('Falta informacion');
    }

}
function mensajeError($error) {
    $mensaje = [
        "ok" => false,
        "error" => $error
    ];
    die(json_encode($mensaje, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));
    //die() o exit() finaliza la ejecucion del codigo PHP
    //con die no sigue leyendo el codigo siguiente (solo imprime -igual que un echo- y para), muere, no importa todo lo que siga //tambien podria usar EXIT
    //lo siguiente es equivalente a lo anterior
    //die(json_encode(["ok" => false, "error" => "faltan datos"])); // encode: convertir un array/objeto en string
}
?>