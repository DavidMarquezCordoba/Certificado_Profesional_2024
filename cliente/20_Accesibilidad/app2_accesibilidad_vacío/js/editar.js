

// Crear Módulo formativo
function crearModulo(evento) {
    const hijos = document.querySelector(".modformativos").children;
    const ultimoHijo = hijos[hijos.length-1];
    const nuevo = ultimoHijo.cloneNode(true);
    ultimoHijo.after(nuevo);
}
const creaModulo = document.querySelector("main h2");
creaModulo.addEventListener("click", crearModulo);

// Eliminar Módulo formativo
function eliminarModulo(evento) {
    const padre = document.querySelector(".modformativos");
    const numeroSectionsAntes = padre.querySelectorAll("section").length;
    if(numeroSectionsAntes == 1) {  // con esto protejemos que no se borre el último módulo formativo
        alert("No puedes borrar el último");
        return;
    }
    const mielemento = evento.target;
    const misection = mielemento.closest("section"); // Esto nos dá el acestro más cercano que sea un section
    if(confirm("¿Seguro que quieres borrarlo?")) {
        misection.remove();
        const numeroSectionsDespues = padre.querySelectorAll("section").length;
        if(numeroSectionsAntes-numeroSectionsDespues == 1){
            alert("Se ha eliminado correctamente!!");
        } else {
            alert("No se ha podido eliminar el Módulo Formativo!!");
        }
    } else {
        alert("Has cancelado la eliminación!!!");
    }
}


function cambiaInput(evento) {
    // console.log(evento.target.childNodes.length);
    if((evento.target.tagName != "INPUT")&&(evento.target.childNodes.length == 1)){
        const padre = evento.target.parentNode;
        const elementoAntiguo = evento.target;
        const nuevoInput = document.createElement("input");
        nuevoInput.type = "search";
        nuevoInput.style.border = "2px solid red";
        nuevoInput.name = elementoAntiguo.tagName;
        nuevoInput.value = elementoAntiguo.innerHTML;
        nuevoInput.id = elementoAntiguo.id;
        nuevoInput.classList = elementoAntiguo.classList;
        padre.replaceChild(nuevoInput, elementoAntiguo);
        nuevoInput.focus();
    }
}


function miraTocado(evento) {
    const mielemento = evento.target;
    // console.log(mielemento.tagName);
    if((mielemento.tagName == "svg")||(mielemento.tagName == "path")){
        eliminarModulo(evento);
    } else {
        cambiaInput(evento);
    }
}

document.querySelector(".modformativos").addEventListener("click", miraTocado);

function devuelveInput(evento){
    const mielemento = evento.target;
    if((mielemento.tagName == "INPUT")&&(mielemento.name != "")&&(mielemento.value.trim() != "")){
        const padre = evento.target.parentNode;
        const inputAntiguo = evento.target;
        const nuevoElemento = document.createElement(inputAntiguo.name);
        // Después de crear el elemento nuevo, añadimos su contenido y otros atributos deshaciendo lo de la función cambiaInput
        nuevoElemento.innerHTML = inputAntiguo.value;
        nuevoElemento.id = inputAntiguo.id;
        nuevoElemento.classList = inputAntiguo.classList;
        padre.replaceChild(nuevoElemento, inputAntiguo);
    }
}

function miraTecla(evento) {
    // console.log(evento.key);
    if(evento.key == "Enter"){
        evento.target.blur();
    }
}

document.querySelector(".modformativos").addEventListener("keyup", miraTecla);
document.querySelector(".modformativos").addEventListener("focusout", devuelveInput);
