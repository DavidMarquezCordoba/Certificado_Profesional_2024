<?php 

namespace Models;

use MVC\BaseDatos;

class Usuario {

    private $usuario;

    private $datosUsuarios;

    public function __construct(string $usuario = ''){
        $this->datosUsuarios = new BaseDatos();
        $miConsulta = "SELECT * FROM clientes WHERE usuario = '" .  $usuario  . "';";
        $usuariosRecibidos = $this->datosUsuarios->consulta($miConsulta);
        if(sizeof($usuariosRecibidos) == 1){
            $this->usuario = $usuariosRecibidos[0];
        } else {
            $this->usuario = [
                'usuario' => false
            ];
        }
    }


    public function existe(){
        if($this->usuario['usuario'] === false) {
            return false;
        }

        return true;
    }






}
?>