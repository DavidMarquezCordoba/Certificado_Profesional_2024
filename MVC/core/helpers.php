<?php 

// Metemos funciones

function mensajeError($mensaje){
    echo json_encode(['ok' => false, 'error' => $mensaje]);
    exit;
}


function mensajeOk($mensaje){
    echo json_encode(['ok' => true, 'mensaje' => $mensaje]);
    exit;
}


?>