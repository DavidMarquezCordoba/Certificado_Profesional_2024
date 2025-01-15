// Declaramos todos los objetos (módulos formativos) con su respectiva información de forma independiente

////////////////////////////////////////////////
// DECLARAMOS CADA OBJETO {MÓDULO FORMATIVO} //
//////////////////////////////////////////////

// ********* //
// MÓDULO 1 //
// ******* //
const modulo0 ={
   titulo: "Programación web en el entorno clienteProgramación web en el entorno clienteProgramación web en el entorno cliente",
   icono: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-html">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M14 3v4a1 1 0 0 0 1 1h4" />
               <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
               <path d="M2 21v-6" />
               <path d="M5 15v6" />
               <path d="M2 18h3" />
               <path d="M20 15v6h2" />
               <path d="M13 21v-6l2 3l2 -3v6" />
               <path d="M7.5 15h3" />
               <path d="M9 15v6" />
            </svg>`,
   texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, autem earum aperiam, ipsum praesentium temporibus quasi quod tempore quibusdam molestias dolor ab rem atque blanditiis ipsam provident, corrupti consequuntur culpa.",
   horas: 150,
};
// ********* //
// MÓDULO 2 //
// ******* //
const modulo1 ={
   titulo: "Programación web en el entorno cliente",
   icono: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-file-type-php">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M14 3v4a1 1 0 0 0 1 1h4" />
               <path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4" />
               <path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
               <path d="M17 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6" />
               <path d="M11 21v-6" />
               <path d="M14 15v6" />
               <path d="M11 18h3" />
            </svg>`,
   texto: "e quibusdam molestias dolor ab rem atque blanditiis ipsam provident, corrupti consequuntur culpa.",
   horas: 150,
};
// ********* //
// MÓDULO 3 //
// ******* //
const modulo2 ={
   titulo: "Implementación de aplicaciones web en entornos internet",
   icono: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-cloud-network">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M3 20h7" /><path d="M14 20h7" />
               <path d="M10 20a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
               <path d="M12 16v2" />
               <path d="M8 16.004h-1.343c-2.572 -.004 -4.657 -2.011 -4.657 -4.487c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-2.535" />
            </svg>`,
   texto: "autem earum aperiam, ipsum praesentium temporibus quasi quod tempore quibusdam molestias dolor ab rem atque blanditiis ipsam provident, corrupti consequuntur culpa.",
   horas: 150,
};
// ********* //
// MÓDULO 4 //
// ******* //
const modulo3 ={
   titulo: "Módulo de prácticas profesionales en empresas empresas",
   icono: `<svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-user-square-rounded">
               <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
               <path d="M12 13a3 3 0 1 0 0 -6a3 3 0 0 0 0 6z" />
               <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z" />
               <path d="M6 20.05v-.05a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v.05" />
            </svg>`,
   texto: "Lorem ipsum  temporibus quasi quod tempore quibusdam molestias dolor ab rem atque b, corrupti consequuntur culpa.",
   horas: 150,
};

///////////////////////////////////////////////////////////////////////////////

// Seleccionamos el div principal donde están todos los section para introducir los objetos dentro
const contenedor = document.querySelector(".mod-formativos");

// Seleccionamos el primer section que usaremos para clonar (como base)
const moduloFormativo0 = document.querySelector(".modformativo");

// Creamos constante verdadera para clonar
const CLONAR_CONTENIDO = true; //Si fuera false no copiaría el contenido

// Creamos los otros elementos

// Explicación: El cloneNode clona el elemento "moduloFormativo0 (cualquier elemento que va delante)"
// moduloFormativo0 ya está crado de antes, por eso empieza a crear los siguientes
const moduloFormativo1 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo2 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo3 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);

////////////////////////////////////////////////////
// CAMBIAMOS CONTENIDO A CADA UNO DE LOS MÓDULOS //
//////////////////////////////////////////////////

// Nota: el módulo 0 no hace falta modificarlo ya que es la base de los demás

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

// MÉTODO 1:

// Inyectamos los elemenos en el el DOM sin usar el contenedor
// moduloFormativo0.after(moduloFormativo1);
// moduloFormativo1.after(moduloFormativo2);
// moduloFormativo2.after(moduloFormativo3);

// Nota: el método 1 no es el más eficiente y puede ser más lioso

// MÉTODO 2:

// Inyectamos los elemenos en el el DOM usando el contenedor
contenedor.appendChild(moduloFormativo1);
contenedor.appendChild(moduloFormativo2);
contenedor.appendChild(moduloFormativo3);