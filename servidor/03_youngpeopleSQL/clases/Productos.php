<?php 
require_once 'Producto.php';

class Productos {
    private $productos;

    // Constructor
    public function __construct($archivo_json)
    {
        $this-> productos = [];
        if(file_exists($archivo_json)) {
            $productos_json = file_get_contents($archivo_json);
            if (json_validate($productos_json)) {
                $this -> productos = json_decode($productos_json, true);
            }
        }
    }

    // Métodos

    // Obtener productos
    public function obtenerProductos($idioma = 'es'){
        $resultado = array_map(function($producto) use ($idioma){
            $miProducto = new Producto($producto, $idioma);
            return $miProducto -> reducido();
        }, $this -> productos);

        return json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    // Buscar por código de barras
    public function buscarPorCodigoBarras($codigo, $idioma = 'es'){
        foreach ($this -> productos as $producto) {
            if ($producto['codigo_barras'] == $codigo) {
                $miProducto = new Producto($producto, $idioma);
                return json_encode($miProducto->obtenerDetalles(), JSON_UNESCAPED_UNICODE);
            }
        }
        return json_encode(['error' => 'Producto no encontrado'], JSON_UNESCAPED_UNICODE);
    }

    // Buscar por nombre

    public function buscarPorNombre ($palabra, $idioma = 'es'){
        $filtro = strtolower($palabra);
        $resultado = array_filter($this->productos, function($producto) use ($filtro, $idioma) {
            return empty($filtro) ||
                strpos(strtolower($producto['nombre'][$idioma]), $filtro) !== false;
        });

        $resultadoObjetos = array_map(function($producto) use ($idioma) {
            $miProducto = new Producto($producto, $idioma);
            return $miProducto->reducido();
        }, $resultado);

        return json_encode($resultadoObjetos, JSON_UNESCAPED_UNICODE);
    }
}
?>