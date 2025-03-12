// let mikey;
// let filtro;

let contenedorProductos;

// Declaración 1 ////////////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () { // Podemos usar el arrow function o escribiendo la función vacía
    contenedorProductos = document.querySelector("#productos-contenedor");
    
    cargarProductos();
})


// Declaración 2 ////////////////////////////////////////////////////////////
// document.addEventListener("DOMContentLoaded", () => {
//     contenedorProductos = document.querySelector("#productos-contenedor");

//     cargarPoductos();
// })

function cargarProductos(filtro = "") {
    const url = `servicios/apiProductos.php?k=${mikey}&buscar=${filtro}`;

    fetch(url)
    .then(response => response.json())
    .then(productos => {
        contenedorProductos.innerHTML = "";
        if (productos.lenght == 0) {
            const noProductos = document.createElement("h2");
            noProductos.id = "no-productos";
            noProductos.textContent = "No se encontraron productos";
            contenedorProductos.appendChild(noProductos);
        } else {
            if (document.querySelector("#no-productos")) {
                document.querySelector("#no-productos").remove();
            }

            productos.forEach(producto => {
                let div = document.createElement("div");
                div.classList.add("producto");
                div.dataset.producto = JSON.stringify(producto);

                const imgProducto = document.createElement("img");
                imgProducto.setAttribute("loading", "lazy");
                imgProducto.src = producto.foto;
                imgProducto.alt = producto.nombre;

                const nombreProducto = document.createElement("h2");
                nombreProducto.textContent = producto.nombre;

                const precioProducto = document.createElement("p");
                precioProducto.textContent = producto.precio.toFixed(2) + " €";

                div.appendChild(imgProducto);
                div.appendChild(nombreProducto);
                div.appendChild(precioProducto);

                contenedorProductos.appendChild(div);
            });
        }
    })
}