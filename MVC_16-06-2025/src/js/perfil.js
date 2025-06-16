let botonOjo, fotoPerfil;


document.addEventListener("DOMContentLoaded", function () {
    botonOjo = document.querySelectorAll(".div-pass label") ?? [];
    botonActualiza = document.querySelector("#actualiza-perfil");
    botonCerrarSesion = document.querySelector("#cerrar-sesion");
    fotoPerfil = document.querySelector("#imagen-perfil");

    botonOjo.forEach(miboton => {
        miboton.addEventListener("click", conmutaOjo);
    });
    botonActualiza.addEventListener("click", actualizaPerfil);
    botonCerrarSesion.addEventListener("click", cierraSesion);
    fotoPerfil.addEventListener("click", e => {
        document.querySelector("#imagen-input").click();
    });
});

// cambiar entre ver password o ocultarlo
function conmutaOjo(e) {
    const miSelector = "#" + e.target.id + "+input";
    const miinput = document.querySelector(miSelector);
    if(miinput.getAttribute("type").toLocaleLowerCase() != "text") {
        miinput.setAttribute("type", "text");
        e.target.innerHTML = "&#128512;";
    } else {
        miinput.setAttribute("type", "password");
        e.target.innerHTML = "&#129763;";
    }
}

// Función para previsualizar la imagen de perfil antes de cargarla
function previsualizaImagen() {
    const imagenInput = document.querySelector('#imagen-input');
    const imagenPerfil = document.querySelector('#imagen-perfil');

    const imagenNueva = imagenInput.files[0];   // coge el primer archivo seleccionado
    if (imagenNueva) {  // Verifica que hay un archivo seleccionado
        const imagenNuevaLeida = new FileReader();  // Crea un objeto de tipo FileReader que permite leer archivos del disco duro
        imagenNuevaLeida.onload = function(e) {     // Crea una función que se ejecutará cuando se cargue una imagen en el objeto
            imagenPerfil.src = e.target.result;         // Pone la imagen leida como imagen en el formulario
        };
        imagenNuevaLeida.readAsDataURL(imagenNueva);    // Lee el archivo del disco duro, esto dispara el evento onload una vez que termina de leer
    }
}

// Cerrar sesion
async function cierraSesion() {
    try {
        const respuesta = await fetch("/api/logout", {
            method: 'POST',
            headers: {
                'Token': mikey
            }
        });

        let datosRecibido = await respuesta.json();
        
        if(datosRecibido['ok']){ 
            mensaje(datosRecibido['mensaje'], "/");
        } else {
            alerta("No podido cerrar la sesión");
        }
        console.log(datosRecibido);
        
    } catch (error) {
        alerta('Error al contactar:' + error);
    }
}

// Función para actualizar el perfil del usuario
function actualizaPerfil(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Obtener los valores del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const passAntigua = document.querySelector('#pass-antigua').value;
    const passNueva = document.querySelector('#pass-nueva').value;
    const passConfirma = document.querySelector('#pass-confirma').value;

    if (nombre.length == 0) {
        alerta("Necesitas introducir un nombre de usuario para realizar alguna modificación.");
        return;
    }

    if (passAntigua.length < 8) {
        alerta("Necesitas la contraseña para realizar alguna modificación.");
        return;
    }

    if (passNueva.length > 0) {
        // Validar la contraseña
        if (passNueva !== passConfirma) {
            alerta("Las contraseñas nuevas no coinciden.");
            return;
        }
    
        if (passNueva.length < 8) {
            alerta("La nueva contraseña debe tener al menos 8 caracteres.");
            return;
        }
    }
    EnviaActualizacion();
}

// Enviar Actualización Perfil
async function EnviaActualizacion() {
    var archivoImagen = document.querySelector('input[type="file"]');
    const formulario = document.querySelector("#formulario-perfil");
    const inputs = formulario.querySelectorAll("input");
    const datos = new FormData();
    if(archivoImagen.files[0]){
        datos.append('miimagen', archivoImagen.files[0]);
        console.log("si hay imagen");
    } else {
        console.log("NO hay imagen");
    }

    inputs.forEach((valor) => {
        datos.append(valor.name, valor.value);
    });
    try {
        const url = formulario.getAttribute("action");
        const response = await fetch(url, {
            headers: {
                'Token': mikey
            },
            method: 'POST',
            body: datos
        });

        // clonamos el response para poder usarlo 2 veces
        const datosStr = await response.clone().text();
        console.log("recibido:" + datosStr);

        let datosRecibido = await response.json();
        if(datosRecibido['ok']){
            mensaje(datosRecibido['mensaje'], "/perfil"); // Enseña un mensaje y redirige la página a "/perfil"
        } else {
            alerta("No podido actualizar los datos de perfil: " + datosRecibido['error']);
        }
        
    } catch (error) {
        console.log(error);
        
        alerta('Error al contactar con el servidor');
    }
}
