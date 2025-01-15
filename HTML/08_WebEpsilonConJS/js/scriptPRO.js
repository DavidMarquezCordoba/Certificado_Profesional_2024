// Creamos constante verdadera para clonar
const CLONAR_CONTENIDO = true; //Si fuera false no copiaría el contenido




///////////////////////////// EMPEZAMOS /////////////////////////////////

// Seleccionamos el div principal donde están todos los section para introducir los objetos dentro
const contenedor = document.querySelector(".mod-formativos");

/////////////////////////////////////////
// CREAMOS EL PRIMER MÓDULO FORMATIVO //
///////////////////////////////////////

// 1º Seleccionamos el primer section que usaremos para clonar (como base)
const moduloFormativo0 = document.createElement("section");

// 2º Con el método add, en el caso que añadamos otra clase no machacaría (en lugar de usar classList a secas)
moduloFormativo0.classList.add("modformativo");

// 3º Creamos hijos al section previamente creado (0)

const moduloFormativo0_titulo = document.createElement("h3");
const moduloFormativo0_icono = document.createElement("div");

//Añadimos la clase al elemento div
moduloFormativo0_icono.classList.add("fondo-iconos");

const moduloFormativo0_texto = document.createElement("p");
const moduloFormativo0_horas = document.createElement("p");

moduloFormativo0_horas.classList.add("horas");

// Creamos ahora sí, todos los hijos, pero no se verán
// appendChild es "colocar al final de los hijos"
moduloFormativo0.appendChild(moduloFormativo0_titulo);
moduloFormativo0.appendChild(moduloFormativo0_icono);
moduloFormativo0.appendChild(moduloFormativo0_texto);
moduloFormativo0.appendChild(moduloFormativo0_horas);



// AHORA Creamos los otros elementos

// Explicación: El cloneNode clona el elemento "moduloFormativo0 (cualquier elemento que va delante)"
// moduloFormativo0 ya está crado de antes, por eso empieza a crear los siguientes
const moduloFormativo1 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo2 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo3 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);





////////////////////////////////////////////////////
// CAMBIAMOS CONTENIDO A CADA UNO DE LOS MÓDULOS //
//////////////////////////////////////////////////



// MODIFICACIÓN DEL MÓDULO 0
moduloFormativo0.children[0].innerHTML = modulo0.titulo;
moduloFormativo0.children[1].innerHTML = modulo0.icono;
moduloFormativo0.children[2].innerHTML = modulo0.texto;
moduloFormativo0.children[3].innerHTML = `${modulo0.horas} Horas`;

// MODIFICACIÓN DEL MÓDULO 1
moduloFormativo1.children[0].innerHTML = modulo1.titulo;
moduloFormativo1.children[1].innerHTML = modulo1.icono;
moduloFormativo1.children[2].innerHTML = modulo1.texto;
moduloFormativo1.children[3].innerHTML = `${modulo1.horas} Horas`;

// MODIFICACIÓN DEL MÓDULO 2
moduloFormativo2.children[0].innerHTML = modulo2.titulo;
moduloFormativo2.children[1].innerHTML = modulo2.icono;
moduloFormativo2.children[2].innerHTML = modulo2.texto;
moduloFormativo2.children[3].innerHTML = `${modulo2.horas} Horas`;

// MODIFICACIÓN DEL MÓDULO 3
moduloFormativo3.children[0].innerHTML = modulo3.titulo;
moduloFormativo3.children[1].innerHTML = modulo3.icono;
moduloFormativo3.children[2].innerHTML = modulo3.texto;
moduloFormativo3.children[3].innerHTML = `${modulo3.horas} Horas`;






///////////////////////////
// INYECTAMOS EL CÓDIGO //
/////////////////////////


// MÉTODO 1:

// Inyectamos los elemenos en el el DOM sin usar el contenedor
// moduloFormativo0.after(moduloFormativo1);
// moduloFormativo1.after(moduloFormativo2);
// moduloFormativo2.after(moduloFormativo3);

// Nota: el método 1 no es el más eficiente y puede ser más lioso

// MÉTODO 2:

// Inyectamos los elemenos en el el DOM usando el contenedor
contenedor.appendChild(moduloFormativo0); //Añadimos el módulo formativo 0
contenedor.appendChild(moduloFormativo1);
contenedor.appendChild(moduloFormativo2);
contenedor.appendChild(moduloFormativo3);