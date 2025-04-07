<?php 
$pagina = 'index.php';

include 'templates/head.php';
?>
    <link rel='preload' href='css/formulario.css' as='style'>
    <link rel="stylesheet" href="css/formulario.css">
<?php 
include 'templates/header.php';
include 'templates/menu.php';
?>    
    <section class="cabecera_fondo">
        <div class="cabecera_contenido">
            <h2>ACADEMIA ÉPSILON</h1>
            <svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2">
                <path d="M3 21l18 0"></path>
                <path d="M5 21v-14l8 -4v18"></path>
                <path d="M19 21v-10l-6 -4"></path>
                <path d="M9 9l0 .01"></path>
                <path d="M9 12l0 .01"></path>
                <path d="M9 15l0 .01"></path>
                <path d="M9 18l0 .01"></path>
            </svg> <!-- building-skyscraper stroke:2 size:48 -->
            <P>Fuengirola, Málaga</P>
            <a class="boton" href="#formulario">Contactar</a>
        </div>
    </section>

    <main class="contenedor sombra para">
        <h2>Módulos formativos</h2>
        <div class="modformativos">
        <?php 
        /////////////////// Módulos formativos ////////////////////////////////////////
        $archivoModulosFormativos = "./json/modulos-formativos.json";
        $modulos_json = "";
        $modulosFormativos = [];
        if(file_exists($archivoModulosFormativos)){
            $modulos_json = file_get_contents($archivoModulosFormativos);
        } else {
            echo 'no se encuentra los modulos Formativos';
        }

        if(json_validate($modulos_json)){
            $modulosFormativos = json_decode($modulos_json, true); // true es para que use array asociativo cuando sea posible
        }
        foreach($modulosFormativos as $modulo) {
        ?>
            <section class="modformativo">
                <h3><?php echo $modulo['titulo']; ?></h3>
                <div class="icono"><?php echo $modulo['icono']; ?></div>
                <p><?php echo $modulo['texto']; ?></p>
                <p class="horas"><?php echo $modulo['horas']; ?></p>
            </section>
        <?php } ?>

        </div>

        <section>
            <h2 id="formulario" class="para">Formulario de contacto</h2>
            <form action="" class="formulario">
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
                        <label for="estalabo">estado laboral</label>
                        <input id="estalabo" list="labos" class="input-formulario" name="estalabo" type="text" placeholder="escribe si estas trabajando o desempleado...">
                        <datalist id="labos">
                            <option value="Desempleado">
                            <option value="Trabajo Fijo">
                            <option value="Trabajo Temporal">
                            <option value="Trabajo fijo-discontinuo">
                        </datalist>
                    </div>
                    <div class="campo-formulario">
                        <label for="tipoinfo">Tipo de información</label>
                        <select name="tipoinfo" id="tipoinfo" class="input-formulario">
                            <option value="" disabled selected>pincha aquí para seleccionar una opción</option>
                            <optgroup label="Cursos">
                                <option value="encurso">Curso Comenzado</option>
                                <option value="nocurso">Próximo Curso</option>
                            </optgroup>
                            <optgroup label="Trabajo">
                                <option value="soltrabajo">Solicitud de Tabajo</option>
                                <option value="practicas">Interesado Prácticas</option>
                            </optgroup>
                        </select>
                    </div>
                    <div class="campo-formulario">
                        <label>Selecciona preferencia para contactarte</label>
                        <div class="prefes">
                            <input type="radio" id="prtel" name="contacto" value="prtel">
                            <label for="prtel">Teléfono</label>
                            <input type="radio" id="premail" name="contacto" value="premail">
                            <label for="premail">Email</label>
                        </div>
                    </div>
                    <div class="campo-formulario">
                        <label>selecciona tus campos de interés</label>
                        <div class="interes">
                            <input type="checkbox" id="ofimatica" name="ofimatica">
                            <label for="ofimatica">Ofimática</label>
                            <input type="checkbox" id="contabilidad" name="contabilidad">
                            <label for="contabilidad">Contabilida</label>
                            <input type="checkbox" id="hosteleria" name="hosteleria">
                            <label for="hosteleria">Hosteleria</label>
                            <input type="checkbox" id="seguridad" name="seguridad">
                            <label for="seguridad">Seguridad</label>
                        </div>
                    </div>
                    <div class="campo-formulario">
                        <textarea name="mensaje" id="mensaje" placeholder="Escribe cualquier cosa que quieras añadir"></textarea>
                    </div>
                    <div class="flex derecha">
                        <input type="submit" class="boton" value="Enviar">
                    </div>
                </fieldset>
            </form>
        </section>
    </main>
    <?php include 'templates/footer.php'; ?>
