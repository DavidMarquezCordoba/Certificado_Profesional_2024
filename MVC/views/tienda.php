<main>
    <section id="productos-contenedor">Tienda</section>
</main>

<!-- detalle del producto -->
<div id="detalle-modal" class="modal">
    <div id="modal-contenido" class="modal-contenido">
        <span class="close">&times;</span>
        <h2 id="detalle-nombre"></h2>
        <div class="modal-interior">
            <img id="detalle-imagen" src="" alt="">
            <div class="modal-detalles">
                <p>Precio: <span class="detalles" id="detalle-precio"></span></p>
                <p>Categoría: <span class="detalles" id="detalle-categoria"></span></p>
                <p>Género: <span class="detalles" id="detalle-genero"></span></p>
                <p>Unidades disponibles: <span class="detalles" id="detalle-unidades"></span></p>
                <img id="detalle-barcode" src="" alt="Código de barras">
                <div class="tallas-contenedor" id="detalle-tallas"></div>
                <div class="div-agregar">
                    <input type="hidden" id="detalle-codigo" value="">
                    <input type="number" id="detalle-unidades-seleccionadas" min="1" value="1">
                    <button id="detalle-agregar"><?= $botonCarrito ?></button>
                </div>
            </div>
        </div> 
        <p id="detalle-descripcion"></p>
    </div>
</div>

<!-- carrito de la compra -->
<div id="carrito-modal" class="modal">
    <div id="carrito-contenido" class="modal-contenido">
        <span class="close">&times;</span>
        <h2>Carrito de Compras</h2>
        <ul id="lista-carrito"></ul>
        <p>Total: <span class="total" id="total-carrito">0.00€</span></p>
    </div>
</div>