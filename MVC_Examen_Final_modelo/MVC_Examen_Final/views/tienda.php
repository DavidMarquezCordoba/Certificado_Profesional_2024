<div>
    <section id="productos-contenedor">Tienda</section>
</div>
<?php 
if($role == 2) {
    require __DIR__ . '/modales/tienda_edicion.php';
} else {
    require __DIR__ . '/modales/tienda_detalle.php';
}

?>