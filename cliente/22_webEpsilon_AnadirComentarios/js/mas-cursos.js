const cursos = [
    { 
        clase : "imagen1",
        imagen : "curso1",
        alt : "foto curso operaciones básicas de comunicación"
    },
    { 
        clase : "imagen1",
        imagen : "curso2",
        alt : "foto curso habilitación para la docencia"
    },
    { 
        clase : "imagen1",
        imagen : "curso3",
        alt : "foto curso operaciones auxiliares de servicio"
    },
    { 
        clase : "imagen1",
        imagen : "curso4",
        alt : "foto curso "
    },
    { 
        clase : "aula1",
        imagen : "aula1",
        alt : "foto curso "
    },
    { 
        clase : "imagen2",
        imagen : "curso5",
        alt : "foto curso "
    },
    { 
        clase : "imagen2",
        imagen : "curso6",
        alt : "foto curso "
    },
    { 
        clase : "imagen2",
        imagen : "curso7",
        alt : "foto curso "
    },
    { 
        clase : "aula2",
        imagen : "aula2",
        alt : "foto curso "
    },
    { 
        clase : "imagen2-3",
        imagen : "curso8",
        alt : "foto curso "
    },
    { 
        clase : "imagen3",
        imagen : "curso9",
        alt : "foto curso "
    },
    { 
        clase : "imagen3",
        imagen : "curso10",
        alt : "foto curso "
    },
    { 
        clase : "imagen3",
        imagen : "curso11",
        alt : "foto curso "
    },
    { 
        clase : "imagen3",
        imagen : "curso12",
        alt : "foto curso "
    },
    { 
        clase : "aula3",
        imagen : "aula3",
        alt : "foto curso "
    },

];

const padre = document.querySelector(".otros-cursos");

cursos.forEach( (curso, indice) => { // indice recoge la posición del array en cada pasada 0, 1, 2... es opcional
    // console.log(`Esta es la pasada número ${indice}`); //posición del array en esta pasada
    const micurso = document.createElement("img");
    micurso.classList.add(curso.clase);
    micurso.src = `./img/cursos/${curso.imagen}.png`;
    micurso.alt = curso.alt;
    padre.appendChild(micurso);
});

// Modal
let modal;

function mostrarModal(evento) {
    if(evento.target.tagName != "IMG") return;
    modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);

    // Crear imagen del modal
    const imagenModal = evento.target.cloneNode(true);  // la clonamos de la imagen tocada
    imagenModal.classList = "imagen-modal"; // no usamos classList.add porque al ponerlo sin el add, al añadir una clase, eliminamos la/s clase/s de la imagen clonada
    modal.appendChild(imagenModal);

    const btnCerrar = document.createElement("button"); // Este es el botón debajo de la imagen del modal
    btnCerrar.textContent = "X";
    btnCerrar.classList.add("boton-modal");
    modal.appendChild(btnCerrar);

    document.body.classList.add("quieto-scroll"); // con esta clase desconectamos la rueda del scroll del ratón
    modal.addEventListener("click", cerrarModal); // Con esto añadimos el detector de eventos de click al modal para que al tocar a él o alguno de sus hijos llame a la función cerrarModal
}

padre.addEventListener("click", mostrarModal);

function cerrarModal(evento) {
    document.body.classList.remove("quieto-scroll"); // quitando esta clase volvemos a conectar la rueda del scroll del ratón
    modal.classList.add("modal-ocultar");   // Añadimos la clase que comenzará la animación de transparencia 
    // para que no se vea el modal, la animación dura 1seg por lo que hay que hacer que justo antes se elimine
    // el modal, por lo que más abajo tenemos un setTimeout de 0.9seg para que elimine el modal antes de que
    // termine la animación, sino el modal aparecería otra vez.
    modal.removeEventListener("click", cerrarModal);    // Quitamos el detector de eventos del modal para mejorar el rendimiento del navegador
    setTimeout(() => {  // Dentro de 0.9seg se elimina el modal del DOM
        modal.remove();
    }, 900);
}
