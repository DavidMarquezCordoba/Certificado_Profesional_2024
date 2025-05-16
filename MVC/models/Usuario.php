<?php 

// los modelos como son una clase solo pueden hacer una cosa, en este caso USUARIO
// tienen que tener entidad propia y que como es algo concreto, tiene valor por si mismo

namespace Models;

use MVC\Autorizaciones;
use MVC\BaseDatos;

class Usuario {

    private $usuario;

    private $datosUsuarios; // esto va a ser la instancia a la bbdd

    public function __construct(string $usuario = '') {
        $this->datosUsuarios = new BaseDatos();
        $miConsulta = "SELECT * FROM clientes WHERE usuario = ?";
        $usuariosRecibidos = $this->datosUsuarios->consulta($miConsulta, [$usuario]);
        if(sizeof($usuariosRecibidos) == 1) {
            $this->usuario = $usuariosRecibidos[0];
        } else {
            $this->usuario = [
                'usuario' => false
            ];
        }
    }

    public function existe() {
        if($this->usuario['usuario'] === false) {
            return false;
        }
        return true;
    }

    public function verificaPassword($password) {
        if(empty($this->usuario)) {
            return false;
        }

        // if($this->usuario['pass'] != $password) { 
        if(!password_verify($password, $this->usuario['pass'])) { // nos vamos a la bbdd y miramos en la tabla el nombre que le hayamos puesto a la columna de password
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
    
    public function crear($usuario, $password){
        $miPass = password_hash($password, PASSWORD_DEFAULT);
        $miConsulta = "INSERT INTO clientes (usuario, pass) VALUES (?,?)";
        $datosRecibidos = $this->datosUsuarios->guardar($miConsulta, [$usuario, $miPass]);

        if($datosRecibidos[0]){
            $_SESSION['usuario'] = [
                'idusuario' => htmlspecialchars($datosRecibidos[1]),
                'usuario' => htmlspecialchars($usuario),
                'nombre' => '',
                'foto' => 'youngpeople.png',
                'role' => 1
            ];
        }

        return $datosRecibidos[0];
    }

    
    public function modificar($nombre, $password1, $nombreImagen){
        $miPass = $this->usuario['pass'];
        $miNombre = $this->usuario['nombre'];
        $miFoto = $this->usuario['foto'];

        $miConsulta = "UPDATE clientes SET nombre = ?, pass = ?, foto = ? WHERE usuario = ?";

        if ($password1 !== '') {
            $miPass = password_hash($password1, PASSWORD_DEFAULT); //Mi pass será hasheado, es decir, cifrado
        }

        if ($nombreImagen !== '') {
            $miFoto = $nombreImagen;
        }

        if ($nombre !== '') {
            $miNombre = $nombre;
        }

        $datosRecibidos = $this->datosUsuarios->guardar($miConsulta, [$miNombre, $miPass, $miFoto, $this->usuario['usuario']]);

        if ($datosRecibidos[0]) {
            $_SESSION['usuario']['nombre'] = htmlspecialchars($miNombre);
            $_SESSION['usuario']['foto'] = $miFoto;
        }

        return $datosRecibidos[0];
    }
}

?>