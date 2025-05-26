let carrito = [];
let textoCarrito = '';
let botonCerrarModal, botonModificar, modalContenido, fotoProducto, botonEliminar, botonNuevo;


document.addEventListener("DOMContentLoaded", function() {

    botonCerrarModal = document.querySelectorAll(".close");
    modalContenido = document.querySelector("#modal-contenido");
    fotoProducto = document.querySelector("#detalle-imagen");
    botonModificar = document.querySelector("#detalle-Modificar");
    botonEliminar = document.querySelector("#detalle-Eliminar");
    botonNuevo = document.querySelector(".boton-nuevo");

    fotoProducto.addEventListener("click", e => {
        document.querySelector("#imagen-input").click();
    });

    botonModificar.addEventListener("click", enviaEdicionProducto);
    botonEliminar.addEventListener("click", enviaEdicionProducto);
    botonNuevo.addEventListener("click", fichaProducto);


});


function verDetalles(e) {
    if (e.target.id != "productos-contenedor") {
        const producto = e.target.closest(".producto");
        mostrarDetalle(producto.dataset.codigo_barras);
    }
}

function mostrarDetalle(producto) {
    mostrarLoader();
    console.log(producto);
    let url = `/api/productos?detalles=${producto}`;

    fetch(url, {
        headers: {
            'token': mikey
        }
    })
    .then(response => {
        try {
            return response.json();
        } catch (e) {
            return [];
        }
    })
    .then(detallesProducto => {
        //console.log(detallesProducto);
        fichaProducto(detallesProducto);
    }).catch(error => {
        alerta('Error al cargar los detalles del producto');
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
}

function fichaProducto(datosProducto = []){
    document.querySelector("#detalle-nombre").value = datosProducto.nombre ?? '';
    document.querySelector("#detalle-imagen").src = datosProducto.foto ?? 'img/avatares/youngpeople.png';
    document.querySelector("#detalle-precio").value = datosProducto.precio ?? '1';
    document.querySelector("#detalle-categoria").value = datosProducto.categoriaId ?? '1';
    document.querySelector("#detalle-genero").value = datosProducto.generoId ?? '1';
    document.querySelector("#detalle-unidades").value = datosProducto.unidades_disponibles ?? '0';
    document.querySelector("#detalle-codigo").value = datosProducto.codigo_barras ?? '';
    document.querySelector("#detalle-codigo-oculto").value = datosProducto.codigo_barras ?? '';
    document.querySelector("#detalle-descripcion").textContent = datosProducto.descripcion ?? '';

    document.querySelector("#detalle-imagen").onerror = function () {
        this.onerror = null;
        this.src = "img/avatares/img_no_disponible.png";
    };
    
    modalContenido.classList.add("abrir-modal");
    modal.classList.add("abrir-modal-fondo");
    modal.style.display = "flex";
    document.body.classList.add("para-scroll");
    setTimeout(() => {
        modal.classList.remove("abrir-modal-fondo");
        modalContenido.classList.remove("abrir-modal");
    }, 500);
}


// Enviar Creación/Modificación/eliminación del producto
async function enviaEdicionProducto(e) {
    e.preventDefault();
    var archivoImagen = document.querySelector('input[type="file"]');
    const formulario = document.querySelector("#modal-contenido");
    const inputs = formulario.querySelectorAll("[name]"); // Todos los elementos con atributo "name"
    const datos = new FormData();
    if(archivoImagen.files[0]){
        datos.append('miimagen', archivoImagen.files[0]);
        console.log("si hay imagen");
    } else {
        console.log("NO hay imagen");
    }

    datos.append("acc", e.target.dataset.acc);
    inputs.forEach((valor) => {
        datos.append(valor.name, valor.value);
    });

    try {
        const url = formulario.getAttribute("action");
        const response = await fetch(url, {
            headers: {
                'token': mikey
            },
            method: 'POST',
            body: datos
        });


        // let datosRecibido = await response.text();
        // console.log(datosRecibido);
        
        let datosRecibido = await response.json();
        if(datosRecibido['ok']){
            mensaje(datosRecibido['mensaje'], "/tienda"); // Enseña un mensaje y recarga los productos"
        } else {
            alerta("No podido actualizar los datos del producto: " + datosRecibido['error']);
        }
        
    } catch (error) {
        console.log(error);
        
        alerta('Error al contactar con el servidor');
    }
}

// Función para previsualizar la imagen del producto antes de cargarla
function previsualizaImagen() {
    const imagenInput = document.querySelector('#imagen-input');
    const imagenProducto = document.querySelector('#detalle-imagen');

    const imagenNueva = imagenInput.files[0];   // coge el primer archivo seleccionado
    if (imagenNueva) {  // Verifica que hay un archivo seleccionado
        const imagenNuevaLeida = new FileReader();  // Crea un objeto de tipo FileReader que permite leer archivos del disco duro
        imagenNuevaLeida.onload = function(e) {     // Crea una función que se ejecutará cuando se cargue una imagen en el objeto
            imagenProducto.src = e.target.result;         // Pone la imagen leida como imagen en el formulario
        };
        imagenNuevaLeida.readAsDataURL(imagenNueva);    // Lee el archivo del disco duro, esto dispara el evento onload una vez que termina de leer
    }
}