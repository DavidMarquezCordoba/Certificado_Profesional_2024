let carrito = [];
let textoCarrito = '';
let botonCarrito, contenedorCarrito, listaCarrito, botonVaciarCarrito, botonCerrarModal, botonAgregar;

// Valor auxiliar de la cantidad de unidades de un elemento del carrito al tocarlo
let cantidadAnterior;

// antiguo tienda
document.addEventListener("DOMContentLoaded", function() {
    // Nuevo Mostrar detalles y gestión carrito
    botonCarrito = document.querySelector("#ver-carrito");
    if(botonCarrito)
        textoCarrito = botonCarrito.textContent;

    contenedorCarrito = document.querySelector("#carrito-modal");
    botonCerrarModal = document.querySelectorAll(".close");
    botonAgregar = document.querySelector("#detalle-agregar");
    modalContenido = document.querySelector("#modal-contenido");
    listaCarrito = document.querySelector("#lista-carrito");

    if(botonCarrito)
        botonCarrito.addEventListener("click", verCarrito);
    // botonVaciarCarrito.addEventListener("click", vaciarCarrito);
    botonAgregar.addEventListener("click", agregarCarritoFetch);
    contenedorCarrito.addEventListener("click", tocadoFueraModal);
    listaCarrito.addEventListener("click", eliminaElementoCarrito);

    document.querySelector("ul#lista-carrito").addEventListener("focusin", function (e) {
        // console.log(e.target.tagName);
        if(e.target.tagName == "INPUT") {
            cantidadAnterior = e.target.value;
        }
    });
    document.querySelector("ul#lista-carrito").addEventListener("change", function (e) {
        // console.log(parseInt(cantidadAnterior));
        // console.log(parseInt(e.target.value));
        if(e.target.tagName == "INPUT") {
            document.querySelector("#detalle-codigo").value = e.target.dataset.code;
            document.querySelector("#detalle-unidades-seleccionadas").value = parseInt(e.target.value) - parseInt(cantidadAnterior);
            cantidadAnterior = e.target.value;
            agregarCarritoFetch();
        }
    });
    
    carrito = agregarCarritoFetch() || []; //JSON.parse(localStorage.getItem("carrito")) || [];

});

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
        // console.log(detallesProducto);
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
        alerta('Error al cargar los detalles del producto');
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
}


function eliminaElementoCarrito(e) {
    if(e.target.tagName == "BUTTON"){
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        actualizarCarrito();
        const itemCarrito = e.target.closest('LI');
        document.querySelector("#detalle-codigo").value = itemCarrito.querySelector('INPUT').dataset.code;
        document.querySelector("#detalle-unidades-seleccionadas").value = -1 * parseInt(itemCarrito.querySelector('INPUT').value);
        agregarCarritoFetch();
        itemCarrito.classList.add("quita-producto-carrito");
        setTimeout(() => {
            llenaCarrito();
        }, 800);
        // cuentaCarrito();
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
            <input class="item unidades" type="number" min="0" value="${item.unidades}" data-code="${item.codigo}">
            <span class="item precio">${(item.precio).toFixed(2)}€</span>
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
    if(botonCarrito){
        let unidades = 0;
        carrito.forEach(elemento => {
            unidades += elemento.unidades;
        });
        botonCarrito.textContent = `${textoCarrito}(${unidades})`;
    }
}

////////////////// añade al carrito usando un fetch y la base de datos
function agregarCarritoFetch() {
    if(!botonCarrito){  // si no existe el botón carrito en el menú
        return;
    }
    mostrarLoader();
    const codigo = document.querySelector("#detalle-codigo").value;
    const unidades = parseInt(document.querySelector("#detalle-unidades-seleccionadas").value);
    let url = `/api/pedido`;
    if(codigo != ""){
        url = url + `?cod=${codigo}&ca=${unidades}`;
    }
    console.log(url);
    
    fetch(url, {
        headers: {
            'token': mikey
        }
    }).then(response => {
        // const recibido = response.clone().text();
        // console.log(recibido);
        try {
            return response.json();
        } catch (e) {
            return [];
        }
    }).then(carritoRecibido => {
        if(carritoRecibido['ok']){
            carrito = carritoRecibido['productos'];
            let total = 0;
            if(carrito.length > 0){
                total = carrito[0]['total'];
            }
            document.querySelector("#total-carrito").textContent = total.toFixed(2) + "€";
            
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
        } else {
            alerta(carritoRecibido['error']);
        }
        // console.log(carrito);
    }).catch(error => {
        alerta('Error al cargar el carrito');
    })
    .finally( () => {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    });
}
