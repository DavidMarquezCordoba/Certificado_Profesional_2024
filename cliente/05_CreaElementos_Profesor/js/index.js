// crear elemento
let nuevaCaja = document.createElement("p"); 
nuevaCaja.innerHTML = "Este es un nuevo parrafo al final del body";
nuevaCaja.style.backgroundColor = "yellow";
document.body.appendChild(nuevaCaja);

// Insertar elemento en un sitio concreto
let divPrincipal = document.querySelector("#div-principal"); // objeto guia
let nuevaCaja2 = document.createElement("p");
nuevaCaja2.innerHTML = "Este es un nuevo parrafo creado al final del div-principal";
nuevaCaja2.style.backgroundColor = "green";
divPrincipal.appendChild(nuevaCaja2);

// Insertar elemento antes del div-principal
let nuevaCaja3 = document.createElement("p");
nuevaCaja3.innerHTML = "Este es un nuevo parrafo creado antes del div-principal";
nuevaCaja3.style.backgroundColor = "beige";
divPrincipal.before(nuevaCaja3);

// Insertar elemento después del div-principal
let nuevaCaja4 = document.createElement("p");
nuevaCaja4.innerHTML = "Este es un nuevo parrafo creado después del div-principal";
nuevaCaja4.style.backgroundColor = "beige";
divPrincipal.after(nuevaCaja4);

// Insertar elemento dentro del div-principal y antes que todos sus hijos
let nuevaCaja5 = document.createElement("p");
nuevaCaja5.innerHTML = "Este es un nuevo parrafo dentro del div-principal y antes de sus hijos";
nuevaCaja5.style.backgroundColor = "beige";
divPrincipal.prepend(nuevaCaja5);

// Insertar elemento dentro del div-principal y después de todos sus hijos
let nuevaCaja6 = document.createElement("p");
nuevaCaja6.innerHTML = "Este es un nuevo parrafo dentro del div-principal y después de sus hijos";
nuevaCaja6.style.backgroundColor = "beige";
divPrincipal.append(nuevaCaja6);

// Insertar 2 elementos dentro del div-principal y después de todos sus hijos
let nuevaCaja7 = document.createElement("p");
let nuevaCaja8 = document.createElement("p");
nuevaCaja7.innerHTML = "Este es un nuevo parrafo1 dentro del div-principal y después de sus hijos";
nuevaCaja8.innerHTML = "Este es un nuevo parrafo2 dentro del div-principal y después de sus hijos";
nuevaCaja7.style.backgroundColor = "olive";
nuevaCaja8.style.backgroundColor = "red";
divPrincipal.append(nuevaCaja7,nuevaCaja8);

// Insertar elemento antes del div-principal por texto
let textCaja9 = '<div class="por-texto">Este es un nuevo div antes del div-principal y creado por texto</div>';
divPrincipal.insertAdjacentHTML("beforebegin",textCaja9);
// Insertar elemento después del div-principal por texto
let textCaja10 = '<div class="por-texto">Este es un nuevo div después del div-principal y creado por texto</div>';
divPrincipal.insertAdjacentHTML("afterend",textCaja10);
// Insertar elemento dentro del div-principal antes de sus hijos por texto
let textCaja11 = '<div class="por-texto">Este es un nuevo div dentro del div-principal antes de sus hijos por texto</div>';
divPrincipal.insertAdjacentHTML("afterbegin",textCaja11);
// Insertar elemento dentro del div-principal después de sus hijos por texto
let textCaja12 = '<div class="por-texto">Este es un nuevo div dentro del div-principal después de sus hijos por texto</div>';
divPrincipal.insertAdjacentHTML("beforeend",textCaja12);

// Insertar elemento entre bloque2 y bloque3 por texto
let textCaja13 = '<div class="caja13">Este es un nuevo div entre bloque2 y bloque3 por texto</div>';
let miBloque2 = document.querySelector("#bloque2");
miBloque2.insertAdjacentHTML("afterend",textCaja13);

// Insertar elemento entre bloque2 y bloque3
let nuevaCaja13 = document.createElement("div");
nuevaCaja13.innerHTML = "Este es un nuevo div entre bloque2 y bloque3";
nuevaCaja13.classList.add("caja13");
miBloque2.after(nuevaCaja13);

// Insertar un fragmento
let miFragmento = document.createDocumentFragment();
let nuevaCaja14 = document.createElement("div");
let nuevaCaja15 = document.createElement("div");
let nuevaCaja16 = document.createElement("div");
nuevaCaja14.textContent = "caja14 por fragmento";
nuevaCaja15.textContent = "caja15 por fragmento";
nuevaCaja16.textContent = "caja16 por fragmento";
nuevaCaja14.classList.add("rosa");
nuevaCaja15.classList.add("violeta");
nuevaCaja16.classList.add("gris");

let nuevaCaja17 = document.createElement("div");
nuevaCaja17.textContent = "caja17 por fragmento dentro de caja15";
nuevaCaja17.classList.add("agua");
nuevaCaja15.appendChild(nuevaCaja17);


miFragmento.appendChild(nuevaCaja14);
miFragmento.appendChild(nuevaCaja15);
document.body.appendChild(miFragmento);
miFragmento.appendChild(nuevaCaja16);
document.body.appendChild(miFragmento);


// Insertar sin fragmento
let miElemento = document.createElement("div");
let nuevaCaja18 = document.createElement("div");
let nuevaCaja19 = document.createElement("div");
let nuevaCaja20 = document.createElement("div");
nuevaCaja18.textContent = "caja18 sin fragmento";
nuevaCaja19.textContent = "caja19 sin fragmento";
nuevaCaja20.textContent = "caja20 sin fragmento";
nuevaCaja18.classList.add("rosa");
nuevaCaja19.classList.add("violeta");
nuevaCaja20.classList.add("gris");

let nuevaCaja21 = document.createElement("div");
nuevaCaja21.textContent = "caja21 sin fragmento dentro de caja19";
nuevaCaja21.classList.add("agua");
nuevaCaja19.appendChild(nuevaCaja21);

miElemento.appendChild(nuevaCaja18);
miElemento.appendChild(nuevaCaja19);
document.body.appendChild(miElemento);
miElemento.appendChild(nuevaCaja20);


// duplicar elemento bloque2
let deep = true; // true copia contenido y false no copia contenido
let cajaClonada = divPrincipal.cloneNode(deep); 
cajaClonada.id = "caja-clonada";
document.body.appendChild(cajaClonada);

//reemplazar elemento por uno nuevo
let reemplazador = document.createElement("input");
reemplazador.id = "reemplazador";
reemplazador.placeholder = "estoy reemplazando a divPrincipal";
document.body.replaceChild(reemplazador, divPrincipal);

// Eliminar elementos
function quitaElemento(evento) {
    evento.target.remove();
}
//nuevaCaja15.addEventListener("click", quitaElemento);

//reemplazar elemento por un input
let miBloque1 = document.querySelector("#bloque1");
function cambiaInput(evento) {
    if((evento.target.tagName != "INPUT")&&(evento.target.childNodes.length == 1)) {
        let miElementoPadre = evento.target.parentNode;
        let elementoAntiguo = evento.target;
        let nuevoInput = document.createElement("input");
        nuevoInput.id = elementoAntiguo.id;
        nuevoInput.name = evento.target.tagName;
        nuevoInput.value = elementoAntiguo.textContent;
        nuevoInput.classList = elementoAntiguo.classList;
        miElementoPadre.replaceChild(nuevoInput, elementoAntiguo);
        nuevoInput.focus();
    }
}
document.body.addEventListener("click", cambiaInput);


function devuelveInput(evento) {   //Vuelve a convertir el INPUT a el elemento que era antes pero con el texto modificado
    if((evento.target.tagName == "INPUT")&&(evento.target.name != "")) { //Aquí miramos que el elemento sea un INPUT y que su atributo "name" no esté vacio.
        let miElementoPadre = evento.target.parentNode;
        let elementoAntiguo = evento.target;
        let nuevoElemento = document.createElement(evento.target.name);
        nuevoElemento.textContent = elementoAntiguo.value;
        nuevoElemento.id = elementoAntiguo.id;
        nuevoElemento.classList = elementoAntiguo.classList;
        miElementoPadre.replaceChild(nuevoElemento, elementoAntiguo);
         
    }
}

function miraTecla(evento) {   // Si la tecla pulsada es "Enter" se quita el focus del INPUT
    if(evento.key == "Enter") {
        evento.target.blur(); // Método para quitar el focus de un elemento, en este caso del que estas cuando pulsas Enter
    }
}

document.addEventListener("focusout", devuelveInput); //Llamas a "devuelveInput" cuando quitas el focus de un elemento
document.addEventListener("keyup", miraTecla); //Llamas a "miraTecla" cuando pulsas cualquier tecla





