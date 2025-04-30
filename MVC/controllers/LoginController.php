<?php 

namespace Controllers;

class LoginController {


    public static function registro(){
        echo json_encode(['ok' => true, 'mensaje' => 'esto es una prueba de registro']);
    }


    public static function login(){
        echo json_encode(['ok' => false, 'error' => 'esto es una prueba de login']);
    }



}

?>