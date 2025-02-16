let padre = document.querySelector(".tareas");
let botonAgregar = document.querySelector("#boton-agregar");

// 1º LocalStorage
let entradas = JSON.parse(localStorage.getItem("entradas")) || [];


