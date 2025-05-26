<?php 

// los modelos como son una clase solo pueden hacer una cosa, en este caso USUARIO
// tienen que tener entidad propia y que como es algo concreto, tiene valor por si mismo

namespace Models;

use MVC\Autorizaciones;
use MVC\BaseDatos;
use Controllers\UserController;

class Usuario {

    private $usuario; // a esta variable usuario no podremos acceder desde fuera porque es privada
    // usuario es el unico que tiene control sobre la tabla clientes de la bbdd

    private $datosUsuarios; // esto va a ser la instancia a la bbdd

    public function __construct(string $usuario = '') {
        $this->datosUsuarios = new BaseDatos(); // datosUsuarios: es un objeto de tipo bbdd y a traves de el es como llego a los metodos...
        $miConsulta = "SELECT * FROM clientes WHERE usuario = ?";
        $usuariosRecibidos = $this->datosUsuarios->consulta($miConsulta, [$usuario]);
        if(sizeof($usuariosRecibidos) == 1) {
            $this->usuario = $usuariosRecibidos[0]; //este es el sitio mas cercano a la bbdd
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

        //if($this->usuario['pass'] != $password) { // nos vamos a la bbdd y miramos en la tabla el nombre que le hayamos puesto a la columna de password
        // comprobar password hasheada
        if(!password_verify($password, $this->usuario['pass'])) { // comprobar el password que me llega con el hash de la bbdd
            return false;
        }

        Autorizaciones::iniciarSesionPHP();
        $_SESSION['usuario'] = [ // en la variable de sesion guardo todos los datos
            'idusuario' => htmlspecialchars($this->usuario['id']),
            'usuario' => htmlspecialchars($this->usuario['usuario']),
            'nombre' => htmlspecialchars($this->usuario['nombre']),
            'foto' => htmlspecialchars($this->usuario['foto']),
            'role' => htmlspecialchars($this->usuario['roleId'])
        ];

        return true;
    }

    public function crear($usuario, $password) {
        $miPass = password_hash($password, PASSWORD_DEFAULT); // cuando registremos al usuario ya va con el password hasheado
        $miConsulta = "INSERT INTO clientes (usuario, pass) VALUES (?, ?)";
        $datosRecibidos = $this->datosUsuarios->guardar($miConsulta, [$usuario, $miPass]); // va a llamar a un metodo guardar, le pasa la consulta y le envia los datos para llenar los huecos (las ?)
        if($datosRecibidos[0]) { // esto significa que la insercion ha sido correcta
            $_SESSION['usuario'] = [ // esto es para logear al usuario directamente (una vez que se crea un usuario nuevo)
                'idusuario' => htmlspecialchars($datosRecibidos[1]),
                'usuario' => htmlspecialchars($usuario),
                'nombre' => '',
                'foto' => 'youngpeople.png', // por default
                'role' => 1 // por default
            ];
        }
        return $datosRecibidos[0];
    }

    public function modificar($nombre, $password1, $nombreImagen) {

        // vamos a coger algunos datos que tenemos antiguos
        $miPass = $this->usuario['pass']; // dentro de esta variable local voy a guardar el password de la bbdd
        $miNombre = $this->usuario['nombre']; // aqui lo mismo para guardar el nombre
        $miFoto = $this->usuario['foto']; // aqui lo mismo para guardar la foto

        $miConsulta = "UPDATE clientes SET nombre = ?, pass = ?, foto = ? WHERE usuario = ?";

        if($password1 !== '') {
            $miPass = password_hash($password1, PASSWORD_DEFAULT); 
        }
        if($nombreImagen !== '') {
            $miFoto = $nombreImagen;
        }
        if($nombre !== '') {
            $miNombre = $nombre;
        }

        $datosRecibidos = $this->datosUsuarios->guardar($miConsulta, [$miNombre, $miPass, $miFoto, $this->usuario['usuario']]);

        if($datosRecibidos[0]) {
            $_SESSION['usuario']['nombre'] = htmlspecialchars($miNombre);
            $_SESSION['usuario']['foto'] = $miFoto;
        }
        return $datosRecibidos[0];

    }
    
}

?>