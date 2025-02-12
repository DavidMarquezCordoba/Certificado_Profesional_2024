// Resumen:
// Este código JavaScript realiza lo siguiente:

// Array de cursos:

// Define un array de objetos, donde cada objeto representa un curso con propiedades como clase, imagen y alt.

// Creación dinámica de imágenes:

// Recorre el array de cursos y crea elementos <img> dinámicamente, asignándoles las propiedades correspondientes (clase, ruta de la imagen y texto alternativo).

// Funcionalidad del modal:

// Muestra un modal al hacer clic en una imagen, clonando la imagen y añadiéndola al modal junto con un botón para cerrarlo.

// Cierra el modal con una animación y lo elimina del DOM después de 900ms.

// Cada parte del código está comentada para explicar su funcionamiento y propósito. 


// ==================================================
// Array de objetos que representan cursos
// ==================================================
const cursos = [
    { 
        clase: "imagen1", // Clase CSS para la imagen.
        imagen: "curso1", // Nombre de la imagen (sin extensión).
        alt: "foto curso operaciones básicas de comunicación" // Texto alternativo para la imagen.
    },
    { 
        clase: "imagen1",
        imagen: "curso2",
        alt: "foto curso habilitación para la docencia"
    },
    { 
        clase: "imagen1",
        imagen: "curso3",
        alt: "foto curso operaciones auxiliares de servicio"
    },
    { 
        clase: "imagen1",
        imagen: "curso4",
        alt: "foto curso "
    },
    { 
        clase: "aula1",
        imagen: "aula1",
        alt: "foto curso "
    },
    { 
        clase: "imagen2",
        imagen: "curso5",
        alt: "foto curso "
    },
    { 
        clase: "imagen2",
        imagen: "curso6",
        alt: "foto curso "
    },
    { 
        clase: "imagen2",
        imagen: "curso7",
        alt: "foto curso "
    },
    { 
        clase: "aula2",
        imagen: "aula2",
        alt: "foto curso "
    },
    { 
        clase: "imagen2-3",
        imagen: "curso8",
        alt: "foto curso "
    },
    { 
        clase: "imagen3",
        imagen: "curso9",
        alt: "foto curso "
    },
    { 
        clase: "imagen3",
        imagen: "curso10",
        alt: "foto curso "
    },
    { 
        clase: "imagen3",
        imagen: "curso11",
        alt: "foto curso "
    },
    { 
        clase: "imagen3",
        imagen: "curso12",
        alt: "foto curso "
    },
    { 
        clase: "aula3",
        imagen: "aula3",
        alt: "foto curso "
    },
];

// ==================================================
// Selección del contenedor padre para las imágenes
// ==================================================
const padre = document.querySelector(".otros-cursos"); // Selecciona el contenedor donde se añadirán las imágenes.

// ==================================================
// Creación dinámica de imágenes a partir del array de cursos
// ==================================================
cursos.forEach((curso, indice) => { // Recorre cada objeto en el array `cursos`.
    // `indice` es opcional y representa la posición actual en el array (0, 1, 2, ...).
    const micurso = document.createElement("img"); // Crea un elemento `<img>`.
    micurso.classList.add(curso.clase); // Añade la clase CSS definida en el objeto `curso`.
    micurso.src = `../img/cursos/${curso.imagen}.png`; // Define la ruta de la imagen.
    micurso.alt = curso.alt; // Define el texto alternativo de la imagen.
    padre.appendChild(micurso); // Añade la imagen al contenedor padre.
});

// ==================================================
// Funcionalidad del modal
// ==================================================
let modal; // Variable para almacenar el modal.

// Función para mostrar el modal al hacer clic en una imagen.
function mostrarModal(evento) {
    if (evento.target.tagName != "IMG") return; // Si no se hace clic en una imagen, no hace nada.
    
    // Crea el modal.
    modal = document.createElement("div");
    modal.classList.add("modal"); // Añade la clase CSS para el modal.
    document.body.appendChild(modal); // Añade el modal al body.

    // Clona la imagen en la que se hizo clic y la añade al modal.
    const imagenModal = evento.target.cloneNode(true); // Clona la imagen.
    imagenModal.classList = "imagen-modal"; // Añade la clase CSS para la imagen del modal.
    modal.appendChild(imagenModal); // Añade la imagen al modal.

    // Crea un botón para cerrar el modal.
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X"; // Texto del botón.
    btnCerrar.classList.add("boton-modal", "boton-cerrar"); // Añade la clase CSS para el botón.
    modal.appendChild(btnCerrar); // Añade el botón al modal.

    document.body.classList.add("quieto-scroll"); // Desactiva el scroll del body.
    modal.addEventListener("click", cerrarModal); // Añade un evento para cerrar el modal al hacer clic en él.
    
}

// Añade un evento al contenedor padre para detectar clics en las imágenes.
padre.addEventListener("click", mostrarModal);

// Función para cerrar el modal.
function cerrarModal(evento) {
    document.body.classList.remove("quieto-scroll"); // Reactiva el scroll del body.
    modal.classList.add("modal-ocultar"); // Añade la clase CSS para ocultar el modal con animación.
   
    // Elimina el evento de clic del modal para mejorar el rendimiento.
    modal.removeEventListener("click", cerrarModal);

    // Elimina el modal del DOM después de 900ms (antes de que termine la animación).
    setTimeout(() => {
        modal.remove();
    }, 900);

    
}