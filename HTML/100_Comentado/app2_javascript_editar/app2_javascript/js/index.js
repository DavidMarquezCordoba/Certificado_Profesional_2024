

// Explicación adicional de los comandos:

// const moduloX = { ... }: Se crean objetos con las propiedades de cada módulo formativo (título, icono, descripción, y horas).
// document.querySelector(".modformativos"): Obtiene el contenedor de la página donde se van a insertar los módulos clonados.
// cloneNode(true): Clona el nodo y sus hijos. Usamos esto para duplicar el módulo base y crear nuevas instancias sin afectar el original.
// children[]: Accede a los elementos hijos dentro del módulo clonando (por ejemplo, el título, icono, etc.).
// innerHTML: Cambia el contenido HTML dentro de cada hijo, para introducir los datos dinámicos.
// appendChild(): Inserta cada módulo formativo en el contenedor en el DOM.




// Definición del primer módulo de formación
const modulo0 = {
    titulo: "Programación web en el entorno cliente Programación web en el entorno cliente",  // Título del módulo
    // Definición del icono usando comillas dobles. Es necesario escapar las comillas internas del SVG con barra invertida (\)
    icono: "<svg xmlns=\"http://www.w3.org/2000/svg\" x-bind:width=\"size\" x-bind:height=\"size\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" x-bind:stroke-width=\"stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"44\" height=\"44\" stroke-width=\"2\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\"></path><path d=\"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4\"></path><path d=\"M2 21v-6\"></path><path d=\"M5 15v6\"></path><path d=\"M2 18h3\"></path><path d=\"M20 15v6h2\"></path><path d=\"M13 21v-6l2 3l2 -3v6\"></path><path d=\"M7.5 15h3\"></path><path d=\"M9 15v6\"></path></svg>",  // Icono en formato SVG
    texto: "urus sed, placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",  // Descripción del módulo
    horas: 150  // Número de horas del módulo
};

// Definición del segundo módulo de formación, con comillas simples para el SVG
const modulo1 = {
    titulo: "Programación web en el entorno servidor",  // Título del módulo
    // Definición del icono usando comillas simples para el SVG
    icono: '<svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="44" height="44" stroke-width="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M17 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M11 21v-6"></path><path d="M14 15v6"></path><path d="M11 18h3"></path></svg>',  // Icono en formato SVG
    texto: "Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",  // Descripción del módulo
    horas: 160  // Número de horas del módulo
};

// Definición del tercer módulo de formación, usando comillas invertidas para el SVG con varias líneas
const modulo2 = {
    titulo: "Implantación de aplicaciones web en entornos internet",  // Título del módulo
    // Definición del icono utilizando comillas invertidas para permitir el SVG en varias líneas
    icono: `<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <path d="M6.36997 9.50993C2.28997 9.79993 2.29997 15.7099 6.36997 15.9999H16.03C17.2 16.0099 18.33 15.5699 19.2 14.7799C22.06 12.2799 20.53 7.27991 16.76 6.79991C15.41 -1.34009 3.61998 1.74993 6.40998 9.50993" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M12 16V19" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M18 21H14" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M10 21H6" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>`,  // Icono en formato SVG
    texto: "Curabitur mollis auctor diam in bibendum. Donec semper, urus sed, placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",  // Descripción del módulo
    horas: 170  // Número de horas del módulo
};

// Definición del cuarto módulo de formación, también usando comillas invertidas para el SVG
const modulo3 = {
    titulo: "Módulo de prácticas profesionales",  // Título del módulo
    // Definición del icono con varias líneas usando comillas invertidas
    icono: `<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                <path d="M18.14 21.62C17.26 21.88 16.22 22 15 22H8.99998C7.77998 22 6.73999 21.88 5.85999 21.62C6.07999 19.02 8.74998 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                <path d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42004 12.56 8.42004 10.58C8.42004 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
            </svg>`,  // Icono en formato SVG
    texto: "placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",  // Descripción del módulo
    horas: 180  // Número de horas del módulo
};

// Selección del contenedor donde se van a insertar los módulos creados
const contenedor = document.querySelector(".modformativos");  // Localizamos el contenedor en el DOM

// Localizamos el primer módulo (moduloFormativo0) que servirá de base para clonar los otros módulos
const moduloFormativo0 = document.querySelector(".modformativo");  // Localizamos el módulo base

// Definimos una constante que indica si se debe clonar el contenido dentro de los elementos clonados
const CLONAR_CONTENIDO = true;   // Si fuera false, no se copiaría el contenido del módulo original

// Clonamos los módulos 1, 2 y 3 a partir del módulo base
const moduloFormativo1 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // Clonamos el primer módulo
const moduloFormativo2 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // Clonamos el segundo módulo
const moduloFormativo3 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // Clonamos el tercer módulo

// Actualizamos el contenido de los módulos clonados con la información de los objetos de cada módulo
moduloFormativo1.children[0].innerHTML = modulo1.titulo;  // Insertamos el título en el primer módulo
moduloFormativo1.children[1].innerHTML = modulo1.icono;  // Insertamos el icono en el primer módulo
moduloFormativo1.children[2].innerHTML = modulo1.texto;  // Insertamos la descripción en el primer módulo
moduloFormativo1.children[3].innerHTML = `${modulo1.horas} Horas`;  // Insertamos las horas en el primer módulo

moduloFormativo2.children[0].innerHTML = modulo2.titulo;  // Insertamos el título en el segundo módulo
moduloFormativo2.children[1].innerHTML = modulo2.icono;  // Insertamos el icono en el segundo módulo
moduloFormativo2.children[2].innerHTML = modulo2.texto;  // Insertamos la descripción en el segundo módulo
moduloFormativo2.children[3].innerHTML = `${modulo2.horas} Horas`;  // Insertamos las horas en el segundo módulo

moduloFormativo3.children[0].innerHTML = modulo3.titulo;  // Insertamos el título en el tercer módulo
moduloFormativo3.children[1].innerHTML = modulo3.icono;  // Insertamos el icono en el tercer módulo
moduloFormativo3.children[2].innerHTML = modulo3.texto;  // Insertamos la descripción en el tercer módulo
moduloFormativo3.children[3].innerHTML = `${modulo3.horas} Horas`;  // Insertamos las horas en el tercer módulo

// Finalmente, insertamos los módulos clonados en el contenedor
contenedor.appendChild(moduloFormativo1);  // Insertamos el primer módulo en el contenedor
contenedor.appendChild(moduloFormativo2);  // Insertamos el segundo módulo en el contenedor
contenedor.appendChild(moduloFormativo3);  // Insertamos el tercer módulo en el contenedor
