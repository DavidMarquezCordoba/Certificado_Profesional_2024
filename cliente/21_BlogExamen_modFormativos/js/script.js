// CARGAMOS EL BLOG DESDE EL LOCALSTORAGE

const entradas = JSON.parse(localStorage.getItem("entradas")) || [
    {titulo: "mi título1", texto:"mi texto1", fecha: "mi fecha1"},
    {titulo: "mi título2", texto:"mi texto2", fecha: "mi fecha2"},
    {titulo: "mi título3", texto:"mi texto3", fecha: "mi fecha3"},
    {titulo: "mi título4", texto:"mi texto4", fecha: "mi fecha4"}
];


// CONSTANTES Y VARIABLES GLOBALES

const botonNuevo = document.querySelector("#boton-nuevo");
const nuevaEntrada = document.querySelector("#nueva-entrada");
const contenedorEntradas = document.querySelector("main");
botonNuevo.addEventListener("click", () => {
    nuevaEntrada.showModal();
});


// Función crear entradas en el DOM
function crearEntrada(entrada, nuevo = false) {
    const miEntrada = document.createElement("article");
    const titulo = document.createElement("h3");
    titulo.textContent = entrada.titulo;
    const texto = document.createElement("code");
    texto.textContent = entrada.texto;
    const fecha = document.createElement("time");
    fecha.dateTime = entrada.fecha;
    fecha.textContent = entrada.fecha;
    miEntrada.appendChild(titulo);
    miEntrada.appendChild(texto);
    miEntrada.appendChild(fecha);
    contenedorEntradas.prepend(miEntrada);
}

// Este evento ocurre cuando el DOM está creado
document.addEventListener("DOMContentLoaded", () => {
    entradas.forEach(entrada => crearEntrada(entrada)); //Va recorriendo el array entradas y en cada entrada llamará a la función para cargar la propia entrada
});





















