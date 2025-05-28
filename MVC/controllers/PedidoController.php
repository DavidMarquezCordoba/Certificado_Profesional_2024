<?php 

namespace Controllers;

use MVC\Autorizaciones;
use Models\Pedido;
use Models\Producto;
use Models\Productos;

require_once __DIR__ . '/../core/helpers.php';


class PedidoController {

    public static function agregarProducto() {
        // mensajeError('pedidoController');

        Autorizaciones::checkToken(); // va a mirar que el token de la cabecera es igual al nuestro

        $miUsuario = Autorizaciones::checkLogeado(); // te retorna usuario falso o te devuelve al usuario con todos sus datos en un array
        if($miUsuario === false) { // verificamos que sea estrictamente falso
            mensajeError('Usuario no Logueado');
        }

        $codigo = $_GET['cod'] ?? null; // si no me llega nada por codigo, me pone null
        $cantidad = $_GET['ca'] ?? null; // lo mismo con cantidad (ambos tendran un valor aunque sea null)

        $pedido = new Pedido(); // creo una instancia a la clase pedido y consigo un id de pedido

        $resultado = [];
        if(!$codigo) {
            $resultado = $pedido->getProductosPedido(); // si no tengo un codigo, que me enseñe los productos del carrito
        } else {
            $resultado = $pedido->addProducto($codigo, $cantidad); // aqui me devuelve todos los productos, el nuevo que agrego mas lo que ya tenia en el carrito
        }

        if(isset($resultado['ok'])) {
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