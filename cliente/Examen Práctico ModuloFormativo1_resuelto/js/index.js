const listaTareas = JSON.parse(localStorage.getItem("lista")) || ["tirar la basura", "sacar al perro"];

// Variables globales
const listaTareasDOM = document.getElementById("lista-tareas");
const inputTareaNueva = document.getElementById("input-tarea-nueva");
const botonTareaNueva = document.getElementById("boton-tarea-nueva");

botonTareaNueva.addEventListener("click", () => { nuevaTarea();});
inputTareaNueva.addEventListener("keyup", (evento) => {if(evento.key == "Enter") nuevaTarea();});
listaTareasDOM.addEventListener("click", (evento) => {if(evento.target.tagName == "LI") borrarTarea(evento.target);});

function nuevaTarea(tarea) {
    const nombreTarea = inputTareaNueva.value.trim();
    if (nombreTarea === "") return;

    cargarTarea(nombreTarea, listaTareas.length, true);
    listaTareas.push(nombreTarea);
    inputTareaNueva.value = "";
    localStorage.setItem("lista", JSON.stringify(listaTareas));
}

function cargarTarea(tarea, indice, nuevo = false) {
    const contenedor = document.querySelector("#lista-tareas");
    const miTarea = document.createElement("li");
    miTarea.innerHTML = tarea;
    miTarea.id = `tarea${indice}`;
    if (nuevo) miTarea.classList.add("nuevo");
    contenedor.appendChild(miTarea);
}

function borrarTarea(elemento) {
    // if(!confirm("¿Seguro que quieres borrar esta tarea?")) return;
    const pos = elemento.id.substring(5);
    listaTareas.splice(+pos, 1); //Funciona sin el + pero aseguro que el indice sea un número
    localStorage.setItem("lista", JSON.stringify(listaTareas));
    elemento.classList = "quita";
    setTimeout(() => {
        elemento.remove();
        rellenaTareas();
        inputTareaNueva.focus();
    }, 900);
}

function rellenaTareas() {
    const contenedor = document.querySelector("#lista-tareas");
    contenedor.innerHTML = "";
    listaTareas.forEach((tarea, indice) => { cargarTarea(tarea, indice); });
}

// Iniciar la aplicación
document.addEventListener("DOMContentLoaded", () => {
    rellenaTareas();
    inputTareaNueva.focus();
});
