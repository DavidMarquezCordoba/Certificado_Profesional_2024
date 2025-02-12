

// Este código cubre una gran variedad de operaciones DOM, como crear, insertar, clonar, reemplazar y eliminar elementos dinámicamente. 
// Usa métodos como appendChild, insertAdjacentHTML, cloneNode, y replaceChild para manipular el DOM de forma eficiente. También incluye eventos 
// que gestionan el cambio entre elementos de texto y campos de entrada (input), lo cual es útil para crear interfaces interactivas.


// Crear elemento
let nuevaCaja = document.createElement("p");  // Crea un nuevo elemento HTML de tipo <p> (párrafo)
nuevaCaja.innerHTML = "Este es un nuevo parrafo al final del body";  // Inserta el texto dentro del nuevo <p>
nuevaCaja.style.backgroundColor = "yellow";  // Establece el color de fondo del nuevo párrafo a amarillo
document.body.appendChild(nuevaCaja);  // Añade el nuevo párrafo como hijo al final del <body>

// Insertar elemento en un sitio concreto
let divPrincipal = document.querySelector("#div-principal");  // Selecciona el elemento con id "div-principal"
let nuevaCaja2 = document.createElement("p");  // Crea un nuevo elemento <p>
nuevaCaja2.innerHTML = "Este es un nuevo parrafo creado al final del div-principal";  // Establece el texto del nuevo párrafo
nuevaCaja2.style.backgroundColor = "green";  // Establece el color de fondo del nuevo párrafo a verde
divPrincipal.appendChild(nuevaCaja2);  // Añade el nuevo párrafo al final del div con id "div-principal"

// Insertar elemento antes del div-principal
let nuevaCaja3 = document.createElement("p");  // Crea otro nuevo párrafo
nuevaCaja3.innerHTML = "Este es un nuevo parrafo creado antes del div-principal";  // Establece el texto del párrafo
nuevaCaja3.style.backgroundColor = "beige";  // Establece el color de fondo a beige
divPrincipal.before(nuevaCaja3);  // Inserta el nuevo párrafo antes del div con id "div-principal"

// Insertar elemento después del div-principal
let nuevaCaja4 = document.createElement("p");  // Crea otro nuevo párrafo
nuevaCaja4.innerHTML = "Este es un nuevo parrafo creado después del div-principal";  // Establece el texto del párrafo
nuevaCaja4.style.backgroundColor = "beige";  // Establece el color de fondo a beige
divPrincipal.after(nuevaCaja4);  // Inserta el nuevo párrafo después del div con id "div-principal"

// Insertar elemento dentro del div-principal y antes que todos sus hijos
let nuevaCaja5 = document.createElement("p");  // Crea otro nuevo párrafo
nuevaCaja5.innerHTML = "Este es un nuevo parrafo dentro del div-principal y antes de sus hijos";  // Establece el texto
nuevaCaja5.style.backgroundColor = "beige";  // Establece el color de fondo a beige
divPrincipal.prepend(nuevaCaja5);  // Inserta el nuevo párrafo al principio dentro del div-principal

// Insertar elemento dentro del div-principal y después de todos sus hijos
let nuevaCaja6 = document.createElement("p");  // Crea otro nuevo párrafo
nuevaCaja6.innerHTML = "Este es un nuevo parrafo dentro del div-principal y después de sus hijos";  // Establece el texto
nuevaCaja6.style.backgroundColor = "beige";  // Establece el color de fondo a beige
divPrincipal.append(nuevaCaja6);  // Inserta el nuevo párrafo al final dentro del div-principal

// Insertar 2 elementos dentro del div-principal y después de todos sus hijos
let nuevaCaja7 = document.createElement("p");  // Crea el primer nuevo párrafo
let nuevaCaja8 = document.createElement("p");  // Crea el segundo nuevo párrafo
nuevaCaja7.innerHTML = "Este es un nuevo parrafo1 dentro del div-principal y después de sus hijos";  // Establece el texto
nuevaCaja8.innerHTML = "Este es un nuevo parrafo2 dentro del div-principal y después de sus hijos";  // Establece el texto
nuevaCaja7.style.backgroundColor = "olive";  // Establece el color de fondo a oliva
nuevaCaja8.style.backgroundColor = "red";  // Establece el color de fondo a rojo
divPrincipal.append(nuevaCaja7, nuevaCaja8);  // Inserta ambos párrafos al final del div-principal

// Insertar elemento antes del div-principal por texto
let textCaja9 = '<div class="por-texto">Este es un nuevo div antes del div-principal y creado por texto</div>';  // Crea un string con HTML
divPrincipal.insertAdjacentHTML("beforebegin", textCaja9);  // Inserta el HTML creado antes del div-principal

// Insertar elemento después del div-principal por texto
let textCaja10 = '<div class="por-texto">Este es un nuevo div después del div-principal y creado por texto</div>';  // Crea un string con HTML
divPrincipal.insertAdjacentHTML("afterend", textCaja10);  // Inserta el HTML creado después del div-principal

// Insertar elemento dentro del div-principal antes de sus hijos por texto
let textCaja11 = '<div class="por-texto">Este es un nuevo div dentro del div-principal antes de sus hijos por texto</div>';  // Crea un string con HTML
divPrincipal.insertAdjacentHTML("afterbegin", textCaja11);  // Inserta el HTML creado al principio del div-principal

// Insertar elemento dentro del div-principal después de sus hijos por texto
let textCaja12 = '<div class="por-texto">Este es un nuevo div dentro del div-principal después de sus hijos por texto</div>';  // Crea un string con HTML
divPrincipal.insertAdjacentHTML("beforeend", textCaja12);  // Inserta el HTML creado al final del div-principal

// Insertar elemento entre bloque2 y bloque3 por texto
let textCaja13 = '<div class="caja13">Este es un nuevo div entre bloque2 y bloque3 por texto</div>';  // Crea un string con HTML
let miBloque2 = document.querySelector("#bloque2");  // Selecciona el bloque2 por su id
miBloque2.insertAdjacentHTML("afterend", textCaja13);  // Inserta el HTML creado después de bloque2

// Insertar elemento entre bloque2 y bloque3
let nuevaCaja13 = document.createElement("div");  // Crea un nuevo div
nuevaCaja13.innerHTML = "Este es un nuevo div entre bloque2 y bloque3";  // Establece el texto del nuevo div
nuevaCaja13.classList.add("caja13");  // Añade una clase CSS al nuevo div
miBloque2.after(nuevaCaja13);  // Inserta el nuevo div después de bloque2

// Insertar un fragmento
let miFragmento = document.createDocumentFragment();  // Crea un fragmento de documento, útil para optimizar las inserciones múltiples
let nuevaCaja14 = document.createElement("div");  // Crea un nuevo div
let nuevaCaja15 = document.createElement("div");  // Crea otro nuevo div
let nuevaCaja16 = document.createElement("div");  // Crea otro nuevo div
nuevaCaja14.textContent = "caja14 por fragmento";  // Establece el texto del nuevo div
nuevaCaja15.textContent = "caja15 por fragmento";  // Establece el texto del nuevo div
nuevaCaja16.textContent = "caja16 por fragmento";  // Establece el texto del nuevo div
nuevaCaja14.classList.add("rosa");  // Añade una clase CSS al nuevo div
nuevaCaja15.classList.add("violeta");  // Añade una clase CSS al nuevo div
nuevaCaja16.classList.add("gris");  // Añade una clase CSS al nuevo div

let nuevaCaja17 = document.createElement("div");  // Crea un nuevo div dentro de la caja15
nuevaCaja17.textContent = "caja17 por fragmento dentro de caja15";  // Establece el texto del nuevo div
nuevaCaja17.classList.add("agua");  // Añade una clase CSS al nuevo div
nuevaCaja15.appendChild(nuevaCaja17);  // Añade el nuevo div dentro de caja15

miFragmento.appendChild(nuevaCaja14);  // Añade la caja14 al fragmento
miFragmento.appendChild(nuevaCaja15);  // Añade la caja15 al fragmento
document.body.appendChild(miFragmento);  // Añade el fragmento (con caja14 y caja15) al body
miFragmento.appendChild(nuevaCaja16);  // Añade la caja16 al fragmento
document.body.appendChild(miFragmento);  // Añade el fragmento (con caja16) al body

// Insertar sin fragmento
let miElemento = document.createElement("div");  // Crea un nuevo div
let nuevaCaja18 = document.createElement("div");  // Crea un nuevo div
let nuevaCaja19 = document.createElement("div");  // Crea otro nuevo div
let nuevaCaja20 = document.createElement("div");  // Crea otro nuevo div
nuevaCaja18.textContent = "caja18 sin fragmento";  // Establece el texto del nuevo div
nuevaCaja19.textContent = "caja19 sin fragmento";  // Establece el texto del nuevo div
nuevaCaja20.textContent = "caja20 sin fragmento";  // Establece el texto del nuevo div
nuevaCaja18.classList.add("rosa");  // Añade una clase CSS al nuevo div
nuevaCaja19.classList.add("violeta");  // Añade una clase CSS al nuevo div
nuevaCaja20.classList.add("gris");  // Añade una clase CSS al nuevo div

let nuevaCaja21 = document.createElement("div");  // Crea un nuevo div dentro de la caja19
nuevaCaja21.textContent = "caja21 sin fragmento dentro de caja19";  // Establece el texto del nuevo div
nuevaCaja21.classList.add("agua");  // Añade una clase CSS al nuevo div
nuevaCaja19.appendChild(nuevaCaja21);  // Añade caja21 dentro de caja19

miElemento.appendChild(nuevaCaja18);  // Añade caja18 al contenedor
miElemento.appendChild(nuevaCaja19);  // Añade caja19 al contenedor
document.body.appendChild(miElemento);  // Añade el contenedor al body
miElemento.appendChild(nuevaCaja20);  // Añade caja20 al contenedor

// Duplicar elemento bloque2
let deep = true;  // Si es true, copia el contenido y los hijos también
let cajaClonada = divPrincipal.cloneNode(deep);  // Clona div-principal, incluyendo su contenido y elementos hijos
cajaClonada.id = "caja-clonada";  // Establece un id a la caja clonada
document.body.appendChild(cajaClonada);  // Añade la caja clonada al body

// Reemplazar elemento por uno nuevo
let reemplazador = document.createElement("input");  // Crea un nuevo elemento input
reemplazador.id = "reemplazador";  // Establece un id al input
reemplazador.placeholder = "estoy reemplazando a divPrincipal";  // Establece un texto en el campo de placeholder
document.body.replaceChild(reemplazador, divPrincipal);  // Reemplaza divPrincipal con el input creado

// Eliminar elementos
function quitaElemento(evento) {  // Función que elimina el elemento que fue clickeado
    evento.target.remove();  // Elimina el objetivo del evento
}
//nuevaCaja15.addEventListener("click", quitaElemento);  // Aquí se podría activar la función al hacer click

// Reemplazar elemento por un input
let miBloque1 = document.querySelector("#bloque1");  // Selecciona el bloque1

// Función para reemplazar el contenido con un input cuando se hace clic
function cambiaInput(evento) {
    if((evento.target.tagName != "INPUT")&&(evento.target.childNodes.length == 1)) {  // Si el elemento no es un input
        let miElementoPadre = evento.target.parentNode;  // Obtiene el nodo padre del evento
        let elementoAntiguo = evento.target;  // Guarda el nodo objetivo
        let nuevoInput = document.createElement("input");  // Crea un nuevo input
        nuevoInput.id = elementoAntiguo.id;  // Asigna el id del antiguo elemento
        nuevoInput.name = evento.target.tagName;  // Asigna el nombre del antiguo elemento
        nuevoInput.value = elementoAntiguo.textContent;  // Asigna el valor con el texto del antiguo elemento
        nuevoInput.classList = elementoAntiguo.classList;  // Asigna las clases del antiguo elemento
        miElementoPadre.replaceChild(nuevoInput, elementoAntiguo);  // Reemplaza el antiguo elemento con el nuevo input
        nuevoInput.focus();  // Da foco al nuevo input
    }
}
document.body.addEventListener("click", cambiaInput);  // Llama a la función al hacer click

// Vuelve a convertir el INPUT en su elemento original cuando se pierde el foco
function devuelveInput(evento) {
    if((evento.target.tagName == "INPUT")&&(evento.target.name != "")) {  // Si el elemento es un input y tiene un nombre
        let miElementoPadre = evento.target.parentNode;  // Obtiene el nodo padre
        let elementoAntiguo = evento.target;  // Guarda el nodo objetivo
        let nuevoElemento = document.createElement(evento.target.name);  // Crea un nuevo elemento
        nuevoElemento.textContent = elementoAntiguo.value;  // Establece el texto del nuevo elemento con el valor del input
        nuevoElemento.id = elementoAntiguo.id;  // Asigna el id del input
        nuevoElemento.classList = elementoAntiguo.classList;  // Asigna las clases del input
        miElementoPadre.replaceChild(nuevoElemento, elementoAntiguo);  // Reemplaza el input con el nuevo elemento
    }
}

// Función para eliminar el foco del input cuando se presiona la tecla "Enter"
function miraTecla(evento) {
    if(evento.key == "Enter") {  // Si la tecla presionada es "Enter"
        evento.target.blur();  // Elimina el foco del input
    }
}

document.addEventListener("focusout", devuelveInput);  // Llama a la función cuando el foco sale del input
document.addEventListener("keyup", miraTecla);  // Llama a la función cuando se presiona una tecla

