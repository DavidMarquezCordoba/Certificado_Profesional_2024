let temporizadorBusqueda;
let tiempoRetardo = 1000;
let contenedorProductos, inputBuscar, modal;

document.addEventListener("DOMContentLoaded", function() {
    contenedorProductos = document.querySelector("#productos-contenedor");
    inputBuscar = document.querySelector("#busqueda");
    inputBuscar.addEventListener("input", pideBuscar);

    modal = document.querySelector("#detalle-modal");
    modal.addEventListener("click", tocadoFueraModal);

    contenedorProductos.addEventListener("click", verDetalles);
    modal.addEventListener("click", tocadoFueraModal);

    document.querySelectorAll(".close").forEach(btn => {
        btn.addEventListener("click", function () {
            const mimodal = this.parentElement.parentElement;
            mimodal.childNodes[1].classList.add("cerrar-modal");
            mimodal.classList.add("cerrar-modal-fondo");
            setTimeout(() => {
                mimodal.style.display = "none";
                mimodal.childNodes[1].classList.remove("cerrar-modal");
                mimodal.classList.remove("cerrar-modal-fondo");
                document.body.classList.remove("para-scroll");
            }, 500);
        });
    });

    // Antiguo lee productos
    console.log(mikey);
    
    cargarProductos();
});

function cargarProductos( filtro = "" ) {
    mostrarLoader();
    // console.log(mikey);
    //const url = `servicios/apiProductos.php?k=${mikey}&buscar=${filtro}`;
    // let url = `servicios/apiProductosClases.php?`;
    let url = `api/productos`;
    if(filtro != '') {
        url = url + `?buscar=${filtro}`;
    }
    fetch(url, {
        headers: {
            'Token': mikey
        }
    })
    .then(response => {
        //console.log(response.status);

        // Esto comentado es para probar que da error si no se pone try...catch da error si no se recibe un json válido
        // const misprod = "shdf" + response;
        // return misprod.json();
        try {
            //console.log('productos');
            return response.json();
        } catch (e) {
            return [];
        }
    })
    .then(productos => {
        contenedorProductos.innerHTML = "";
        if(productos.length == 0){
            const noProductos = document.createElement("h2");
            noProductos.id = "no-productos";
            noProductos.textContent = "NO SE HAN ENCONTRADO PRODUCTOS";
            contenedorProductos.appendChild(noProductos);
        } else {
            if(document.querySelector("#no-productos")){
                document.querySelector("#no-productos").remove();
            }
            productos.forEach(producto => { 
                let div = document.createElement("div");
                div.classList.add("producto");
                //div.dataset.producto = JSON.stringify(producto);
                div.id = producto.codigo_barras;
                div.dataset.codigo_barras = producto.codigo_barras;
                const imgProducto = document.createElement("img");
                imgProducto.setAttribute("loading", "lazy"); // comentar esta línea
                imgProducto.src = producto.foto;
                imgProducto.alt = producto.nombre;

                imgProducto.onerror = function() {
                    this.onerror = null;
                    this.src = "img/avatares/youngpeople.png";
                };

                // forma de hacerlo con addEventListener
                //imgProducto.addEventListener("error", detectarError);

                // Esta función se define fuera del forEach
                // function detectarError(e) {
                //     e.target.src = "img/avatares/youngpeoples.png";
                //     e.target.removeEventListener("error", detectarError);
                // }

                const nombreProducto = document.createElement("h2");
                nombreProducto.textContent = producto.nombre;
                const precioProducto = document.createElement("p");
                precioProducto.textContent = (producto.precio)?(producto.precio.toFixed(2) + "€"):producto.error;
                div.appendChild(imgProducto);
                div.appendChild(nombreProducto);
                div.appendChild(precioProducto);
                contenedorProductos.appendChild(div);
            });
        }
        //console.log(productos);
    })
    // Nuevo gestión del carrito
    .catch(error => {
        let noProductos;
        // Este if es por si no existe el h2 que nos dice que no hay productos, crearlo y si existe cambiarle su valor
        if(!document.querySelector("#no-productos")){
            noProductos = document.createElement("h2");
            noProductos.id = "no-productos";
            contenedorProductos.appendChild(noProductos);        
        } else {
            noProductos = document.querySelector("#no-productos");
        }
        console.log(error);
        noProductos.textContent = "PROBLEMAS PARA CONECTAR CON EL SERVIDOR DE PRODUCTOS";
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
    // Esto de aquí abajo es para actualizar el botón carrito (con los productos añadidos) cuando se carga la página 
    // cuentaCarrito();
}

// Antiguo para buscar articulos
function pideBuscar(e) {
    clearTimeout(temporizadorBusqueda);     //Anulamos el temporizador que está guardado en "temporizadorBusqueda";
    temporizadorBusqueda = setTimeout(() => {  // Activa un temporizador y guarda su identificador único en "temporizadorBusqueda"
        //cargarProductos(e.target.value);
        cargarProductos(this.value);
    }, tiempoRetardo);
    
}


function tocadoFueraModal(e) {
    if(e.target.classList.contains("modal")){
        // console.log(e.target.childNodes);
        document.querySelector("#detalle-codigo").value = "";
        e.target.childNodes[1].classList.add("cerrar-modal");
        e.target.classList.add("cerrar-modal-fondo");
        setTimeout(() => {
            e.target.style.display = "none";
            e.target.childNodes[1].classList.remove("cerrar-modal");
            e.target.classList.remove("cerrar-modal-fondo");
            document.body.classList.remove("para-scroll");
        }, 500);
    }
}