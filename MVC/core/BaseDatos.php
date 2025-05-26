<?php 
namespace MVC;

use mysqli;


// require_once __DIR__ . '/config/db.php'; // usando las variables de entorno no necesitamos el archivo db.php
// ya no necesitamos la carpeta config dentro de core (ahora usamos el archivo .env que está en la carpeta raiz del proyecto)

class BaseDatos {
    private $conexion;
    private $servidor;
    private $usuario;
    private $pass;
    private $baseDatos;

    function __construct() {
        $this->servidor = $_ENV['DB_SERVIDOR'];
        $this->usuario = $_ENV['DB_USUARIO'];
        $this->pass = $_ENV['DB_PASS'];
        $this->baseDatos = $_ENV['DB_NOMBRE'];
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
    // SELECT
    public function consulta( $consultaSQL, $parametros = []) {
        $respuesta = $this->realizaConsulta($consultaSQL, $parametros);
        $resultados = [];

        if($respuesta[0]){
            while ($resultado = $respuesta[1] -> fetch_array(MYSQLI_ASSOC)){
                $resultados[] = $this->convertirNumero($resultado); // Esta línea devuelve los valores numéricos como número usando la función "convertirNumero"
            }
        }

        return $resultados;
    }


    // INSERT y UPDATE
    public function guardar( $consultaSQL, $parametros = []) {
        $respuesta = $this->realizaConsulta($consultaSQL, $parametros);
        if($respuesta[0]){
            $ultimoId = $this->conexion->insert_id; // obtenemos la última id creada
            return [true, $ultimoId];
        } else {
            return [false, false];
        }
    }


    // parte común a las dos funciones públicas
    private function realizaConsulta($consultaSQL, $parametros){
        $consultaPreparada = $this->conexion->prepare($consultaSQL);
        if($consultaPreparada === false){
            return [false, false];
        }
        if(!empty($parametros)){
            $tipos = '';
            $refs = [];
            foreach ($parametros as $key => $parametro) {
                if(is_int($parametro)){
                    $tipos .= 'i';
                } elseif (is_float($parametro)){
                    $tipos .= 'd';
                } elseif (is_null($parametro)){
                    $tipos .= 's';
                    $parametros[$key] = null;
                } else {
                    $tipos .= 's';
                }
                $refs[$key] = &$parametros[$key];
            }
            array_unshift($refs, $tipos);
            call_user_func_array([$consultaPreparada, 'bind_param'], $refs);
        }
        $resultadoConsulta = $consultaPreparada->execute();
        return [$resultadoConsulta, $consultaPreparada->get_result()];
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