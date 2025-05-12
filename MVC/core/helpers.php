<?php 
// aqui van las funciones auxiliares que se pueden usar en cualquier arcivo

// envia un mensaje de error desde las api al navegador
function mensajeError($mensaje) {
    echo json_encode(['ok' => false, 'error' => $mensaje]);
    exit;
}
// envia un mensaje de OK desde las api al navegador
function mensajeOK($mensaje) {
    echo json_encode(['ok' => true, 'mensaje' => $mensaje]);
    exit;
}


?>