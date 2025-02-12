// Resumen:
// Este código JavaScript realiza lo siguiente:

// Crea un ícono de hamburguesa:

// Usa un div con un SVG dentro para representar el ícono de menú.

// Añade el ícono al body del documento.

// Abre el menú:

// Al hacer clic en el ícono de hamburguesa, se muestra el menú añadiendo la clase nav-mostrar.

// Se desactiva el scroll del body para evitar desplazamientos no deseados.

// Se añaden eventos para cerrar el menú al soltar el clic del ratón o al mover el dedo en pantallas táctiles.

// Cierra el menú:

// Al soltar el clic del ratón o mover el dedo en pantallas táctiles, se oculta el menú eliminando la clase nav-mostrar.

// Se reactiva el scroll del body.

// Se eliminan los eventos de cierre para mejorar el rendimiento.


// ==================================================
// Creación del ícono de hamburguesa (menú)
// ==================================================
const hamburguesa = document.createElement("div"); // Crea un elemento `div` para el ícono de hamburguesa.
const minav = document.querySelector(".nav-fondo"); // Selecciona el contenedor del menú (nav).

// Añade el SVG del ícono de hamburguesa dentro del `div`.
hamburguesa.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2">
        <path d="M4 6l16 0"></path> <!-- Línea superior del ícono -->
        <path d="M4 12l16 0"></path> <!-- Línea central del ícono -->
        <path d="M4 18l16 0"></path> <!-- Línea inferior del ícono -->
    </svg>
`;

hamburguesa.classList.add("hamburguesa"); // Añade la clase CSS "hamburguesa" al `div`.
document.body.appendChild(hamburguesa); // Añade el ícono de hamburguesa al body.

// ==================================================
// Evento para abrir el menú al hacer clic en el ícono de hamburguesa
// ==================================================
hamburguesa.children[0].addEventListener("click", abreMenu); // Añade un evento de clic al SVG dentro del `div`.

// Función para abrir el menú.
function abreMenu(evento) {
    minav.classList.add("nav-mostrar"); // Muestra el menú añadiendo la clase "nav-mostrar".
    
    // Añade eventos para cerrar el menú al soltar el clic del ratón o al mover el dedo en pantallas táctiles.
    minav.addEventListener("mouseup", cierraMenu); // Para ratón.
    minav.addEventListener("touchmove", cierraMenu); // Para pantallas táctiles.

    document.body.classList.add("quieto-scroll"); // Desactiva el scroll del body para evitar desplazamientos.
}

// ==================================================
// Función para cerrar el menú
// ==================================================
function cierraMenu(evento) {
    document.body.classList.remove("quieto-scroll"); // Reactiva el scroll del body.

    minav.classList.remove("nav-mostrar"); // Oculta el menú eliminando la clase "nav-mostrar".

    // Elimina los eventos de cierre para mejorar el rendimiento.
    minav.removeEventListener("mouseup", cierraMenu); // Para ratón.
    minav.removeEventListener("touchmove", cierraMenu); // Para pantallas táctiles.
}