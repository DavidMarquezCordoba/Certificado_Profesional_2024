<?php 

    namespace Models;

    use MVC\BaseDatos;
    use MVC\Autorizaciones;

    require_once __DIR__ . '/../core/helpers.php';

    class Pedido {

        private $misDatos;
        private $pedidoId;
        private $usuarioId;

        public function __construct(){
            $this->misDatos = new BaseDatos();

            $this->usuarioId = 2; //(Autorizaciones::checkLogeado())['idusuario'];
            $consulta = "SELECT id FROM pedidos WHERE clienteId = ? AND completado IS NULL LIMIT 1";
            $resultado = $this->misDatos->consulta($consulta, [$this->usuarioId]);
            // exit($this->usuarioId);
            // exit('Estoy Aquí');

            if(empty($resultado)){
                //pedido NoCompletado no encontrado
                $consulta = "INSERT INTO pedidos (clienteId) VALUES (?)";
                $nuevoPedido = $this->misDatos->guardar($consulta, [$this->usuarioId]);
                if ($nuevoPedido[0]) {
                    $this->pedidoId = $nuevoPedido[1];
                    $_SESSION['pedido'] = $nuevoPedido[1];
                } else {
                    mensajeError('Pedido no encontrado, no se ha podido crear');
                }
            } else {
                //pedido NoCompletado encontrado
                echo (json_encode($resultado[0]['id']));
                exit;
                $this->pedidoId = $resultado[0]['id'];
                $_SESSION['pedido'] = $resultado[0]['id'];
            }
        }

        public function getProductosPedido(){

            $consulta = "SELECT pr.nombre, pp.precio, pr.codigo, pr.foto, pp.cantidad 
                            AS unidades, (SELECT SUM(pp2.cantidad * pp2.precio) FROM pedidosProductos pp2
                            WHERE pp2.pedidoId = pp.pedidoId)
                            AS total
                            FROM pedidosProductos pp
                            JOIN productos pr ON pr.id = pp.productoId
                            WHERE pp.pedidoId = ?";
            return $this->misDatos->consulta($consulta, [$this->pedidoId]);
        }

        public function addProducto($codigo, $cantidad){

        }







    }
?>