let contenedorPadre = document.querySelector(".lista");
let botonAgregar = document.querySelector("#boton-agregar");

// LOCALSTORAGE
let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

tareas.forEach((entrada) => {
    agregarTarea(entrada, false);
});

function agregarTarea(texto, nuevo = false) {
    let li = document.createElement("li");
    li.innerHTML = texto;
    contenedorPadre.appendChild(li);

    if (nuevo) {
        li.classList.add("nuevo");
    }
}

function agregarEntrada() {

    let tareaAgregar = document.querySelector("#agregar").value;
    
    console.log(tareaAgregar);

    tareas.push(tareaAgregar);
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function eliminaTarea(e) {

    console.log(e.target.tagName);
    if (e.target.tagName == "LI") {

        
        const miEntrada = e.target.closest("li");

        miEntrada.remove();
        
        const indice = tareas.findIndex((tarea) => {
            return tarea.includes(miEntrada.textContent);
        });

        
        if (indice !== -1) {
            tareas.splice(indice, 1);
            localStorage.setItem("tareas", JSON.stringify(tareas));
        }

    }
}

function enter(e) {
    if (e.key === "Enter") {
        agregarEntrada();
    }
}

// Añadimos eventos
contenedorPadre.addEventListener("click", eliminaTarea);
botonAgregar.addEventListener("click", agregarEntrada);
document.querySelector("#agregar").addEventListener("keydown", enter);



