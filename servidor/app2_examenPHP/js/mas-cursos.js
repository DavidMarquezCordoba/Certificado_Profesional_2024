

const padre = document.querySelector(".otros-cursos");
let modal;

padre.addEventListener("click", evento => {
    if(evento.target.tagName != "IMG") {
        return;
    }
    modal = document.createElement("div");
    modal.classList.add("modal");
    document.body.appendChild(modal);
    const imagenModal = evento.target.cloneNode(true);
    imagenModal.classList = "imagen-modal";
    modal.appendChild(imagenModal);
    const btnCerrar = document.createElement("button");
    btnCerrar.textContent = "X";
    btnCerrar.classList.add("boton-modal");
    modal.appendChild(btnCerrar);
    document.body.classList.add("quieto");

    modal.addEventListener("click", cerrarModal);
});

function cerrarModal(evento) {
    modal.removeEventListener("click", cerrarModal);
    modal.classList.add("modal-ocultar");
    setTimeout(() => modal.remove(), 900);
    document.body.classList.remove("quieto");
}