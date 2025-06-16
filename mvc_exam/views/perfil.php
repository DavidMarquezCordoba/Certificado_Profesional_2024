    <div class="contenedor">
        <!-- <h1>Gestión de Perfil</h1> -->

        <!-- Foto de Perfil -->
        <div class="foto-perfil">
            <img id="imagen-perfil" src="img/avatares/<?php echo $usuario['foto']; ?>" alt="Foto de perfil" title="Toca la foto para cambiarla">
            <input type="file" id="imagen-input" name="image" accept="image/*" onchange="previsualizaImagen()">
        </div>
        
        <!-- Información del Usuario -->
        <form id="formulario-perfil" action="/api/update" enctype="multipart/form-data"  method="POST" title="Para modificar el perfil hay que escribir la contraseña actual">
            <div class="formulario-grupo">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="name" value="<?php echo $usuario['nombre'];?>" required>
            </div>
            <div class="formulario-grupo">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email"  name="email" value="<?php echo $usuario['usuario'];?>" required autocomplete="email">
            </div>            
            <div class="formulario-grupo">
                <label for="pass-antigua">Contraseña Actual:</label>
                <div class="div-pass">
                    <label id="lpass-a" for="pass-antigua">&#129763;</label>
                    <input type="password" id="pass-antigua" name="password" required autocomplete="password" required>
                </div>
            </div>

            <h2>Cambiar Contraseña</h2>

            <div class="formulario-grupo">
                <label for="pass-nueva">Nueva Contraseña:</label>
                <div class="div-pass">
                    <label id="lpass-n" for="pass-nueva">&#129763;</label>
                    <input type="password" id="pass-nueva" name="password1" required autocomplete="new-password">
                </div>
            </div>
            <div class="formulario-grupo">
                <label for="pass-confirma">Confirmar Nueva Contraseña:</label>
                <div class="div-pass">
                    <label id="lpass-c" for="pass-confirma">&#129763;</label>
                    <input type="password" id="pass-confirma" name="password2" required autocomplete="new-password">
                </div>
            </div>
        </form>

        <button class="boton" id="cerrar-sesion">Cerrar Sesión</button>
        <button class="boton" id="actualiza-perfil">Actualizar Perfil</button>
    </div>
