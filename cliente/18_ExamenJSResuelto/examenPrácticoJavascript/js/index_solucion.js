// Los Productos están en el archivo datos.js

// Inicialización de variables globales y detectores de eventos de elementos existentes en el html
// usar burbujeo siempre que sea posible para reducir el número de detectores de eventos
// 1 punto
const sectionCarrito = document.querySelector("#carrito");
sectionCarrito.addEventListener("click", eliminarDelCarrito);
const sectionProductos = document.querySelector("#productos");
sectionProductos.addEventListener("click", agregarAlCarrito);
const verCarrito = document.querySelector("#ver-carrito"); // Botón para desplegar el carrito
verCarrito.addEventListener("click", mostrarCarrito);
const lupa = document.querySelector("#buscar");
lupa.addEventListener("click", mostrarProductosBusqueda);
const buscarInput = document.querySelector("#busqueda");
buscarInput.addEventListener("input",mostrarProductosBusqueda);




// Lee el carrito del localStorage por si hubiera datos en él
// si no hay datos del carrito en el localStorage iguala carrito a un array vacío
// 0.2 puntos
// Quitar comentario de la linea de abajo y terminar la asignación del valor al array.

//const carrito = ;
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];




// Crear ficha producto
// 1.6 puntos
// define la función que crea cada ficha de producto, se usará para crear las fichas
// tanto para nuestros productos como para la lista del carrito
// recibe argumentos:
// producto: objeto que contiene el producto para el que tenemos que generar la ficha
// contenedor: elemento en el que tenemos que introducir la ficha
// accion: será "agregar" o "eliminar" según el botón que tenga que crear
// nuevo: argumento opcional con el que si el valor es true, introduciremos durante un tiempo
// la clase "nuevo" a la ficha creada para que haga el efecto de entrada por la derecha y fondo de verde a blanco
// div para la ficha
// h2 para el nombre del producto
// p para la descripción del producto
// h4 para la categoría del producto
// h3 para el precio del producto
// button para el botón de añadir o eliminar el producto según esté en el contenedor
// de productos o en el section del carrito
function cargaProducto(producto, contenedor, accion, nuevo = false) {
    const fichaProducto = document.createElement("div");
    fichaProducto.classList.add("producto");

    const nombre = document.createElement("h2");
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p");
    descripcion.textContent = producto.descripcion;

    const categoria = document.createElement("h4");
    categoria.textContent = producto.categoria;

    const precio = document.createElement("h3");
    precio.textContent = `${producto.precio}€`;

    const boton = document.createElement("button");
    boton.textContent = accion.charAt(0).toUpperCase() + accion.substring(1);
    boton.dataset.accion = accion;
    boton.dataset.nombre = producto.nombre;
    boton.classList.add(accion);

    fichaProducto.appendChild(nombre);
    fichaProducto.appendChild(descripcion);
    fichaProducto.appendChild(categoria);
    fichaProducto.appendChild(precio);
    fichaProducto.appendChild(boton);

    contenedor.appendChild(fichaProducto);

    if(nuevo) {
        fichaProducto.classList.add("nuevo");
        setTimeout(() => {
            fichaProducto.classList.remove("nuevo");
        }, 600);
    }

}

// mostrar productos
// 0.6
// Prepararemos el contenedor de productos y llamaremos a la función que crea las fichas
// de productos tantas veces como productos tengamos
function mostrarProductos() {
    sectionProductos.innerHTML = "";
    productos.forEach(producto => {cargaProducto(producto, sectionProductos, "agregar")});
}

// mostrar productos de una búsqueda
// 1 punto
// filtraremos los productos si el texto del input "busqueda" está incluido en el nombre
// del producto, descripción o categoría
// prepararemos el contenedor para las fichas
// y llama a la función que creará las fichas tantas veces como sea necesario
function mostrarProductosBusqueda() {
    const mibusqueda = buscarInput.value;
    const misProductos = productos.filter(producto => producto.nombre.toLocaleLowerCase().includes(mibusqueda.toLocaleLowerCase())
                                                    || producto.descripcion.toLocaleLowerCase().includes(mibusqueda.toLocaleLowerCase())
                                                    || producto.categoria.toLocaleLowerCase().includes(mibusqueda.toLocaleLowerCase())
);          
    sectionProductos.innerHTML = "";
    misProductos.forEach(producto => {cargaProducto(producto, sectionProductos, "agregar");});
}

// Guardar en el localStorage
// 1.2 punto
// guardará el carrito en el localStorage con el nombre "carrito" para poder leerlo
// en cualquier momento cuando recarguemos la página web
// también se encargará esta función de hacer temblar el boton "carrito" durante un tiempo
// añadiendole durante un tiempo la clase "temblar" al botón carrito
// recibe los argumentos:
// key: nombre de la variable que vamos a guardar "carrito"
// valor: array que guardaremos, es decir, variable donde guardamos nuestro carrito
// nuevo: argumento opcional, si nos envian true añadiremos la clase "verde" al botón carrito
// durante un tiempo para que se ponga verde en señal de que hemos añadido un producto, no borrado
function guardaDatos(key, valor, nuevo = false) {
    localStorage.setItem(key, JSON.stringify(valor));
    verCarrito.classList.add("temblar");
    if(nuevo) verCarrito.classList.add("verde");
    setTimeout(() => {
        verCarrito.classList.remove("temblar", "verde");
    }, 600);
}

// Agregar producto al carrito
// 1 puntos 
// gestión del detector de eventos por el cual añadiremos los productos a nuestro
// carrito, desde aquí actualizaremos nuestra variable de carrito con el nuevo producto
// llamaremos a la función para guardarlo en el localStorage y actualizaremos el total
// del carrito en la pestaña del carrito.
// Si es el primer producto que se añade, tendremos que eliminar el texto "El carrito está vacío"
function agregarAlCarrito(evento) {
    if(evento.target.tagName == "BUTTON") {
        const miProducto = productos.find(producto => producto.nombre === evento.target.dataset.nombre);
        carrito.push(miProducto);
        guardaDatos("carrito", carrito, true);
        actualizaTotal();
        cargaProducto(miProducto, sectionCarrito, "eliminar", true);
        if(document.querySelector(".vacio")){
            document.querySelector(".vacio").remove();
        }
    }
    
}

// Mostrar carrito
// 0.5 puntos
// carga los productos de la lista del carrito en el section de carrito y le añade o quita
// la clase "oculto" para visualizarlo o ocultarlo
function mostrarCarrito() {
    rellenaCarrito();
    sectionCarrito.classList.toggle("oculto");
}

// Actualiza cantidad total unidades que hay en el carrito y el total del precio
// todo ello lo escribe en el interior del section de carrito justo encima de las 
// fichas de productos que hay en el carrito: "Carrito (número de productos) 0.00€"
// Siempre tienen que aparecer 2 cifras decimales en el precio
// 0.5 puntos
function actualizaTotal() {
    const tituloCarrito = sectionCarrito.querySelector("h2");
    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    tituloCarrito.textContent = `Carrito (${carrito.length} Productos) ${total.toFixed(2)}€`;
}

// Prepara el section del carrito
// añade un h2 que será actualizado con: "Carrito (número de productos) 0.00€"
// llama a la función que actualiza el total en el h2
// Si el carrito está vacio añaderá un "p" con clase "vacio" que dirá "El carrito está vacío"
// Si el carrito tiene productos, llamará a la función que crea las fichas tantas veces como sea
// necesario para crear las fichas en el section de carrito
// 1.2 puntos 
function rellenaCarrito() {
    sectionCarrito.innerHTML = "";
    const tituloCarrito = document.createElement("h2");
    sectionCarrito.appendChild(tituloCarrito);
    actualizaTotal();
    if(carrito.length == 0) {
        const carritoVacio = document.createElement("p");
        carritoVacio.classList.add("vacio");
        carritoVacio.textContent = "El carrito está vacío";
        sectionCarrito.appendChild(carritoVacio);
    } else {
        carrito.forEach(producto => {
            cargaProducto(producto, sectionCarrito, "eliminar");
        });
    }
}

// Eliminar producto del carrito
// Gestiona el evento al pulsar sobre el boton "eliminar" de una ficha de producto del carrito
// debe eliminar ese producto de la variable carrito y llamar a la función para que 
// guarde la el nuevo valor de la variable carrito en el localStorage
// tendrá que añadirle una clase llamada "borrar" a la ficha que contiene el botón pulsado
// para que haga el efecto de irse por la izquierda antes de ser eliminada la ficha.
// 1.2 punto
function eliminarDelCarrito(evento) {
    if(evento.target.tagName == "BUTTON") {
        const misNombres = carrito.map(producto => producto.nombre); //Array sólo con nombres
        const miIndice = misNombres.indexOf(evento.target.dataset.nombre); // el indice del valor que coincide con el data-nombre
        carrito.splice(miIndice, 1);
        guardaDatos("carrito",carrito);
        actualizaTotal();
        const miFicha = evento.target.closest(".producto");
        miFicha.classList.add("borrar");
        setTimeout(() => {
            rellenaCarrito();
        }, 450);
    }
}


// ------------- FIN DEL EXAMEN --------------
// Mostrar productos al cargar la página, esta es la llamada rellenar los productos
// no hay que hacer nada más.
mostrarProductos();
