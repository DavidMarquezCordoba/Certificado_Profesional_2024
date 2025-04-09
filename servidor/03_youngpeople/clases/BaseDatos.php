<?php

// use Dom\Mysql;

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
        // echo 'Conectado correctamente';
        return $miConexion;
    }

    // Método consulta
    public function consulta(string $consultaSQL){
        $respuesta = $this -> conexion -> query($consultaSQL); 
        $resultados = [];

        while ($resultado = $respuesta -> fetch_array(MYSQLI_ASSOC)) {
            $resultados[] = $this -> convertirNumero($resultado); //Con esto convertimos el string en número
            // $resultados[] = $resultado; --> Esto devuelve el precio en formatostring
        }

        return $resultados;
    }

    // Método convertirNumero
    private function convertirNumero($fila){
        foreach($fila as $key => $value){
            if(is_numeric($value)){
                $fila[$key] = $value + 0;
            }
        }
        return $fila;
    }
}

$conectado = new BaseDatos();

$misResultados = $conectado -> consulta("select productos.*, categorias.nombre as categoria, generos.nombre as genero from productos
join generos on generos.id = productos.generoId
join categorias on categorias.id = productos.categoriaId order by productos.precio desc;");

echo json_encode($misResultados, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE);

?>