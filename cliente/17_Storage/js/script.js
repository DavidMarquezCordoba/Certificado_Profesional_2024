let numeroPestanas = parseInt(localStorage.getItem("numeroPestanas")) || 0;

let miPestana = sessionStorage.getItem("miPestana");

if (miPestana === null) {
    miPestana = ++numeroPestanas;

    setTimeout(()=>{
        localStorage.setItem("numeroPestanas", numeroPestanas);
        sessionStorage.setItem("miPestana", miPestana);
    }, 1000);
}
document.querySelector("h1").textContent = `Página ${miPestana} de ${numeroPestanas}`;

let colorPestana = localStorage.getItem("color");

if (colorPestana != null) {
    document.body.style.backgroundColor = colorPestana;
}

function cambiaColor(evento) {
    document.body.style.backgroundColor = evento.target.textContent;
    localStorage.setItem("color", evento.target.textContent);
}

function leeLocalStorage(evento) {
    // key => nombre de la variable
    if (evento.key == "color") {
        document.body.style.backgroundColor = localStorage.getItem("color");
    } else if (evento.key == "numeroPestanas"){
        document.querySelector("h1").textContent = `Página ${miPestana} de ${localStorage.getItem("numeroPestanas")}`;
    }
}

document.querySelector(".contenedor").addEventListener("click", cambiaColor);

window.addEventListener("storage", leeLocalStorage);