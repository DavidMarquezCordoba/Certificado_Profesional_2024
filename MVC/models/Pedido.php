<?php 
namespace Models;

use MVC\BaseDatos;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';


class Pedido {

    private $misDatos; 
    private $pedidoId;
    private $usuarioId;

    public function __construct() {
        $this->misDatos = new BaseDatos(); // instancia a la bbdd
        $this->usuarioId = (Autorizaciones::checkLogeado())['idusuario']; // de todos los datos del usuario solo me quedo con su id
        
        $consulta = "SELECT id FROM pedidos WHERE clienteId = ? AND completado IS NULL LIMIT 1"; 
        $resultado = $this->misDatos->consulta($consulta, [$this->usuarioId]);
        
        if(empty($resultado)) { // si esta vacio, creo un pedido nuevo
            // pedido NO completado NO encontrado
            $consulta = "INSERT INTO pedidos (clienteId) VALUES (?)"; // `` se usan para nombre de columna si tiene espacio, '' para valores
            $nuevoPedido = $this->misDatos->guardar($consulta, [$this->usuarioId]); // guardar devuelve un array donde el primer valor es si query OK (true o false) y el segundo te dice el ultimo id creado
            if($nuevoPedido[0]) {
                $this->pedidoId = $nuevoPedido[1];
                $_SESSION['pedido'] = $nuevoPedido[1];
            } else {
                mensajeError('Pedido no encontrado y no se ha podido crear');
            }
        } else { // si no esta vacio, lo capturo para seguir agregando productos al mismo pedido
            // pedido NO completado encontrado
            $this->pedidoId = $resultado[0]['id'];
            $_SESSION['pedido'] = $resultado[0]['id'];
        }
    }
    
    public function getProductosPedido() { //todos los productos que estan en mi pedido. Mi fetch me esta pidiendo mi carrito

        $consulta = "SELECT pr.nombre, pp.precio, pr.codigo, pr.foto, pp.cantidad AS unidades, 
            (SELECT SUM(pp2.cantidad * pp2.precio) FROM pedidosProductos pp2 
                WHERE pp2.pedidoId = pp.pedidoId) AS total
            FROM pedidosProductos pp
            JOIN productos pr ON pr.id = pp.productoId
            WHERE pp.pedidoId = ?";
        $resultado = $this->misDatos->consulta($consulta, [$this->pedidoId]); // dame todas las filas que pedidoId sea el mismo que yo tenga
        return $resultado;

    }

    public function addProducto($codigo, $cantidad) { // js esta esperando un array
        $res = $this->misDatos->consulta("SELECT * FROM productos WHERE codigo = ? LIMIT 1", [$codigo]); // siempre comprobar como se devuelve esa consulta, si un array de valores o un array de array, o lo que sea...
        if(empty($res)) {
            return ['ok' => false, 'error' => 'Producto no encontrado'];
        }
        $productoId = $res[0]['id']; // me devuelve un solo producto, pero es un array y aunque dentro haya uno solo tengo que poner [0] // 'id': ver como se llama la columna de la tabla productos
        $precio = $res[0]['precio'];

        // aqui comprobariamos como nos da el resultado:
        // return $res; // http://youngpeople.local/api/pedido?cod=5521481065495&ca=1

        $consulta = "INSERT INTO pedidosProductos (pedidoId, productoId, cantidad, precio) VALUES (?, ?, ?, ?) 
        ON DUPLICATE KEY UPDATE cantidad = cantidad + VALUES(cantidad), precio = VALUES(precio)"; // tenemos que sumar las cantidades y tambien dejar actualizado el precio
        // actualizar precio al mayor entre el antiguo y el nuevo:
        // precio = GREATEST(precio, VALUES(precio)) // greatest es la instruccion que compara entre uno que ya existe y el actual (lowest para el menor)
        $estadoConsulta = $this->misDatos->guardar($consulta, [$this->pedidoId, $productoId, $cantidad, $precio]);

        if($estadoConsulta[0] === false) {
            return ['ok' => false, 'erros' => 'No se ha podido insertar el producto en el carrito'];
        }

        $estadoEliminaNegativo = $this->misDatos->guardar("DELETE FROM pedidosProductos WHERE cantidad < 1",[]);
        
        return $this->getProductosPedido();
    }

    private function actualizarTotal() {

        // mi consulta (usando subconsulta):
        // $consulta = "UPDATE pedidos p SET total =
        // (SELECT SUM(pp.precio * pp.cantidad) FROM pedidosProductos pp
        // JOIN pedidos p ON p.id = pp.pedidoId
        // WHERE p.id = ?) ";

        // consulta usando JOIN
        $consulta = "UPDATE pedidos p
        JOIN (
            SELECT pp.pedidoId, SUM(pp.cantidad * pp.precio) AS total
            FROM pedidosProductos pp
            WHERE pp.pedidoId = ?
            GROUP BY pp.pedidoId) AS calculo ON p.id = pp.pedidoId
            SET p.total = calculo.total, p.fecha = NOW()";
        $estadoConsulta = $this->misDatos->guardar($consulta, [$this->pedidoId]);        
    }




//  SELECT productos.nombre, productos.precio, productos.codigo, productos.foto, pedidosProductos.cantidad AS unidades FROM pedidosProductos
//  JOIN productos ON productos.id=pedidosProductos.productoId
//  WHERE pedidosProductos.pedidoId=2;

// SELECT productos.nombre, productos.precio, productos.codigo, productos.foto, pedidosProductos.cantidad AS unidades,
// (SELECT SUM(pedidosProductos.cantidad * productos.precio) FROM pedidosProductos 
// JOIN productos ON productos.id=pedidosProductos.productoId 
// WHERE pedidosProductos.pedidoId=2) AS total
// FROM pedidosProductos
// JOIN productos ON productos.id=pedidosProductos.productoId
// WHERE pedidosProductos.pedidoId=2;

// SELECT SUM(pedidosProductos.cantidad * productos.precio) AS total FROM pedidosProductos JOIN productos ON productos.id=pedidosProductos.productoId WHERE pedidosProductos.pedidoId=2;

}
?>