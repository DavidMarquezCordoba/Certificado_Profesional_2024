const hamburguesa = document.createElement("div");
const minav = document.querySelector(".nav-fondo");
hamburguesa.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"><path d="M4 6l16 0"></path><path d="M4 12l16 0"></path><path d="M4 18l16 0"></path></svg>`;
hamburguesa.classList.add("hamburguesa");
document.body.appendChild(hamburguesa);

hamburguesa.children[0].addEventListener("click", evento => {
    minav.classList.add("nav-mostrar");
    minav.addEventListener("touchmove", cierraMenu);
    minav.addEventListener("mouseup", cierraMenu);
    document.body.classList.add("quieto");
});

function cierraMenu(evento) {
    minav.classList.remove("nav-mostrar");
    minav.removeEventListener("touchmove", cierraMenu);
    minav.removeEventListener("mouseup", cierraMenu);
    document.body.classList.remove("quieto");
}