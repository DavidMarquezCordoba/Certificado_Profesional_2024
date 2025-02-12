
// Selecciona la sección donde se mostrará el carrito
const sectionCarrito = document.querySelector("#carrito");

// Agrega un evento para eliminar productos cuando se haga clic en la sección del carrito
sectionCarrito.addEventListener("click", eliminarDelCarrito);

// Selecciona la sección donde se mostrarán los productos
const sectionProductos = document.querySelector("#productos");

// Agrega un evento para agregar productos al carrito cuando se haga clic en la sección de productos
sectionProductos.addEventListener("click", agregarAlCarrito);

// Selecciona el botón que permite ver el carrito
const verCarrito = document.querySelector("#ver-carrito");

// Agrega un evento para mostrar u ocultar el carrito cuando se haga clic en el botón "Ver Carrito"
verCarrito.addEventListener("click", mostrarCarrito);

// Selecciona el ícono de la lupa (para activar la búsqueda de productos)
const lupa = document.querySelector("#buscar");

// Agrega un evento para filtrar los productos cuando se haga clic en la lupa
lupa.addEventListener("click", mostrarProductosBusqueda);

// Selecciona el campo de búsqueda
const buscarInput = document.querySelector("#busqueda");

// Agrega un evento para filtrar los productos en tiempo real a medida que el usuario escribe
buscarInput.addEventListener("input", mostrarProductosBusqueda);

// Recupera los datos del carrito desde el localStorage o inicializa un array vacío si no hay datos guardados
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

/**
 * Función para crear la ficha de un producto y agregarla a un contenedor
 */
function cargaProducto(producto, contenedor, accion, nuevo = false) {
    const fichaProducto = document.createElement("div"); // Crea un contenedor para el producto
    fichaProducto.classList.add("producto"); // Se le asigna la clase "producto"

    const nombre = document.createElement("h2"); // Crea un elemento para el nombre del producto
    nombre.textContent = producto.nombre;

    const descripcion = document.createElement("p"); // Crea un párrafo para la descripción
    descripcion.textContent = producto.descripcion;

    const categoria = document.createElement("h4"); // Crea un elemento para la categoría
    categoria.textContent = producto.categoria;

    const precio = document.createElement("h3"); // Crea un elemento para el precio
    precio.textContent = `${producto.precio}€`;

    const boton = document.createElement("button"); // Crea un botón para agregar o eliminar el producto
    boton.textContent = accion.charAt(0).toUpperCase() + accion.substring(1); // Capitaliza la primera letra del texto del botón
    boton.dataset.accion = accion; // Almacena el tipo de acción (agregar/eliminar)
    boton.dataset.nombre = producto.nombre; // Almacena el nombre del producto en el botón
    boton.classList.add(accion); // Se le asigna una clase con el nombre de la acción

    // Se agregan los elementos creados dentro de la ficha del producto
    fichaProducto.appendChild(nombre);
    fichaProducto.appendChild(descripcion);
    fichaProducto.appendChild(categoria);
    fichaProducto.appendChild(precio);
    fichaProducto.appendChild(boton);

    // Se agrega la ficha del producto al contenedor de productos o del carrito
    contenedor.appendChild(fichaProducto);

    // Si el producto es nuevo, se le añade una animación y luego se elimina
    if (nuevo) {
        fichaProducto.classList.add("nuevo");
        setTimeout(() => {
            fichaProducto.classList.remove("nuevo");
        }, 600);
    }
}

/**
 * Función que muestra todos los productos en la tienda
 */
function mostrarProductos() {
    sectionProductos.innerHTML = ""; // Limpia la sección antes de agregar los productos
    productos.forEach(producto => {
        cargaProducto(producto, sectionProductos, "agregar");
    });
}

/**
 * Función que filtra y muestra los productos según el término de búsqueda ingresado
 */
function mostrarProductosBusqueda() {
    const mibusqueda = buscarInput.value.toLowerCase(); // Convierte la búsqueda a minúsculas para evitar errores de comparación
    const misProductos = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(mibusqueda) ||
        producto.descripcion.toLowerCase().includes(mibusqueda) ||
        producto.categoria.toLowerCase().includes(mibusqueda)
    );

    sectionProductos.innerHTML = ""; // Limpia la sección de productos antes de mostrar los resultados
    misProductos.forEach(producto => {
        cargaProducto(producto, sectionProductos, "agregar");
    });
}

/**
 * Guarda los datos en localStorage y añade animaciones al botón del carrito
 */
function guardaDatos(key, valor, nuevo = false) {
    localStorage.setItem(key, JSON.stringify(valor)); // Guarda los datos en el almacenamiento local
    verCarrito.classList.add("temblar"); // Agrega una animación de vibración al botón del carrito

    if (nuevo) verCarrito.classList.add("verde"); // Agrega una animación si es un nuevo producto

    setTimeout(() => {
        verCarrito.classList.remove("temblar", "verde");
    }, 600);
}

/**
 * Agrega un producto al carrito cuando se hace clic en "Agregar"
 */
function agregarAlCarrito(evento) {
    if (evento.target.tagName === "BUTTON") { // Verifica que el clic fue en un botón
        const miProducto = productos.find(producto => producto.nombre === evento.target.dataset.nombre);
        carrito.push(miProducto); // Agrega el producto al array del carrito
        guardaDatos("carrito", carrito, true); // Guarda el carrito actualizado
        actualizaTotal(); // Actualiza el total de productos
        cargaProducto(miProducto, sectionCarrito, "eliminar", true); // Muestra el producto en el carrito

        if (document.querySelector(".vacio")) {
            document.querySelector(".vacio").remove(); // Elimina el mensaje de "carrito vacío" si existía
        }
    }
}

/**
 * Muestra u oculta el carrito cuando se presiona el botón "Ver Carrito"
 */
function mostrarCarrito() {
    rellenaCarrito();
    sectionCarrito.classList.toggle("oculto");
}

/**
 * Actualiza el total de productos y el precio en el carrito
 */
function actualizaTotal() {
    const tituloCarrito = sectionCarrito.querySelector("h2");
    const total = carrito.reduce((total, producto) => total + producto.precio, 0);
    tituloCarrito.textContent = `Carrito (${carrito.length} Productos) ${total.toFixed(2)}€`;
}

/**
 * Llena el carrito con los productos almacenados
 */
function rellenaCarrito() {
    sectionCarrito.innerHTML = ""; // Limpia el carrito antes de actualizarlo

    const tituloCarrito = document.createElement("h2");
    sectionCarrito.appendChild(tituloCarrito);

    actualizaTotal();

    if (carrito.length === 0) {
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

/**
 * Elimina un producto del carrito cuando se presiona "Eliminar"
 */
function eliminarDelCarrito(evento) {
    if (evento.target.tagName === "BUTTON") {
        const misNombres = carrito.map(producto => producto.nombre);
        const miIndice = misNombres.indexOf(evento.target.dataset.nombre);
        carrito.splice(miIndice, 1); // Elimina el producto del array del carrito
        guardaDatos("carrito", carrito);
        actualizaTotal();

        const miFicha = evento.target.closest(".producto");
        miFicha.classList.add("borrar");
        setTimeout(() => {
            rellenaCarrito();
        }, 450);
    }
}

// Muestra los productos en la tienda al cargar la página
mostrarProductos();



/* 
1️⃣ Evento click en sectionCarrito → Eliminar productos del carrito
javascript

sectionCarrito.addEventListener("click", eliminarDelCarrito);

Proceso completo:

Detecta un clic en la sección del carrito (#carrito).
Verifica si el clic fue en un botón, ya que los productos tienen un botón de eliminación.
Encuentra el índice del producto en el carrito comparando los nombres de los productos almacenados.
Elimina el producto del array carrito usando splice().
Actualiza los datos en localStorage para guardar el estado actualizado del carrito.
Actualiza el total del carrito (actualizaTotal()).
Aplica una animación al producto eliminado agregando la clase "borrar".
Después de 450ms, vuelve a renderizar el carrito (rellenaCarrito()) para reflejar los cambios.



2️⃣ Evento click en sectionProductos → Agregar productos al carrito

sectionProductos.addEventListener("click", agregarAlCarrito);
Proceso completo:

Detecta un clic en la sección de productos (#productos).
Verifica si el clic fue en un botón de "Agregar".
Obtiene el nombre del producto desde el data-nombre del botón.
Busca el producto en el array productos usando find().
Añade el producto al array carrito (carrito.push(miProducto);).
Guarda el carrito actualizado en localStorage con guardaDatos("carrito", carrito, true);.
Actualiza el total de productos (actualizaTotal();).
Carga el producto en la sección del carrito con cargaProducto().
Si existe el mensaje "El carrito está vacío", lo elimina (document.querySelector(".vacio").remove();).


3️⃣ Evento click en verCarrito → Mostrar/Ocultar el carrito


verCarrito.addEventListener("click", mostrarCarrito);

Proceso completo:

Llama a rellenaCarrito() para actualizar el contenido del carrito antes de mostrarlo.
Alterna la visibilidad del carrito con classList.toggle("oculto"), lo que muestra u oculta el carrito en pantalla.



4️⃣ Evento click en lupa → Filtrar productos con la lupa


lupa.addEventListener("click", mostrarProductosBusqueda);

Proceso completo:
Obtiene el valor del campo de búsqueda (buscarInput.value).
Convierte el valor a minúsculas (toLowerCase()) para evitar errores de mayúsculas y minúsculas.
Filtra el array productos, buscando coincidencias en:
nombre
descripcion
categoria
Limpia la sección de productos (sectionProductos.innerHTML = "") antes de mostrar los resultados.
Carga los productos filtrados en pantalla (cargaProducto()).


5️⃣ Evento input en buscarInput → Filtrar productos en tiempo real


buscarInput.addEventListener("input", mostrarProductosBusqueda);

Proceso completo:

Se activa cada vez que el usuario escribe en el campo de búsqueda.
Obtiene el valor del input y lo convierte a minúsculas.
Filtra el array productos en base a coincidencias en nombre, descripción o categoría.
Limpia la sección de productos antes de mostrar los resultados.
Muestra solo los productos que coinciden con la búsqueda.


6️⃣ Evento cargaProducto() → Crear y mostrar productos

Aunque no es un evento directamente, cargaProducto() se usa en varios eventos para mostrar los productos.

Proceso completo:


Crea un div contenedor para el producto (fichaProducto).
Crea elementos para mostrar:
h2 → Nombre
p → Descripción
h4 → Categoría
h3 → Precio
button → Botón de agregar/eliminar
Configura el botón:
Usa dataset.accion para definir si es "Agregar" o "Eliminar".
Usa dataset.nombre para almacenar el nombre del producto.
Agrega todos los elementos dentro de fichaProducto.
Agrega fichaProducto al contenedor correspondiente (sectionProductos o sectionCarrito).
Si el producto es nuevo, aplica una animación y la elimina después de 600ms.


7️⃣ Evento guardaDatos() → Guardar datos en localStorage y animar botón del carrito

Proceso completo:

Guarda el array carrito en localStorage en formato JSON.
Aplica animaciones al botón del carrito:
"temblar" → Vibración rápida.
"verde" (si es nuevo) → Destaca el botón en verde.
Elimina las animaciones después de 600ms con setTimeout().



8️⃣ Evento actualizaTotal() → Calcular y mostrar total del carrito

Proceso completo:

Selecciona el título del carrito (h2 dentro de sectionCarrito).
Calcula el total sumando los precios de los productos en carrito con reduce().
Actualiza el texto del título con la cantidad de productos y el precio total.


9️⃣ Evento rellenaCarrito() → Mostrar el contenido del carrito

Proceso completo:

Limpia el contenido del carrito (sectionCarrito.innerHTML = "").
Crea un h2 para el título y lo agrega al carrito.
Llama a actualizaTotal() para calcular y mostrar el total.
Si el carrito está vacío, muestra un mensaje de "Carrito vacío".
Si hay productos, los muestra con cargaProducto().


🔟 Evento eliminarDelCarrito() → Eliminar un producto cuando se hace clic en "Eliminar"

Proceso completo:

Verifica que el clic fue en un botón.
Crea un array solo con los nombres de los productos en el carrito (misNombres).
Busca el índice del producto a eliminar en misNombres con indexOf().
Elimina el producto del array carrito con splice().
Guarda el carrito actualizado en localStorage (guardaDatos()).
Actualiza el total de productos (actualizaTotal()).
Añade la clase "borrar" al producto para una animación de eliminación.
Después de 450ms, vuelve a renderizar el carrito (rellenaCarrito()).
Conclusión
Cada evento está diseñado para manejar una acción específica en la tienda:

Eventos de click manejan acciones como agregar, eliminar, mostrar u ocultar elementos.
Eventos de input permiten búsquedas en tiempo real.

Funciones auxiliares como cargaProducto(), actualizaTotal() y rellenaCarrito() ayudan a mantener la interfaz actualizada.
 */