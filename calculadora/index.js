let pantalla, botones;
const teclasValidas = "0123456789/*-+%.";

document.addEventListener("DOMContentLoaded", function () {
    pantalla = document.querySelector("#pantalla");
    botones = document.querySelector(".botones");

    botones.addEventListener("click", escribeEnPantalla);
});

function escribeEnPantalla(e) {
    if (e.target.tagName != "BUTTON") {
        return;
    }
    console.log("esto es el boton: " + e.target.innerHTML);

    seleccionaBoton(e.target.innerHTML);
}

function seleccionaBoton(botonPulsado) {
    if (teclasValidas.includes(botonPulsado)) {
        console.log(botonPulsado);
        introduce(botonPulsado);
    } else if (botonPulsado == "=") {
        calcular();
    } else if (botonPulsado == "⌫") {
        borrarUltimo();
    } else if (botonPulsado == "C") {
        borrarTodo();
    }
}

function introduce(botonPulsado) {
    if (pantalla.textContent === "0" || pantalla.textContent === "Error") {
        pantalla.textContent = botonPulsado;
    } else {
        pantalla.textContent += botonPulsado;
    }
}

function calcular() {
    try {
        pantalla.textContent = eval(pantalla.textContent);
    } catch (error) {
        pantalla.textContent = "Error";
    }
}
function borrarUltimo() {
    pantalla.textContent =
        pantalla.textContent.length == "1"
            ? "0"
            : pantalla.textContent.slice(0, -1);
}
function borrarTodo() {
    //hay que dejar la pantalla con un cero
    pantalla.textContent = "0";
}
