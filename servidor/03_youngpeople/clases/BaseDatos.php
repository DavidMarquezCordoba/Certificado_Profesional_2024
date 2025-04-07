<?php

use Dom\Mysql;

require '../config/db.php';

// echo 'Esto es la conexión a la base de datos';

class BaseDatos {

    private $conexion;
    private $servidor = SERVIDOR;
    private $usuario = USUARIO;
    private $pass = PASS;
    private $baseDatos = BASE_DATOS;

    function __construct(){
        $this -> conexion = $this -> conectar();
    }

    private function conectar(){
        try {
            $miConexion = new Mysqli(
                $this -> servidor,
                $this -> usuario,
                $this -> pass,
                $this -> baseDatos,
            );
        } catch (\Throwable $th) {
            die ('Error al intentar contectar con la base de datos');
        }
        echo 'Conectado correctamente';
        return $miConexion;
    }
}

$conectado = new BaseDatos();

?>