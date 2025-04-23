<?php 

require __DIR__ . '/../../vendor/autoload.php';

use MatthiasMullie\Minify;

header("Content-Type: text/css"); //Cabecera para enviar datos CSS

$carpetaFuente = __DIR__ . '/../../scr/css/';
$archivoFinal = __DIR__ . '/styles.min.css';

$archivosFuentes = glob($carpetaFuente . '*.css');

// calculamos cuando fue la última modificación
$ultimaModificacion = 0;

foreach($archivosFuentes as $archivoFuente) {
    $ultimaModificacion = max($ultimaModificacion, filemtime($archivoFuente));
}

//unimos y minificamos los archivos si hay alguno mas reciente que el $archivoFinal
if (!file_exists($archivoFinal) || (filemtime($archivoFinal) < $ultimaModificacion)) {
    $minificador = new Minify\CSS();
    foreach($archivosFuentes as $archivoFuente){
        $minificador->add($archivoFuente);
    }
    $minificador->minify($archivoFinal);
}

// enviar css
readfile($archivoFinal);

?>