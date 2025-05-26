<?php 
namespace Models;

use MVC\BaseDatos;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';

class Pedido {

    private $misDatos;
    private $pedidoId;
    private $usuarioId;

    public function __construct()
    {
        $this->misDatos = new BaseDatos();
        $this->usuarioId = (Autorizaciones::checkLogeado())['idusuario'];
        $consulta = "SELECT id FROM pedidos WHERE clienteId = ? AND completado IS NULL LIMIT 1";
        $resultado = $this->misDatos->consulta($consulta, [$this->usuarioId]);

        if(empty($resultado)){
            //pedido NoCompletado no encontrado
            $consulta = "INSERT INTO pedidos (clienteId) VALUES (?)";
            $nuevoPedido = $this->misDatos->guardar($consulta, [$this->usuarioId]);
            if($nuevoPedido[0]){
                $this->pedidoId = $nuevoPedido[1];
                $_SESSION['pedido'] = $nuevoPedido[1];                
            } else {
                mensajeError('Pedido no encontrado y no se ha podido crear');
            }
        } else {
            // pedido NoCompletado encontrado
            $this->pedidoId = $resultado[0]['id'];
            $_SESSION['pedido'] = $resultado[0]['id'];
        }
    }
    
    public function getProductosPedido() {

        $consulta = "SELECT pr.nombre, pp.precio, pr.codigo, pr.foto, 
            pp.cantidad AS unidades,
            (SELECT SUM(pp2.cantidad * pp2.precio) FROM pedidosProductos pp2
                WHERE pp2.pedidoId = pp.pedidoId) AS total
            FROM pedidosProductos pp
            JOIN productos pr ON pr.id = pp.productoId
            WHERE pp.pedidoId = ?";
        $resultado = $this->misDatos->consulta($consulta, [$this->pedidoId]);

        return $resultado;


    }


    public function addProducto($codigo, $cantidad){
        $res = $this->misDatos->consulta("SELECT * FROM productos WHERE codigo = ? LIMIT 1", [$codigo]);
        if(empty($res)){
            return ['ok' => false, 'error' => 'Producto no encontrado'];
        }
        $productoId = $res[0]['id'];
        $precio = $res[0]['precio'];

        $consulta = "INSERT INTO pedidosProductos (pedidoId, productoId, cantidad, 
            precio) VALUES (?, ?, ?, ?)
            ON DUPLICATE KEY UPDATE cantidad=cantidad + VALUES(cantidad), 
            precio = VALUES(precio)"; // actualizar precio al mayor entre el antiguo y el nuevo
            // precio = GREATEST(precio, VALUES(precio))
        $estadoConsulta = $this->misDatos->guardar($consulta, 
            [$this->pedidoId, $productoId, $cantidad, $precio]);

        if($estadoConsulta[0] === false){
            return ['ok'=>false, 'error'=>'No podido insertar el producto en el carrito'];
        }

        $estadoEliminaNegativo = $this->misDatos->guardar("DELETE FROM pedidosProductos WHERE cantidad < 1",[]);
    
        return $this->getProductosPedido();
    }

    private function actualizarTotal(){
        // consulta usando JOIN
        $consulta = "UPDATE pedidos p
        JOIN (
            SELECT pp.pedidoId, SUM(pp.cantidad * pp.precio) AS total
            FROM pedidosProductos pp
            WHERE pp.pedidoId = ?
            GROUP BY pp.pedidoId ) AS calculo ON p.id = pp.pedidoId
            SET p.total = calculo.total, p.fecha = NOW()";
        // consulta usando SUBCONSULTA
        $consulta = "UPDATE pedidos p
        SET total = (SELECT SUM(pp.precio * pp.cantidad) 
        FROM pedidosProductos pp 
        JOIN pedidos p ON p.id = pp.pedidoId WHERE p.id = ?)";
        
        $estadoConsulta = $this->misDatos->guardar($consulta, [$this->pedidoId]);
    }

}
?>