<?php 

namespace Controllers;

use Models\Pedido;
use MVC\Autorizaciones;

require_once __DIR__ . '/../core/helpers.php';

class PedidoController{

    public static function agregarProducto() {
        // mensajeError('pedidoController');

        // Autorizaciones::checkToken();

        // $miUsuario = Autorizaciones::checkLogeado();
        // if ($miUsuario === false) {
        //     mensajeError('Usuario no logueado');
        // }

        $codigo = $_GET['cod'] ?? null;
        $cantidad = $_GET['ca'] ?? null;

        $pedido = new Pedido();

        $resultado = [];

        if (!$codigo) {
            $resultado = $pedido->getProductosPedido();
        } else {
            $resultado = $pedido->addProducto($codigo, $cantidad);
        }

        if(isset($resultado['ok'])){
            echo json_encode($resultado);
        } else {
            echo json_encode([
                'ok' => true,
                'productos' => $resultado
            ]);
        }
    }















}


?>