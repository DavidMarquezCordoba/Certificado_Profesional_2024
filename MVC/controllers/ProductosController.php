<?php 
namespace Controllers;

use MVC\Autorizaciones;
use Models\Productos;

require_once __DIR__ . '/../core/helpers.php';

class ProductosController {

    public static function productos() {

        Autorizaciones::checkToken();
        
        $lang = 'es';

        header('Content-Type: application/json');

        $listaProductos = new Productos();
        $resultado = [];

        if(isset($_GET['buscar'])){
            $resultado = $listaProductos->buscarPorNombre(htmlentities($_GET['buscar']), $lang);
        } else if(isset($_GET['detalles'])){
            $resultado = $listaProductos->buscarPorCodigoBarras(htmlentities($_GET['detalles']), $lang);
        } else {
            $resultado = $listaProductos->obtenerProductos($lang);
        }
        echo $resultado;
    }

    public static function editar() {

        $datos = [];

        foreach($_POST as $key => $valor) {
            $datos[$key] = htmlspecialchars(trim($valor));
        }

        if((($datos['newcod']) == '') || (!is_numeric($datos['newcod']))){
            mensajeError('El código de barras tiene que ser numérico y no puede estar vacío');
        }
        
        if ($datos['nombre'] == '') {
            mensajeError('El nombre no puede estar vacío');
        }
        
        if((($datos['unidades']) == '') || (!is_numeric($datos['unidades']))){
            mensajeError('Pon un valor correcto');
        }

        if((intval(($datos['unidades'])) < 0) ){
            mensajeError('Unidades tiene que ser igual o mayor que 0');
        }

        if(($datos['precio'] == '') || (!is_numeric($datos['precio']))){
            mensajeError('El precio no debe estar vacío y debe ser numérico');
        }

        if(floatval(($datos['precio'])) < 0) {
            mensajeError('El precio debe ser mayor o igual a 0');
        }

        // if((($datos['categoria']) < 1) || (($datos['categoria']) > 7)) {
        //     mensajeError('Pon un valor correcto en la categoría');
        // }
        
        $busqueda = Productos::buscaCategoria($datos['categoria']);
        if (empty($busqueda)) {
            mensajeError('Esa categoría no es válida');
        }

        // if((($datos['genero']) < 1) || (($datos['genero']) > 3)) {
        //     mensajeError('Pon un valor correcto en el género');
        // }

        $busqueda = Productos::buscaGenero($datos['generos']);
        if (empty($busqueda)) {
            mensajeError('Ese género no es válido');
        }

        $productosModel = new Productos();
        $resultado = [];

        if($datos['acc'] == 'mod') {
            if ($datos['codigo'] == '') {
                // mensajeError('No puedes crear aún');
                $resultado = $productosModel->nuevoProducto($datos);
            } else {
                mensajeError('No puedes modificar aún');
                $resultado = $productosModel->modificarProducto($datos);
            }
        } else if($datos['acc'] == 'del') {
            mensajeError('No puedes eliminar aún');
            $resultado = $productosModel->eliminarProducto($datos);
        } 
    }

    public static function todasCategorias(){
        echo json_encode(Productos::buscaCategoria());
    }

    public static function todosGeneros(){
        echo json_encode(Productos::buscaGenero());
    }

}
?>