<?php 
namespace MVC;

use mysqli;

// require_once __DIR__ . '/config/db.php'; //Usando las variables de entorno no es necesario usar db.php



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
            $miconexion = new Mysqli( $this->servidor, $this->usuario, $this->pass, $this->baseDatos); // Mysqli: es una clase que tiene PHP
        } catch (\Throwable $th) {
            die('error al conectar con la base de datos');
        }
        // echo 'conectado correctamente';
        return $miconexion;
    }
    
    // Función para realizar una consulta a la base de datos, recibe una consulta SQL y devuelve un array con todas las filas recibidas
    // SELECT
    public function consulta($consultaSQL, $parametros = []) {
        $respuesta = $this->realizaConsulta($consultaSQL, $parametros);
        $resultados = [];

        if($respuesta[0]){  // ha sido correcta la peticion? si es correcta, mete los datos en el array
            //$respuesta[0] sera true o false dependiendo de si la consulta dio ok o no (sera el $resultadoConsultado que este mas abajo)
            //$respuesta[1] tendra los datos
            while ($resultado = $respuesta[1] -> fetch_array(MYSQLI_ASSOC)){ // los datos que me va a dar la bbdd va a recibir un array asociativo 
                $resultados[] = $this->convertirNumero($resultado); // Esta línea devuelve los valores numéricos como número usando la función "convertirNumero"
            }
        }
        return $resultados;
    }

    // INSERT y UPDATE
    public function guardar($consultaSQL, $parametros = []) {
        $respuesta = $this->realizaConsulta($consultaSQL, $parametros);
        if($respuesta[0]){
            $ultimoId = $this->conexion->insert_id; // obtenemos la ultima id creada // insert_id: propiedad publica que tiene conexion (instancia a la bbdd)
            return [true, $ultimoId];
        } else {
            return [];
        }
    }

    // Parte comun a las dos funciones publicas
    private function realizaConsulta($consultaSQL, $parametros){
        $consultaPreparada = $this->conexion->prepare($consultaSQL); // prepare: metodo de Mysqli
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
                    $parametros[$key] = null; // $key es la posicion del parametro (0,1,2,...)
                } else {
                    $tipos .= 's';
                }
                $refs[$key] = &$parametros[$key]; // &: la referencia a ese valor (a la variable en si, no a su valor) // donde esta esta variable en memoria, voy a detectar el sitio donde esta
            }
            array_unshift($refs, $tipos);
            call_user_func_array([$consultaPreparada, 'bind_param'], $refs);  // bind_param: es una funcion que va a sustituir las "?" por los valores, pero si no es del tipo correcto, no va a funcionar
        }
        $resultadoConsulta = $consultaPreparada->execute(); // cuando lo ejecutamos devuelve true/false // execute: metodo de Mysqli
        return [$resultadoConsulta, $consultaPreparada->get_result()]; // aqui devuelve true/false, y los resultados
    }

    // Función que revisa una fila devuelta por la base de datos y si tiene algún valor numérico pero que viene en string, lo convierte a numérico
    private function convertirNumero($fila) {
        foreach ($fila as $key => $value) {
            if(is_numeric($value)){
                $fila[$key] = $value + 0; // le +0 para obligarlo que se convierta a numero
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