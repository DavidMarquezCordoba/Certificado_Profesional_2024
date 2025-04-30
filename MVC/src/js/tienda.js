let temporizadorBusqueda;
let tiempoRetardo = 1000;
let contenedorProductos, inputBuscar;

// nuevo detalle producto y carrito
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let textoCarrito = '';
let botonCarrito, contenedorCarrito, listaCarrito, botonVaciarCarrito, botonCerrarModal, botonAgregar, modal;

// antiguo tienda
document.addEventListener("DOMContentLoaded", function() {
    contenedorProductos = document.querySelector("#productos-contenedor");
    inputBuscar = document.querySelector("#busqueda");
    inputBuscar.addEventListener("input", pideBuscar);

    // Nuevo Mostrar detalles y gestión carrito
    botonCarrito = document.querySelector("#ver-carrito");
    textoCarrito = botonCarrito.textContent;

    modal = document.querySelector("#detalle-modal");
    contenedorCarrito = document.querySelector("#carrito-modal");
    botonCerrarModal = document.querySelectorAll(".close");
    botonAgregar = document.querySelector("#detalle-agregar");
    modalContenido = document.querySelector("#modal-contenido");
    listaCarrito = document.querySelector("#lista-carrito");

    contenedorProductos.addEventListener("click", verDetalles);
    botonCarrito.addEventListener("click", verCarrito);
    // botonVaciarCarrito.addEventListener("click", vaciarCarrito);
    botonAgregar.addEventListener("click", agregarCarrito);
    modal.addEventListener("click", tocadoFueraModal);
    contenedorCarrito.addEventListener("click", tocadoFueraModal);
    listaCarrito.addEventListener("click", eliminaElementoCarrito);


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
    cargarProductos();
});

function cargarProductos( filtro = "" ) {
    // console.log(mikey);
    //const url = `servicios/apiProductos.php?k=${mikey}&buscar=${filtro}`;
    // let url = `servicios/apiProductosClases.php?`;
    let url = `api/productos`;
    if(filtro != '') {
        url = url + `?buscar=${filtro}`;
    }
    // console.log(mikey);
    fetch(url, {
        headers: {
            'token': mikey
        }
    })
    .then(response => {
        // console.log(response.status);

        // Esto comentado es para probar que da error si no se pone try...catch da error si no se recibe un json válido
        // const misprod = "shdf" + response;
        // return misprod.json();
        try {
            // console.log(response.text());
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
                div.dataset.codigo_barras = producto.codigo_barras;
                const imgProducto = document.createElement("img");
                imgProducto.setAttribute("loading", "lazy"); // comentar esta línea
                imgProducto.src = producto.foto;
                imgProducto.alt = producto.nombre;
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
    });
    // Esto de aquí abajo es para actualizar el botón carrito (con los productos añadidos) cuando se carga la página 
    cuentaCarrito();
}

// Antiguo para buscar articulos
function pideBuscar(e) {
    clearTimeout(temporizadorBusqueda);     //Anulamos el temporizador que está guardado en "temporizadorBusqueda";
    temporizadorBusqueda = setTimeout(() => {  // Activa un temporizador y guarda su identificador único en "temporizadorBusqueda"
        //cargarProductos(e.target.value);
        cargarProductos(this.value);
    }, tiempoRetardo);
    
}

// Nuevo Mostrar detalles y gestión carrito

function actualizarCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
    total = 0;
    carrito.forEach((item) => {
        total += item.precio * item.unidades;
    });
    document.querySelector("#total-carrito").textContent = total.toFixed(2) + "€";
}

function verDetalles(e) {
    if (e.target.id != "productos-contenedor") {
        const producto = e.target.closest(".producto");
        mostrarDetalle(producto.dataset.codigo_barras);
    }
}

function mostrarDetalle(producto) {
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
        console.log(detallesProducto);
        document.querySelector("#detalle-nombre").textContent = detallesProducto.nombre;
        document.querySelector("#detalle-imagen").src = detallesProducto.foto;
        document.querySelector("#detalle-precio").textContent = detallesProducto.precio + "€";
        document.querySelector("#detalle-categoria").textContent = detallesProducto.categoria;
        document.querySelector("#detalle-genero").textContent = detallesProducto.genero;
        document.querySelector("#detalle-unidades").textContent = detallesProducto.unidades_disponibles;
        document.querySelector("#detalle-barcode").src = `https://barcode.tec-it.com/barcode.ashx?data=${detallesProducto.codigo_barras}`;
        document.querySelector("#detalle-codigo").value = detallesProducto.codigo_barras;
        document.querySelector("#detalle-descripcion").textContent = detallesProducto.descripcion;
        document.querySelector("#detalle-unidades-seleccionadas").value = 1;
        modalContenido.classList.add("abrir-modal");
        modal.classList.add("abrir-modal-fondo");
        modal.style.display = "flex";
        document.body.classList.add("para-scroll");
        setTimeout(() => {
            modal.classList.remove("abrir-modal-fondo");
            modalContenido.classList.remove("abrir-modal");
        }, 500);
    }).catch(error => {
        //alerta('Error al cargar los detalles del producto');
    });
}

function tocadoFueraModal(e) {
    if(e.target.classList.contains("modal")){
        // console.log(e.target.childNodes);
        
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

function eliminaElementoCarrito(e) {
    if(e.target.tagName == "BUTTON"){
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        actualizarCarrito();
        const itemCarrito = e.target.closest('LI');
        itemCarrito.classList.add("quita-producto-carrito");
        setTimeout(() => {
            llenaCarrito();
        }, 800);
        cuentaCarrito();
    }
}

function verCarrito() {
    contenedorCarrito.style.display = "flex";
    // contenedorCarrito.childNodes[1].classList.add("abrir-modal");
    contenedorCarrito.classList.add("abrir-modal-fondo");
    document.body.classList.add("para-scroll");
    setTimeout(() => {
        // contenedorCarrito.childNodes[1].classList.remove("abrir-modal");
        contenedorCarrito.classList.remove("abrir-modal-fondo");
    }, 500);
    llenaCarrito();
}

function llenaCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;
    
    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.classList.add("carrito-item");
        li.dataset.index = index;
    
        li.innerHTML = `
            <img src="${item.foto}" alt="${item.nombre}" class="item-img">
            <span class="item nombre">${item.nombre}</span>
            <span class="item unidades">${item.unidades}</span>
            <span class="item precio">${(item.precio * item.unidades).toFixed(2)}€</span>
            <button class="eliminar-item" data-index="${index}">&times;</button>
        `;
    
        listaCarrito.appendChild(li);
        total += item.precio * item.unidades;
    });
    
    document.querySelector("#total-carrito").textContent = total.toFixed(2) + "€";
    document.querySelector(".enlaces-menu").classList.remove("ver"); //si se está viendo el menu, que se oculte
}


function agregarCarrito(e) {
    const codigo = document.querySelector("#detalle-codigo").value;
    const nombre = document.querySelector("#detalle-nombre").textContent;
    const precio = parseFloat(document.querySelector("#detalle-precio").textContent);
    const unidades = parseInt(document.querySelector("#detalle-unidades-seleccionadas").value);
    const foto = document.querySelector("#detalle-imagen").src;
    carrito.push({ codigo, nombre, precio, unidades, foto });
    actualizarCarrito();
    modalContenido.classList.add("agregar-carrito");
    modal.classList.add("cerrar-modal-fondo");
    botonCarrito.classList.add("vibrar");
    setTimeout(() => {
        modal.style.display = "none";   
        modalContenido.classList.remove("agregar-carrito");
        modal.classList.remove("cerrar-modal-fondo");
        botonCarrito.classList.remove("vibrar");
        document.body.classList.remove("para-scroll");
        cuentaCarrito();
    }, 500);
}

function vaciarCarrito(e) {
    carrito = [];
    actualizarCarrito();
    botonCarrito.click();
    cuentaCarrito();
}

function cuentaCarrito() {
    botonCarrito.textContent = `${textoCarrito}(${carrito.length})`;
}


