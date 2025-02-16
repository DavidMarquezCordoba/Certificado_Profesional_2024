// cargamos el blog desde el localStorage
const entradas = JSON.parse(localStorage.getItem("entradas")) || [
    {nombre: "Jose Luis",comentario: "Gran variedad de cursos, alta cualificación profesional, trato excelente con los alumnos. 100% Recomendable."}
    ,{nombre: "Patricia",comentario: "Encantada con el curso que realicé y con el trato por parte de todos."}
];

// Ctes y variables
const botonNuevo = document.querySelector("#boton-nuevo"); //Botón +
const contenedorComentarios = document.querySelector(".arti-experiencias"); // Obtenemos del DOM el contenedor de comentarios

botonNuevo.addEventListener("click", ()=>{
    let comentario = prompt("Pon tu nombre, después un punto \".\" y a continuación el comentario que quieras");

    const comentarioArray = comentario.split(".");
    const objMiComentario = {
        nombre: comentarioArray[0],
        comentario: comentarioArray[1]
    }

    entradas.push(objMiComentario);
    localStorage.setItem("entradas", JSON.stringify(entradas));
    crearComentario(objMiComentario);
})

function crearComentario(comentario) {
    
    const crearArticulo = document.createElement("article");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerHTML = comentario.nombre;
    p.innerHTML = comentario.comentario;

    crearArticulo.appendChild(h3);
    crearArticulo.appendChild(p);

    contenedorComentarios.appendChild(crearArticulo);
}

entradas.forEach(entrada => {
    crearComentario(entrada);
});