<?php

require __DIR__ . '/../../vendor/autoload.php';
use MatthiasMullie\Minify;

$carpetaFuente = __DIR__ . '/../../scr/js/';
if((isset($_GET['s']))&&(file_exists($carpetaFuente . $_GET['s'] . '.js'))){

    header("Content-Type: application/javascript");

    $archivoFuente = $carpetaFuente . $_GET['s'] . '.js';
    $archivoFinal = __DIR__ . '/' . $_GET['s'] . '.min.js';

    $ultimaModificacion = filemtime($archivoFuente);
    
    // Regenerar si hace falta
    if (!file_exists($archivoFinal) || filemtime($archivoFinal) < $ultimaModificacion) {
        $minificador = new Minify\JS();
        $minificador->add($archivoFuente);
        $minificador->minify($archivoFinal);
    }

    readfile($archivoFinal);
} else {
    echo "";
}