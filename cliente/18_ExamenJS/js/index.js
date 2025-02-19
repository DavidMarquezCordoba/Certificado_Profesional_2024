// Los Productos están en el archivo datos.js

// Inicialización de variables globales y detectores de eventos de elementos existentes en el html
// usar burbujeo siempre que sea posible para reducir el número de detectores de eventos
// 1 punto







// Lee el carrito del localStorage por si hubiera datos en él
// si no hay datos del carrito en el localStorage iguala carrito a un array vacío
// 0.2 puntos
// Quitar comentario de la linea de abajo y terminar la asignación del valor al array.

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

  const ficha = document.createElement("div");
  ficha.classList.add("producto");
  contenedor.appendChild(ficha);

  const nombre = document.createElement("h2");
  nombre.textContent = producto.nombre;
  ficha.appendChild(nombre);

  const descripcion = document.createElement("p");
  descripcion.textContent = producto.descripcion;
  ficha.appendChild(descripcion);

  const categoria = document.createElement("h4");
  categoria.textContent = producto.categoria;
  ficha.appendChild(categoria);

  const precio = document.createElement("h3");
  precio.textContent = producto.precio + "€";
  ficha.appendChild(precio);

  const boton = document.createElement("button");
  boton.textContent = accion === "agregar" ? "Añadir al carrito" : "Eliminar";
  boton.classList.add(accion);
  ficha.appendChild(boton);
  boton.addEventListener("click", accion === "agregar" ? agregarAlCarrito : eliminarDelCarrito);
}

// mostrar productos
// 0.6
// Prepararemos el contenedor de productos y llamaremos a la función que crea las fichas
// de productos tantas veces como productos tengamos
function mostrarProductos() {

  const contenedor = document.querySelector("#productos");
  contenedor.innerHTML = ""; // vaciamos el contenedor de productos para que no se reescriban los mismos productos
  productos.forEach(producto => cargaProducto(producto, contenedor, "agregar"));
}

// mostrar productos de una búsqueda
// 1 punto
// filtraremos los productos si el texto del input "busqueda" está incluido en el nombre
// del producto, descripción o categoría
// prepararemos el contenedor para las fichas
// y llama a la función que creará las fichas tantas veces como sea necesario
function mostrarProductosBusqueda() {
  const textoBusqueda = document.querySelector(".busqueda").value.toLowerCase();
  const productosFiltrados = productos.filter(producto =>  
                                              producto.nombre.toLowerCase().includes(textoBusqueda) ||
                                              producto.descripcion.toLowerCase().includes(textoBusqueda) ||
                                              producto.categoria.toLowerCase().includes(textoBusqueda));

  const contenedor = document.querySelector("#productos"); //Seleccionamos el contenedor de productos
  contenedor.innerHTML = ""; // vaciamos el contenedor de productos para que no se reescriban los mismos productos
  productosFiltrados.forEach(producto => cargaProducto(producto, contenedor, "agregar"));
}

document.querySelector(".busqueda").addEventListener("input", mostrarProductosBusqueda);


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

  localStorage.setItem("carrito", JSON.stringify(carrito));
}

// Agregar producto al carrito
// 1 puntos 
// gestión del detector de eventos por el cual añadiremos los productos a nuestro
// carrito, desde aquí actualizaremos nuestra variable de carrito con el nuevo producto
// llamaremos a la función para guardarlo en el localStorage y actualizaremos el total
// del carrito en la pestaña del carrito.
// Si es el primer producto que se añade, tendremos que eliminar el texto "El carrito está vacío"
function agregarAlCarrito(evento) {
  const productoNombre = evento.target.parentElement.querySelector("h2").textContent; //Seleccionamos el nombre del producto a través de la etiqueta h2
  const productoSeleccionado = productos.find(producto => producto.nombre === productoNombre); //Buscamos el producto seleccionado en el array de productos

  carrito.push(productoSeleccionado); //Añadimos el producto seleccionado al carrito
  guardaDatos("carrito", carrito); //Guardamos el carrito en el localStorage desde su función
  actualizaTotal(); //Actualizamos el total del carrito

  const mensajeVacio = document.querySelector(".vacio");
  
  if (mensajeVacio) {
    mensajeVacio.remove();
  }
}

// Mostrar carrito
// 0.5 puntos
// carga los productos de la lista del carrito en el section de carrito y le añade o quita
// la clase "oculto" para visualizarlo o ocultarlo
function mostrarCarrito() {
  rellenaCarrito();
  document.querySelector("#carrito").classList.toggle("oculto");

}

document.querySelector("#ver-carrito").addEventListener("click", mostrarCarrito);


// Actualiza cantidad total unidades que hay en el carrito y el total del precio
// todo ello lo escribe en el interior del section de carrito justo encima de las 
// fichas de productos que hay en el carrito: "Carrito (número de productos) 0.00€"
// Siempre tienen que aparecer 2 cifras decimales en el precio
// 0.5 puntos
function actualizaTotal() {
  const totalProductos = carrito.length; // Contamos los productos
  const totalPrecio = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0); // Sumamos los precios

  // Seleccionamos el h2 dentro de #carrito y actualizamos el texto
  const tituloCarrito = document.querySelector("#carrito h2");
  if (tituloCarrito) {
    tituloCarrito.textContent = totalProductos > 0 
        ? `Carrito (${totalProductos} productos) ${totalPrecio.toFixed(2)}€` 
        : "El carrito está vacío";
}

}

// Prepara el section del carrito
// añade un h2 que será actualizado con: "Carrito (número de productos) 0.00€"
// llama a la función que actualiza el total en el h2
// Si el carrito está vacio añaderá un "p" con clase "vacio" que dirá "El carrito está vacío"
// Si el carrito tiene productos, llamará a la función que crea las fichas tantas veces como sea
// necesario para crear las fichas en el section de carrito
// 1.2 puntos 
function rellenaCarrito() {

  const contenedor = document.querySelector("#carrito");
  

  if (carrito.length == 0) {
    const estado = document.createElement("p"); 
    estado.classList.add("vacio"); 
    estado.textContent = "El carrito está vacío"; 
    contenedor.appendChild(estado); 
  } else {
    carrito.forEach(producto => {
      cargaProducto(producto, contenedor, "eliminar"); 
    });
  }
  actualizaTotal();
}

// Eliminar producto del carrito
// Gestiona el evento al pulsar sobre el boton "eliminar" de una ficha de producto del carrito
// debe eliminar ese producto de la variable carrito y llamar a la función para que 
// guarde la el nuevo valor de la variable carrito en el localStorage
// tendrá que añadirle una clase llamada "borrar" a la ficha que contiene el botón pulsado
// para que haga el efecto de irse por la izquierda antes de ser eliminada la ficha.
// 1.2 punto
function eliminarDelCarrito(evento) {

}


// ------------- FIN DEL EXAMEN --------------
// Mostrar productos al cargar la página, esta es la llamada rellenar los productos
// no hay que hacer nada más.
mostrarProductos();
