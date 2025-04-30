<?php 
namespace MVC;

use mysqli;


require_once __DIR__ . '/config/db.php';

class BaseDatos {
    private $conexion;
    private $servidor = SERVIDOR;
    private $usuario = USUARIO;
    private $pass = PASS;
    private $baseDatos = BASE_DATOS;

    function __construct() {
        $this->conexion = $this -> conectar();
    }

    // Función para conectar a una base de datos, las credenciales para la conexión están en un archivo llamado "db.php" dentro de la carpeta "config"
    private function conectar() {
        try {
            $miconexion = new Mysqli( $this->servidor, $this->usuario, $this->pass, $this->baseDatos);
        } catch (\Throwable $th) {
            die('error al conectar con la base de datos');
        }
        // echo 'conectado correctamente';
        return $miconexion;
    }
    
    // Función para realizar una consulta a la base de datos, recibe una consulta SQL y devuelve un array con todas las filas recibidas
    public function consulta( $consultaSQL) {
        $respuesta = $this->conexion->query($consultaSQL);
        $resultados = [];
        while ($resultado = $respuesta -> fetch_array(MYSQLI_ASSOC)){
            $resultados[] = $this->convertirNumero($resultado); // Esta línea devuelve los valores numéricos como número usando la función "convertirNumero"
        }
        return $resultados;
    }

    // Función que revisa una fila devuelta por la base de datos y si tiene algún valor numérico pero que viene en string, lo convierte a numérico
    private function convertirNumero($fila) {
        foreach ($fila as $key => $value) {
            if(is_numeric($value)){
                $fila[$key] = $value + 0;
            }
        }
        return $fila;
    }


}
// $conectado = new BaseDatos();

// $misResultados = $conectado->consulta("SELECT p.*, c.nombre AS categoria
// , g.nombre AS genero FROM productos p
// JOIN categorias c ON p.categoriaId = c.id
// JOIN generos g ON p.generoId = g.id
// ORDER BY p.precio DESC;");
// echo json_encode($misResultados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>