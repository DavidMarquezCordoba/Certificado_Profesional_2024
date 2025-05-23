<?php 
namespace Models;

use Models\Producto;
use MVC\BaseDatos;


class Productos {
    private $productos;
    private $misDatos;

    public function __construct() {
        $this->misDatos = new BaseDatos();
    }
    public function obtenerProductos($idioma = 'es') {
        $this->productos = $this->misDatos->consulta("SELECT p.*, c.nombre AS categoria
        , g.nombre AS genero FROM productos p
        JOIN categorias c ON p.categoriaId = c.id
        JOIN generos g ON p.generoId = g.id
        ORDER BY p.precio DESC;");

        $resultado = array_map(function($producto) use ($idioma) {
            $miProducto = new Producto($producto, $idioma);
            return $miProducto->reducido();
        }, $this->productos);

        return json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    public function buscarPorCodigoBarras($codigo, $idioma = 'es') {
        $this -> productos = $this -> misDatos -> consulta("SELECT p.*, g.nombre AS genero, c.nombre AS categoria FROM productos p
                                JOIN categorias c ON c.id = p.categoriaId 
                                JOIN generos g ON g.id = p.generoId
                                WHERE p.codigo LIKE ?", [$codigo]);

        if(!empty($this->productos)){
            $miProducto = new Producto($this->productos[0]);
            return json_encode($miProducto->obtenerDetalles(), JSON_UNESCAPED_UNICODE);
        }

        return json_encode(['error' => 'Producto no encontrado'], JSON_UNESCAPED_UNICODE);
    }

    public function buscarPorNombre($palabra, $idioma = 'es') {
        $consulta = "SELECT p.*, g.nombre AS genero, c.nombre AS categoria FROM productos p
                                JOIN categorias c ON c.id = p.categoriaId 
                                JOIN generos g ON g.id = p.generoId
                                WHERE p.nombre LIKE ?";
        $parametro = "%" . $palabra . "%";
        $this -> productos = $this -> misDatos -> consulta($consulta, [$parametro]);

        $resultado = array_map(function($producto) use ($idioma) {
            $miProducto = new Producto($producto, $idioma);
            return $miProducto->reducido();
        }, $this->productos);
        return json_encode(array_values($resultado), JSON_UNESCAPED_UNICODE);
    }
}
?>