<!-- detalle del producto -->
<div id="detalle-modal" class="modal">
    <form id="modal-contenido" class="modal-contenido" action="/api/productos/editar" method="POST">
        <span class="close">&times;</span>
        <input name="nombre" type="text" id="detalle-nombre" value="" required>
        <div class="modal-interior">
            <img id="detalle-imagen" src="" alt="" title="Haz click para cambiar la imagen">
            <input type="file" id="imagen-input" name="image" accept="image/*" onchange="previsualizaImagen()">
            <div class="modal-detalles">
                <p>Precio: <input name="precio" class="input-detalles" type="number" id="detalle-precio" value="" step="0.01"></p>
                <p>Categoría: 
                <select class="input-detalles" type="number" id="detalle-categoria" name="categoria">
                    <?php foreach ($categorias as $categoria) {?>
                    <option value="<?php echo $categoria['id']?>"><?php echo $categoria['nombre']?></option>
                    <?php } ?>
                    <option value="99">No válido</option>
                </select></p>
                <p>Género: 
                <select class="input-detalles" type="number" id="detalle-genero" name="genero">
                    <?php foreach ($generos as $genero) {?>
                    <option value="<?php echo $genero['id']?>"><?php echo $genero['nombre']?></option>
                    <?php } ?>
                    <option value="99">No válido</option>
                </select></p>
                <p>Unidades disponibles: <input name="unidades" class="input-detalles" type="number" id="detalle-unidades" value=""></p>
                <p>Código de Barras: <input name="newcod" class="input-detalles" type="number" id="detalle-codigo" value="" required></p>
                <input type="hidden" id="detalle-codigo-oculto" name="codigo" value="">
                <button class="input-detalles" data-acc="mod" id="detalle-Modificar">Modificar Producto</button>
                <button class="input-detalles rojo" data-acc="del" id="detalle-Eliminar">Eliminar Producto</button>

            </div>
        </div> 
        <textarea name="descripcion" id="detalle-descripcion"></textarea>
    </form>
</div>
<button class="boton-nuevo" title="Añadir">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
    </svg>
</button>
