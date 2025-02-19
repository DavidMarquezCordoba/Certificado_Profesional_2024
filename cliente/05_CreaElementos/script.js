// Creamos elemento
let nuevaCaja = document.createElement("p");

// Le añadimos info a la p
nuevaCaja.innerHTML = "Este es un nuevo párrafo al final del body {appendChild}";
// Le damos un estilo con un background color 
nuevaCaja.style.backgroundColor = "yellow";
// Le damos una id
nuevaCaja.id="miNuevoParrafo";

// Lo insertamos en el body, al final
document.body.appendChild(nuevaCaja);
/////////////////////////////////////////////

// Insertar elemento en un sitio concreto ((Al final del contenedor))
let divPrincipal = document.querySelector("#div-principal"); //Objeto guía, que usaremos para introducir las nuevas "p"
let nuevaCaja2 = document.createElement("p");
nuevaCaja2.innerHTML = "Este es un nuevo párrafo al final del div principal {appendChild dentro de la caja}";
nuevaCaja2.style.backgroundColor = "green";

// Lo insertamos en el div principal (Dentro del mismo elemento, pero al final)
divPrincipal.appendChild(nuevaCaja2);

///////////////////////////////////

// Lo vamos a insertar  antes del div-principal
let nuevaCaja3 = document.createElement("p");
nuevaCaja3.innerHTML="Esto está insertado entre el h1 y el div principal {before}";
nuevaCaja3.style.backgroundColor = "beige";

divPrincipal.before(nuevaCaja3);

////////////////////////////////////////////////

// Lo vamos a insertar después del div principal
let nuevaCaja4 = document.createElement("p");
nuevaCaja4.innerHTML = "Esta caja va después del div principal {after}";
nuevaCaja4.style.backgroundColor = "gray";

divPrincipal.after(nuevaCaja4);

///////////////////////
// Prepend
let nuevaCaja5 = document.createElement("p");
nuevaCaja5.innerHTML = "Esta caja va al principio de la caja principal {prepend}";
nuevaCaja5.style.backgroundColor = "beige";

divPrincipal.prepend(nuevaCaja5);

//////////////////////
// Append - al final de todos sus hijos
let nuevaCaja6 = document.createElement("p");
nuevaCaja6.innerHTML = "Esta caja va al final de la caja principal, dentro {append}";
nuevaCaja6.style.backgroundColor = "beige";

divPrincipal.append(nuevaCaja6);


// Insertar después de todos sus hijos, 2 elementos
let nuevaCaja7 = document.createElement("p");
let nuevaCaja8 = document.createElement("p");
nuevaCaja7.innerHTML = "Nuevo parrafo dentro de div principal y al final de sus hijos {append}";
nuevaCaja8.innerHTML = "Nuevo parrafo dentro de div principal y al final de sus hijos, dentro {append}";
nuevaCaja7.style.backgroundColor = "olive";
nuevaCaja8.style.backgroundColor = "red";

divPrincipal.append(nuevaCaja7, nuevaCaja8);


// CREAR, EDITAR, BORRAR ELEMENTOS
let textCaja9 = "<div class=\"por-texto\">Esto es un nuevo div antes del div principal y creado por texto {insertAdjacentHTML beforebegin}</div>";
divPrincipal.insertAdjacentHTML("beforebegin",textCaja9);


let textCaja10 = "<div class=\"por-texto\">Esto es un nuevo div después del div principal y creado por texto {insertAdjacentHTML afterend}</div>";
divPrincipal.insertAdjacentHTML("afterend",textCaja10);

let textCaja11 = "<div class=\"por-texto\">Esto es un nuevo div dentro del div principal, antes de los hijos y creado por texto {insertAdjacentHTML afterbegin}</div>";
divPrincipal.insertAdjacentHTML("afterbegin",textCaja11);

let textCaja12 = "<div class=\"por-texto\">Esto es un nuevo div dentro del div principal, después de los hijos y creado por texto {insertAdjacentHTML beforeend}</div>";
divPrincipal.insertAdjacentHTML("beforeend",textCaja12);

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