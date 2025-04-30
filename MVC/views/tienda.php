<main>
    <section id="productos-contenedor">Tienda</section>
</main>

<!-- Detalle del producto -->
<div id="detalle-modal" class="modal">
    <div id="modal-contenido" class="modal-contenido">
        <span class="close">&times;</span>
        <h2 id="detalle-nombre"></h2>
        <div class="modal-interior">
            <img src="" alt="" class="detalle-imagen">
            <div class="modal-detalles">
                <p>Precio: <span class="detalles" id="detalle-precio"></span></p>
                <p>Categoría: <span class="detalles" id="detalle-categoria"></span></p>
                <p>Género: <span class="detalles" id="detalle-genero"></span></p>
                <p>Unidades disponibles: <span class="detalles" id="detalle-unidades"></span></p>
                <img id="detalle-barcode" src="" alt="código de barras">
                <div class="div-agregar">
                    <input type="hidden" id="detalle-codigo" value="">
                    <input type="number" value="1" id="detalle-unidades-seleccionadas" min="1">
                    <button id="detalle-agregar">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Carrito -->
<div id="carrito-modal" class="modal">
    <div id="carrito-contenido" class="modal-contenido">
        <span class="close">&times;</span>
        <h2>Carrito compra</h2>
        <ul id="lista-carrito"></ul>
        <p>Total: <span class="total" id="total-carrito">0.00€</span></p>
    </div>
</div>