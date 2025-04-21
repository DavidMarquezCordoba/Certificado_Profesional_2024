let temporizadorBusqueda;
let tiempoRetardo = 1000;
let contenedorProductos, inputBuscar;

document.addEventListener("DOMContentLoaded", function() {
    contenedorProductos = document.querySelector("#productos-contenedor");
    inputBuscar = document.querySelector("#busqueda");

    inputBuscar.addEventListener("input", pideBuscar);

    cargarProductos();
});

function cargarProductos( filtro = "" ) {
    //const url = `servicios/apiProductos.php?k=${mikey}&buscar=${filtro}`;
    const url = `servicios/apiProductosClases.php?k=${mikey}&buscar=${filtro}`;
    fetch(url)
    .then(response => response.json())
    .then(productos => {
        console.log(productos);
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
                // div.dataset.producto = JSON.stringify(producto); // aca le metemos el producto en texto
                div.dataset.codigo_barras = producto.codigo_barras; // aca le metemos el producto en texto
                const imgProducto = document.createElement("img");
                imgProducto.setAttribute("loading", "lazy"); // comentar esta línea
                imgProducto.src = producto.foto;
                imgProducto.alt = producto.nombre;
                const nombreProducto = document.createElement("h2");
                nombreProducto.textContent = producto.nombre;
                const precioProducto = document.createElement("p");
                precioProducto.textContent = producto.precio.toFixed(2) + "€";
                div.appendChild(imgProducto);
                div.appendChild(nombreProducto);
                div.appendChild(precioProducto);
                contenedorProductos.appendChild(div);
            });
        }
    })
}

function pideBuscar(e) {
    clearTimeout(temporizadorBusqueda);     //Anulamos el temporizador que está guardado en "temporizadorBusqueda";
    temporizadorBusqueda = setTimeout(() => {  // Activa un temporizador y guarda su identificador único en "temporizadorBusqueda"
        //cargarProductos(e.target.value);
        cargarProductos(this.value);
    }, tiempoRetardo);
    
}

