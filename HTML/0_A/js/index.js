const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
const botonAgregar = document.querySelector("button");
botonAgregar.addEventListener("click", addNuevaTarea);
const contenedorTareas = document.querySelector(".lista");
contenedorTareas.addEventListener("click", quitaTarea);
const input = document.querySelector("#input");
document.body.addEventListener("keyup", pulsaBoton);

function crearTarea(tarea, nuevo = false) {
    const miTarea =document.createElement("li");
    if(nuevo) miTarea.classList.add("nuevo");
    miTarea.innerHTML = tarea;
    contenedorTareas.appendChild(miTarea);    
}

function addNuevaTarea(evento) {
    if(input.value != ""){
        const nuevaTarea = input.value;
        tareas.push(nuevaTarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        crearTarea(nuevaTarea, true);
        input.value = "";
        input.focus();
    }
}

function pulsaBoton(evento) {
    if((evento.key == "Enter")){
        addNuevaTarea(evento);
    }
}

function quitaTarea(evento) {
    if(evento.target.tagName == "LI") {
        const tareaAEliminar = evento.target;
        const indice = tareas.findIndex((tarea) => {
            return tareas.includes(tareaAEliminar.textContent);
        });

        tareas.splice(indice, 1);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        tareaAEliminar.classList.add("eliminar");
        setTimeout(() => {
            tareaAEliminar.remove();
        }, 500);
        input.focus();
    }
}

function rellena() {
    contenedorTareas.innerHTML = "";
    tareas.forEach((tarea) =>  crearTarea(tarea));
}


rellena();
input.focus();