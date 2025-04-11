<?php 
require_once 'BaseDatos.php';

require_once 'Producto.php';

class Productos {
    private $productos; //aqui dentro se van a meter todos los productos
    private $misDatos;

    public function __construct() { //lo que yo reciba de la variable que instancie
        $this-> misDatos = new BaseDatos; //el this lleva $ y NO la variable, eso significa que es una variable interna
    }

    public function obtenerProductos($idioma = 'es') { //pongo public porque quiero usar este metodo fuera de la clase, si no me envian el idioma, me garantizo que lo ponga en español (la clase viene preparada por defecto con un idoma)
        $this -> productos = $this -> misDatos -> consulta("select productos.*, categorias.nombre as categoria, generos.nombre as genero from productos
        join generos on generos.id = productos.generoId
        join categorias on categorias.id = productos.categoriaId order by productos.precio desc;");
        
        $resultado = array_map(function($producto) use ($idioma) { //aqui primero la funcion y despues el array / lo que se guarda en resultado es el resultado de la funcion
            $miProducto = new Producto($producto, $idioma); //una instancia de la clase producto, y le envio producto e idioma
            return $miProducto->reducido(); //por cada producto, que me envie el metodo reducido (nombre en su idioma, precio, foto y codigo de barra)
        }, $this->productos); //de productos va a coger cada trocito (producto)

        return json_encode($resultado, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    public function buscarPorCodigoBarras($codigo, $idioma = 'es') {
        foreach ($this->productos as $producto) {
            if($producto['codigo_barras'] == $codigo){
                $miProducto = new Producto($producto, $idioma); //mi producto es un objeto de la clase producto, y al constructor le voy a enviar todo el producto completo mas el idioma
                return json_encode($miProducto->obtenerDetalles(), JSON_UNESCAPED_UNICODE); //para acceder a propierdades o metodos tenemos que usar: ->
            }
        }
        return json_encode(['error' => 'Producto no encontrado'], JSON_UNESCAPED_UNICODE); //para que no de errores, la respuesta es un array asociativo
    }

    public function buscarPorNombre($palabra, $idioma = 'es') {
        $filtro = strtolower($palabra);
        $resultado = array_filter($this->productos, function($producto) use ($filtro, $idioma) { //aqui primero el array y despues la funcion
            return empty($filtro) || 
                strpos(strtolower($producto['nombre'][$idioma]), $filtro) !== false;
        });

        $resultadoObjetos = array_map(function($producto) use ($idioma) {
            $miProducto = new Producto($producto, $idioma);
            return $miProducto->reducido();
        }, $resultado);
        return json_encode(array_values($resultadoObjetos), JSON_UNESCAPED_UNICODE);
    }
}
?>