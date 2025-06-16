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

        //mensajeError(json_encode($datos, JSON_UNESCAPED_UNICODE));
        if(($datos['newcod']=='')||(!is_numeric($datos['newcod']))) {
            mensajeError('El código de barras tiene que ser numérico y no estar vacío');
        }
        if($datos['nombre']=='') {
            mensajeError('El nombre del producto no puede estar vacío');
        }
        if(($datos['unidades']=='')||(!is_numeric($datos['unidades']))) {
            mensajeError('pon un valor correcto en unidades');
        } 
        if(intval($datos['unidades'])<0) {
            mensajeError('Unidades tiene que ser mayor o igual que 0');
        } 
        if(($datos['precio']=='')||(!is_numeric($datos['precio']))) {
            mensajeError('pon un valor correcto en precio');
        } 
        if(floatval($datos['precio'])<0) {
            mensajeError('Precio tiene que ser mayor o igual que 0');
        } 
        if(($datos['categoria']=='')||(!is_numeric($datos['categoria']))) {    
            mensajeError('pon un valor correcto en categoria');
        } 
        $busqueda = Productos::buscaCategoria($datos['categoria']);
        if(empty($busqueda)){
            mensajeError('Esa categoria no es válida');
        }
        
        if(($datos['genero']=='')||(!is_numeric($datos['genero']))) {
            mensajeError('pon un valor correcto en genero');
        } 
        $busqueda = Productos::buscaGenero($datos['genero']);
        if(empty($busqueda)){
            mensajeError('Ese género no es válido');
        }

        $productosModel = new Productos();
        $resultado = [];

        if($datos['acc'] == 'mod'){
            if($datos['codigo'] == ''){
                // mensajeError('No puedes crear aún');
                $resultado = $productosModel->nuevoProducto($datos);
            } else {
                // mensajeError('No puedes modificar aún');
                $resultado = $productosModel->modificarProducto($datos);
            }
        }
        else if($datos['acc'] == 'del'){
            // mensajeError('No puedes borrar aún');
            $resultado = $productosModel->eliminarProducto($datos);
        }
        echo json_encode($resultado, JSON_UNESCAPED_UNICODE);
    }

    public static function todasCategorias() {
        echo json_encode(Productos::buscaCategoria());
    }

    public static function todosGeneros() {
        echo json_encode(Productos::buscaGenero());
    }

}
?>