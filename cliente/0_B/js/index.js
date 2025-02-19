"use strict";

/* VARIABLES */
let padre = document.querySelector(".div-tareas");
let botonAgregar = document.querySelector("#boton-agregar");
let tareaAagregar;

/* ESTO ES PARA CREAR EL ARRAY VACIO PARA EL LOCAL O QUE RECUPERE EL LOCAL Y LO PARSEE */
let entradas =
    JSON.parse(localStorage.getItem("entradas")) ||
    [
        /*    "sacar al perro a pasear",
    "ir al supermercado", */
    ];

/* ESTO ES PARA MOSTRAR EL LOCAL STORAGE */
entradas.forEach((entrada) => {
    introducirInfo(entrada, false);
});

function introducirInfo(texto, nuevo = false) {
    let p = document.createElement("p");
    p.textContent = texto;
    padre.appendChild(p);

    if (nuevo) {
        p.classList.add("nuevo");
    }
}

function agregarEntrada() {
    let input = document.querySelector("#agregar");
    tareaAagregar = document.querySelector("#agregar").value;
    if (tareaAagregar == "") {
        alert("recuerda incluir algun texto para la tarea");
    } else {
        console.log(tareaAagregar);

        entradas.push(tareaAagregar);
        localStorage.setItem("entradas", JSON.stringify(entradas));

        introducirInfo(tareaAagregar, true);
        console.log(
            "Nueva tarea agregada. Fecha:",
            new Date().toLocaleString(),
            ". Tarea: ",
            tareaAagregar
        );
        setTimeout(() => {
            console.log("estoy esperarndo para el focus");

            input.focus();
        }, 600);
        document.querySelector("#agregar").value = "";
    }
}

function eliminarEntrada(evento) {
    /*  console.log(evento);
    console.log("mi entrada", evento.target.tagName); */

    if (evento.target.tagName == "P") {
        const miEntrada = evento.target.closest("p");
        miEntrada.classList.add("desaparecer");

        console.log(
            "Tarea eliminada. Fecha:",
            new Date().toLocaleString(),
            ". Tarea: ",
            miEntrada.textContent
        );
        setTimeout(() => {
            miEntrada.remove();
            const indice = entradas.findIndex((entrada) => {
                return entrada.includes(miEntrada.textContent);
            });

            console.log(indice);
            if (indice !== -1) {
                entradas.splice(indice, 1);
                localStorage.setItem("entradas", JSON.stringify(entradas));
            }
        }, 800);
    }
}
function manejarEnter(event) {
    if (event.key === "Enter") {
        agregarEntrada();
    }
}
padre.addEventListener("click", eliminarEntrada);
botonAgregar.addEventListener("click", agregarEntrada);
//document.addEventListener("keydown", agregarEntrada);

document.querySelector("#agregar").addEventListener("keydown", manejarEnter);
