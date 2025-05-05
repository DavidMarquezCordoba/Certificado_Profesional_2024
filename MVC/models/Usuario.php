<?php 

namespace Models;

use MVC\Autorizaciones;
use MVC\BaseDatos;

class Usuario {

    private $usuario;

    private $datosUsuarios;

    public function __construct(string $usuario = ''){

        $this->datosUsuarios = new BaseDatos();

        $miConsulta = "SELECT * FROM clientes WHERE usuario = ?";

        $usuariosRecibidos = $this->datosUsuarios->consulta($miConsulta, [$usuario]);

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

    public function verificaPassword($password){

        if(empty($this->usuario)){
            return false;
        }

        if($this->usuario['pass'] != $password){
            return false;
        }

        Autorizaciones::iniciarSesionPHP();
        
        $_SESSION['usuario'] = [
            'idusuario' => htmlspecialchars($this->usuario['id']),
            'usuario' => htmlspecialchars($this->usuario['usuario']),
            'nombre' => htmlspecialchars($this->usuario['nombre']),
            'foto' => htmlspecialchars($this->usuario['foto']),
            'role' => htmlspecialchars($this->usuario['roleId'])
        ];

        return true;
    }




}
?>