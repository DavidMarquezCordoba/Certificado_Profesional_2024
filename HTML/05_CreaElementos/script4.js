let divPrincipal = document.querySelector("#div-principal"); //Objeto guía, que usaremos para introducir las nuevas "p"
// Vamos a crear un texto entre el bloque 2 y el bloque 3
// OPCIÓN 1
//Creamos obj guia (usaremos el bloque2)
let guia = document.querySelector("#bloque2");
let textCaja13 = "<div class=\"caja13\"> Este texto está introducido por TEXTO entre el blq2 y blq3</div>";
guia.insertAdjacentHTML("afterend", textCaja13);


// OPCIÓN 2
//Ahora lo vamos a hacer por elementos
let nuevaCaja13 = document.createElement("div");
nuevaCaja13.innerHTML = "Este texto está introducido por ELEMENTO entre el blq2 y blq3";
nuevaCaja13.classList.add("caja13");
guia.after(nuevaCaja13);


//El mismo que el script 3 pero SIN fragmentos

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

// Creamos una caja nueva que introduciremos dentro de la caja 15
let nuevaCaja21 = document.createElement("div");
nuevaCaja21.textContent = "caja 21 sin fragmento dentro de caja 19";
nuevaCaja21.classList.add("agua");

// Ahora introducimos la caja 21 dentro de la 19
nuevaCaja19.appendChild(nuevaCaja21);

miElemento.appendChild(nuevaCaja18);
miElemento.appendChild(nuevaCaja19);
miElemento.appendChild(nuevaCaja20);

document.body.appendChild(miElemento);


/////////////////////////////////
// DUPLICAR ELEMENTOS DEL DOM //
///////////////////////////////

// Vamos a copiar el bloque 2

// True = copia contenido
// False (por defecto) = no copia contenido

// Aquí podemos ver el comportamiento de true o false
// let cajaClonada = guia.cloneNode(); //False
let cajaClonada = guia.cloneNode(true); //False

cajaClonada.id = "caja-clonada";

// Insertamos
document.body.appendChild(cajaClonada);

///////////////////////////////////
// REEMPLAZAR ELEMENTOS DEL DOM //
/////////////////////////////////

// Diapositiva
// let elementoPadre = document.querySelector("#mielepadre");
// let elementoACambiar = document.querySelector("#mieleAntiguo");

// let elementoNuevo = document.createElement("div");

// elementoNuevo.innerHTML = "Este es un elemento creado";
// elementoNuevo.id ="miNuevoElemento";
// elementoPadre.replaceChild(elementoNuevo, elementoACambiar);

let reemplazador = document.createElement("input");
reemplazador.id = "reemplazador";
reemplazador.placeholder = "estoy reemplazando a divPrincipal";
reemplazador.style.width = "50%";
document.body.replaceChild(reemplazador, divPrincipal);

/////////////////////////////////
// ELIMINAR ELEMENTOS DEL DOM //
///////////////////////////////

// Explicación DIAPOSITIVA

// Eliminar elementos del dom usando remove

// let elementoBorrar = document.querySelector("#miele");
// elementoBorrar.remove();

// Eliminar elementos del dom usando removechild

// let padreElemBorrar = document.querySelector("#padre");
// let elementoBorrar = padreElemBorrar.querySelector("div");

// padreElemBorrar.removeChild(elementoBorrar);

///////////////////////////////////////////////////////////


function quitarElemento(evento){
   evento.target.remove();
}

// nuevaCaja18.addEventListener("click", quitarElemento);

let miBloque1 = document.querySelector("#bloque1");

function cambiaInput (evento){
   
   let elementoPadre = document.querySelector("#caja-clonada")
   let elementoAntiguo = evento.target;
   let nuevoInput = document.createElement("input");

   nuevoInput.id = "nuevo-input";
   nuevoInput.value = elementoAntiguo.textContent;

   elementoPadre.replaceChild(nuevoInput, elementoAntiguo);
}

cajaClonada.addEventListener("click", cambiaInput);