<div>
    <h2 id="formularioTitulo" class="para">Formulario de contacto</h2>
    <form id="formularioContacto" action="/api/info" method="post" class="formulario">
        <fieldset>
            <legend>Solicitanos información enviando este formulario</legend>
            <div class="campo-formulario">
                <label for="nombre">nombre</label>
                <input id="nombre" class="input-formulario" name="nombre" type="text" placeholder="escribe tu nombre">
            </div>
            <div class="campo-formulario">
                <label for="email">email</label>
                <input id="email" class="input-formulario" name="email" type="email" placeholder="escribe tu correo">
            </div>
            <div class="campo-formulario">
                <label for="telefono">teléfono</label>
                <input id="telefono" class="input-formulario" name="telefono" type="tel" placeholder="escribe tu teléfono">
            </div>
            <div class="campo-formulario">
                <label for="tipoinfo">Tipo de información</label>
                <select name="tipoinfo" id="tipoinfo" class="input-formulario" required>
                    <option value="" disabled selected>pincha aquí para seleccionar una opción</option>
                    <optgroup label="Información">
                        <option value="stock">Cuando habrá más productos</option>
                        <option value="colores">Saber colores disponibles</option>
                    </optgroup>
                    <optgroup label="Compras">
                        <option value="cambio">Solicitud de Cambio</option>
                        <option value="devol">Devolución de un producto comprado</option>
                        <option value="trans">No me ha llegado mi compra</option>
                    </optgroup>
                    <optgroup label="Quejas y reclamaciones">
                        <option value="tienda">Queja sobre una tienda física</option>
                        <option value="compra">Queja sobre una compra online</option>
                        <option value="cliente">Queja sobre atención al cliente</option>
                    </optgroup>
                    <optgroup label="Trabajo y colaboraciones">
                        <option value="trabajo">Trabajar con nosotros</option>
                        <option value="ventas">vendernos productos</option>
                        <option value="reventa">Intermediario de ventas</option>
                    </optgroup>
                    <optgroup label="Otros">
                        <option value="Otros">Otros</option>
                    </optgroup>
                </select>
            </div>
            <div class="campo-formulario">
                <label for="asunto">Asunto</label>
                <input id="asunto" list="asuntos" class="input-formulario" name="asunto" type="text" placeholder="escribe el asunto de tu mensaje..." required>
                <datalist id="asuntos">
                    <option value="Información de Producto">
                    <option value="Cambio o devolución">
                    <option value="Quejas">
                    <option value="Solicitud de trabajo">
                </datalist>
            </div>
            <div class="campo-formulario">
                <label>Selecciona preferencia para contactarte</label>
                <div class="prefes">
                    <input type="radio" id="prtel" name="contacto" value="teléfono">
                    <label for="prtel">Teléfono</label>
                    <input type="radio" id="premail" name="contacto" value="e-mail">
                    <label for="premail">Email</label>
                </div>
            </div>
            <div class="campo-formulario">
                <label>selecciona tus campos de interés</label>
                <div class="interes">
                    <input type="checkbox" id="Mujer" name="interes[]" value="Mujer">
                    <label for="Mujer">Mujer</label>
                    <input type="checkbox" id="Hombre" name="interes[]" value="Hombre">
                    <label for="Hombre">Hombre</label>
                    <input type="checkbox" id="Zapatos" name="interes[]" value="Zapatos">
                    <label for="Zapatos">Zapatos</label>
                    <input type="checkbox" id="Otros" name="interes[]" value="Otros">
                    <label for="Otros">Otros</label>
                </div>
            </div>
            <div class="campo-formulario">
                <label>Mensaje</label>
                <textarea name="mensaje" id="mensaje-formulario" placeholder="Escribe cualquier cosa que quieras añadir" required></textarea>
            </div>
            <div class="flex derecha">
                <input type="submit" class="boton" value="Enviar">
            </div>
        </fieldset>
    </form>
</div>