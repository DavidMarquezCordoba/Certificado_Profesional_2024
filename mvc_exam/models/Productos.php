<?php 
namespace Models;

use Models\Producto;
use Models\Pedido;
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

    public function nuevoProducto($datosRecibidos) {

        // .... Ejercicio1 
        $buscarProducto = $this->buscarPorCodigoBarras($datosRecibidos['newcod']);
        $buscarProducto = json_decode($buscarProducto,true);
        
        
        if(!isset($buscarProducto['error'])){ 
            return ['ok' => false, 'error' => 'El producto Ya existe y es ' . $buscarProducto['nombre']];
        }  
 
        $datosRecibidos['foto'] = $this->gestionaFoto(($buscarProducto['foto']) ?? '');
        
        $consulta = "INSERT INTO productos (nombre, unidades, categoriaId, precio, generoId, foto, codigo, descripcion)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?) ";



        $parametros = [$datosRecibidos['nombre'],$datosRecibidos['unidades'],$datosRecibidos['categoria'],
                $datosRecibidos['precio'],$datosRecibidos['genero'],$datosRecibidos['foto'],
                $datosRecibidos['newcod'],$datosRecibidos['descripcion']];
        $respuesta = $this->misDatos->guardar($consulta, $parametros);

        if($respuesta[0] === false) {
            if($respuesta[1] == 1062) {
                return ['ok' => false,'error' => 'El producto no se ha creado porque su código de barras ya existe'];
            } else {
                return ['ok' => false,'error' => 'No se ha podido crear el producto (' . $respuesta[1] . ')'];
            }
        }        
        
        return ['ok' => true, 'mensaje' => 'Producto guardado correctamente']; 

    }
    public function modificarProducto($datosRecibidos) {
        // mensajeOK('perfecto');
        $productoBuscado = $this->buscarPorCodigoBarras($datosRecibidos['codigo']);
        $productoBuscado = json_decode($productoBuscado,true);
        if(isset($productoBuscado['error'])){
            return ['ok' => false, 'error' => 'El producto no existe'];
        }  
        $datosRecibidos['foto'] = $this->gestionaFoto($productoBuscado['foto']);
        
        // Actualizamos los datos en la base datos
        $consulta = "UPDATE productos SET nombre=?, unidades=?, categoriaId=?, precio=?, generoId=?, 
                    foto=?, codigo=?, descripcion=? WHERE codigo=?";
        $parametros = [$datosRecibidos['nombre'],$datosRecibidos['unidades'],$datosRecibidos['categoria'],
                $datosRecibidos['precio'],$datosRecibidos['genero'],$datosRecibidos['foto'],
                $datosRecibidos['newcod'],$datosRecibidos['descripcion'],$datosRecibidos['codigo']];
        $respuesta = $this->misDatos->guardar($consulta, $parametros);

        if($respuesta[0] === false) {
            if($respuesta[1] == 1062) {
                return ['ok' => false,'error' => 'El producto no se ha modificado porque su código de barras ya existe'];
            } else {
                return ['ok' => false,'error' => 'Producto encontrado pero no podido modificar (' . $respuesta[1] . ')'];
            }
        }
        return ['ok' => true, 'mensaje'=>'Producto modificado correctamente'];
    }


    public function eliminarProducto($datosRecibidos) {

        $productoBuscado = $this->buscarPorCodigoBarras($datosRecibidos['codigo']);
        $productoBuscado = json_decode($productoBuscado,true);
        
        if(isset($productoBuscado['error'])){
            return ['ok' => false, 'error' => 'El producto no existe'];
        }  

        $consulta ="DELETE FROM productos WHERE codigo = ?";
        $productoEliminado = $this->misDatos->guardar($consulta, [$datosRecibidos['codigo']]);
        
        if($productoEliminado[0] === false) {

            if($productoEliminado[1] == 1451) {

                $pedido = Pedido::getPedidoProducto($datosRecibidos['codigo']);
                
                if(empty($pedido)){
                    return ['ok' => false,'error' => 'El producto no se ha eliminado porque está incluido en algún pedido pero no se cual'];
                }
                    return ['ok' => false,'error' => 'El producto no se ha eliminado porque está incluido en el pedido ' . $pedido['id'] . ' del cliente ' . $pedido['nombre'] ];
            } else {
                return ['ok' => false,'error' => 'Producto encontrado pero no podido eliminar (' . $productoEliminado[1] . ')'];
            }
        }
        return ['ok' => true, 'mensaje' => 'El producto SI se ha eliminado correctamente'];
    }

    private function gestionaFoto($fotoAntigua) {
        if(empty($_FILES['miimagen']['tmp_name'])) {
            return $fotoAntigua;
        }
        $esImagen = getimagesize($_FILES['miimagen']['tmp_name']);
        if($esImagen) {
            $extension = pathinfo($_FILES['miimagen']['name'], PATHINFO_EXTENSION);
            $nombreUnico = 'pr_' . uniqid() . '.' . strtolower($extension);
            $nombreImagen = 'img/productos/' . $nombreUnico;
            move_uploaded_file($_FILES['miimagen']['tmp_name'], $nombreImagen);
            // borramos la foto anterior si existe en el servidor
            if((!empty($fotoAntigua))
                && (!str_contains($fotoAntigua, 'http'))
                && (file_exists($fotoAntigua))) {
                    unlink($fotoAntigua);
            }
            return $nombreImagen;
        } else {
            return $fotoAntigua;
        }
    }

    public static function buscaCategoria($idCategoria = '%') {
        $baseDatos = new BaseDatos();
        $consulta = "SELECT * FROM categorias WHERE id LIKE ?";
        $categoria = $baseDatos->consulta($consulta, [$idCategoria]);
        return $categoria; 
    }

    public static function buscaGenero($idGenero = '%') {
        $baseDatos = new BaseDatos();
        $consulta = "SELECT * FROM generos WHERE id LIKE ?";
        $genero = $baseDatos->consulta($consulta, [$idGenero]);
        return $genero; 
    }

}
?>