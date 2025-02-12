

// Explicación general:

// Este código implementa un sistema interactivo para manejar módulos formativos en una página web. 
// Permite crear, eliminar y modificar módulos mediante interacciones del usuario. Cuando un módulo es tocado, 
// se verifica si debe eliminarse (si se hace clic en el icono de eliminación) o si se debe convertir el texto en un 
// campo de entrada (input) para su edición. El código asegura que al eliminar un módulo no se borre el último, y 
// también permite que, tras editar, el texto vuelva a mostrarse. Las interacciones son controladas por eventos como click, keyup, 
// y focusout, lo que hace la experiencia más dinámica y fluida.


// Crear Módulo formativo
function crearModulo(evento) {
    const hijos = document.querySelector(".modformativos").children; // Seleccionamos todos los hijos de la clase .modformativos
    const ultimoHijo = hijos[hijos.length-1]; // Obtenemos el último hijo de la lista
    const nuevo = ultimoHijo.cloneNode(true); // Clonamos el último hijo (duplicamos su estructura)
    ultimoHijo.after(nuevo); // Insertamos el nuevo módulo justo después del último
}
const creaModulo = document.querySelector("main h2"); // Seleccionamos el elemento h2 dentro del main
creaModulo.addEventListener("click", crearModulo); // Añadimos un evento de clic para crear un nuevo módulo

// Eliminar Módulo formativo
function eliminarModulo(evento) {
    const padre = document.querySelector(".modformativos"); // Seleccionamos el contenedor de los módulos
    const numeroSectionsAntes = padre.querySelectorAll("section").length; // Contamos las secciones antes de la eliminación
    if (numeroSectionsAntes == 1) {  // Protegemos que no se elimine el último módulo formativo
        alert("No puedes borrar el último");
        return;
    }
    const mielemento = evento.target; // Seleccionamos el elemento que disparó el evento
    const misection = mielemento.closest("section"); // Obtenemos el ancestro más cercano que sea una sección
    if (confirm("¿Seguro que quieres borrarlo?")) { // Confirmamos si el usuario quiere eliminar el módulo
        misection.remove(); // Si confirma, eliminamos la sección
        const numeroSectionsDespues = padre.querySelectorAll("section").length; // Contamos las secciones después de la eliminación
        if (numeroSectionsAntes - numeroSectionsDespues == 1) {
            alert("Se ha eliminado correctamente!!"); // Mensaje si la eliminación fue exitosa
        } else {
            alert("No se ha podido eliminar el Módulo Formativo!!"); // Mensaje si hubo un problema con la eliminación
        }
    } else {
        alert("Has cancelado la eliminación!!!"); // Mensaje si se cancela la eliminación
    }
}

// Cambiar de texto a input
function cambiaInput(evento) {
    if ((evento.target.tagName != "INPUT") && (evento.target.childNodes.length == 1)) { // Verificamos que no sea un input y que tenga solo texto
        const padre = evento.target.parentNode; // Obtenemos el nodo padre
        const elementoAntiguo = evento.target; // El elemento original a reemplazar
        const nuevoInput = document.createElement("input"); // Creamos un nuevo input
        nuevoInput.type = "search"; // Definimos el tipo de input como "search"
        nuevoInput.style.border = "2px solid red"; // Añadimos un borde rojo al input
        nuevoInput.name = elementoAntiguo.tagName; // Asignamos el nombre del input al nombre del elemento original
        nuevoInput.value = elementoAntiguo.innerHTML; // Copiamos el contenido de texto al valor del input
        nuevoInput.id = elementoAntiguo.id; // Copiamos el id del elemento original
        nuevoInput.classList = elementoAntiguo.classList; // Copiamos las clases CSS del elemento original
        padre.replaceChild(nuevoInput, elementoAntiguo); // Reemplazamos el texto por el nuevo input
        nuevoInput.focus(); // Focalizamos el input para que el usuario pueda editarlo inmediatamente
    }
}

// Detectar el clic para eliminar o editar
function miraTocado(evento) {
    const mielemento = evento.target; // Obtenemos el elemento tocado
    if ((mielemento.tagName == "svg") || (mielemento.tagName == "path")) { // Si el clic fue sobre un ícono de eliminación
        eliminarModulo(evento); // Llamamos a la función eliminarModulo
    } else {
        cambiaInput(evento); // Si no es el ícono, llamamos a la función cambiaInput para permitir la edición
    }
}

document.querySelector(".modformativos").addEventListener("click", miraTocado); // Añadimos el evento de clic para detectar los toques

// Devolver el input editado a texto
function devuelveInput(evento) {
    const mielemento = evento.target; // Obtenemos el elemento que activó el evento
    if ((mielemento.tagName == "INPUT") && (mielemento.name != "") && (mielemento.value.trim() != "")) { // Si es un input con valor no vacío
        const padre = evento.target.parentNode; // Obtenemos el nodo padre
        const inputAntiguo = evento.target; // Obtenemos el input original
        const nuevoElemento = document.createElement(inputAntiguo.name); // Creamos un nuevo elemento del mismo tipo que el input
        nuevoElemento.innerHTML = inputAntiguo.value; // Copiamos el valor del input al nuevo elemento
        nuevoElemento.id = inputAntiguo.id; // Copiamos el id del input al nuevo elemento
        nuevoElemento.classList = inputAntiguo.classList; // Copiamos las clases del input al nuevo elemento
        padre.replaceChild(nuevoElemento, inputAntiguo); // Reemplazamos el input por el nuevo elemento de texto
    }
}

// Detectar la tecla Enter para salir del input
function miraTecla(evento) {
    if (evento.key == "Enter") { // Si la tecla presionada es "Enter"
        evento.target.blur(); // Perdemos el foco del input (esto provoca que se ejecute el "focusout")
    }
}

document.querySelector(".modformativos").addEventListener("keyup", miraTecla); // Añadimos el evento keyup para detectar la tecla Enter
document.querySelector(".modformativos").addEventListener("focusout", devuelveInput); // Añadimos el evento focusout para ejecutar la función devuelveInput al perder el foco
