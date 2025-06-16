let botonOjo, fotoPerfil;


document.addEventListener("DOMContentLoaded", function () {
    botonOjo = document.querySelectorAll(".div-pass label") ?? [];
    botonActualiza = document.querySelector("#actualiza-perfil");
    botonEliminar = document.querySelector("#eliminar-usuario");
    fotoPerfil = document.querySelector("#imagen-perfil");

    botonOjo.forEach(miboton => {
        miboton.addEventListener("click", conmutaOjo);
    });
    botonActualiza.addEventListener("click", actualizaPerfil);
    botonEliminar.addEventListener("click", eliminaUsuario);
    fotoPerfil.addEventListener("click", e => {
        document.querySelector("#imagen-input").click();
    });

    // Listado usuarios para seleccionar uno
    const listado = document.querySelector("#usuarios-lista");
    listado.addEventListener("click", tocaListaUsuario);
    cargaUsuarios();
});

// Listado usuarios para seleccionar uno
function cargaUsuarios(orden = "id") {
    mostrarLoader();
    // const codigo = document.querySelector("#detalle-codigo").value;
    // const unidades = parseInt(document.querySelector("#detalle-unidades-seleccionadas").value);
    let url = `/api/usuarios?orden=${orden}`;
    // console.log(url);
    
    fetch(url, {
        headers: {
            'Token': mikey
        }
    }).then(response => {
        try {
            // console.log(response.clone().text()); // Esto es para ver lo que nos llega como resultado
            return response.json();
        } catch (e) {
            return [];
        }
    }).then(usuariosRecibidos => {
        if(usuariosRecibidos['ok']){
            usuarios = usuariosRecibidos['usuarios'];
            const listaUsuarios = document.querySelector("#usuarios-lista");
            listaUsuarios.innerHTML = `<li class="usuarios-item">
            <span class="item nombre campo" data-orden="foto">Foto</span>
            <span class="item nombre campo" data-orden="nombre">Nombre</span>
            <span class="item nombre campo" data-orden="usuario">Usuario</span>
            <span class="item nombre campo" data-orden="roleId">Role</span>
            </li>`;
            
            usuarios.forEach((item, index) => {
                let li = document.createElement("li");
                li.classList.add("usuarios-item", "sel");
                li.dataset.index = item.id;
            
                li.innerHTML = `
                    <img src="img/avatares/${item.foto}" alt="${item.nombre}" class="item-img">
                    <span class="item nombre">${item.nombre}</span>
                    <span class="item usuario">${item.usuario}</span>
                    <span class="item role" data-roleid="${item.roleId}">${item.role}</span>
                `;
                
                listaUsuarios.appendChild(li);
            });
        } else {
            alerta(usuariosRecibidos['error']);
        }
        // console.log(carrito);
    }).catch(error => {
        alerta('Error al cargar los usuarios');
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
}

function cargarRoles() {
    mostrarLoader();
    let url = `/api/roles`;
    // console.log(url);
    
    fetch(url, {
        headers: {
            'Token': mikey
        }
    }).then(response => {
        try {
            //console.log(response.clone().text()); // Esto es para ver lo que nos llega como resultado
            return response.json();
        } catch (e) {
            return [];
        }
    }).then(rolesRecibidos => {
        if(rolesRecibidos['ok']){
            roles = JSON.parse(rolesRecibidos['mensaje']);
            const selectRoles = document.querySelector("#role");
            let misRoles = '';
            // console.log(roles);
            roles.forEach(rol => {
              misRoles += `<option value="${rol.id}">${rol.nombre}</option>`;
            });
            selectRoles.innerHTML = misRoles;
            
        }
        // console.log(carrito);
    }).catch(error => {
        alerta('Error al cargar los roles de usuarios');
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
}

function tocaListaUsuario(e) {
    if(e.target.classList.contains("campo")){
        cargaUsuarios(e.target.dataset.orden);
        // console.log(e.target.dataset.orden);
    } else if(e.target.closest("LI")) {
        const myLi = e.target.closest("LI");
        const id = myLi.dataset.index;
        // console.log(id);
        editaUsuario(myLi);
    } else {
        console.log("fuera");
        
    }
}

function editaUsuario(miUsuario) {
    document.querySelector("#imagen-perfil").src = miUsuario.querySelector(".item-img").src;
    document.querySelector("#nombre").value = miUsuario.querySelector(".nombre").textContent;
    document.querySelector("#email").value = miUsuario.querySelector(".usuario").textContent;
    document.querySelector("#role").value = miUsuario.querySelector(".role").dataset['roleid'];
    
    document.querySelector("#edita-usuario").showPopover();
}

// Modal detalles de un usuario para actualizar uno

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
async function eliminaUsuario() {
    const datos = new FormData();
    const user = document.querySelector("#email").value;
    const admin = document.querySelector("#pass-administra").value;
    
    if(user == ""){
        alerta("El usuario a eliminar no puede estar vacío");
        return;
    }
    if(admin.length < 8){
        alerta("La contraseña del administrador tiene que tener mínimo 8 carácteres");
        return;
    }
    datos.append('user', user);
    datos.append('admin', admin);
    
    try {
        let url = `/api/usuarios/elimina`;
        const respuesta = await fetch(url, {
            method: 'POST',
            headers: {
                'Token': mikey
            },
            body: datos
        });

        // let datosRecibido = await respuesta.text();
        // console.log(datosRecibido);
        let datosRecibido = await respuesta.json();
        
        if(datosRecibido['ok']){ 
            mensaje(datosRecibido['mensaje'],"/usuarios");
        } else {
            alerta(datosRecibido['error']);
        }
        
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