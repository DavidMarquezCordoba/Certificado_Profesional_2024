
// Explicación general:

// Este código define cuatro módulos diferentes, cada uno representado por un objeto. Cada objeto tiene varias propiedades que 
// describen el módulo:

// titulo: El nombre del módulo en forma de cadena de texto.
// icono: El código SVG que se utiliza para representar un icono visual del módulo. El SVG es una forma estándar de representar 
// gráficos vectoriales en la web.
// En el código, se usan diferentes formas de declarar el icono: comillas dobles " para un solo string, comillas simples ' para otro, 
// y comillas invertidas (backticks) ` para poder manejar cadenas de varias líneas.
// Las comillas dobles dentro del SVG se deben escapar con barra invertida (\") cuando se usan comillas dobles en la declaración del string.
// texto: Una descripción breve del módulo. Este texto se usa generalmente para dar más contexto al usuario sobre lo que trata el módulo.
// horas: La cantidad de horas que se requiere para completar el módulo, representado como un número entero.
// Cada módulo es independiente, y este formato puede ser utilizado para construir una interfaz de usuario que muestre una lista de 
// módulos con títulos, iconos y descripciones. Además, este patrón es muy útil para aplicaciones donde se necesiten gestionar
//  o listar contenido de forma dinámica.

// Este código está diseñado para integrarse fácilmente en una página web o una aplicación que maneje módulos de aprendizaje, cursos o recursos.




// Definimos el primer módulo llamado modulo0
const modulo0 = {
    // Título del módulo: Es una cadena de texto que contiene el nombre del módulo de estudio
    titulo: "Programación web en el entorno cliente Programación web en el entorno cliente",
    
    // Icono del módulo: Usamos un string con el código SVG para representar el icono visualmente
    // Las comillas dobles dentro del SVG se deben escapar con barra invertida (\"), porque estamos usando comillas dobles en toda la cadena
    icono: "<svg xmlns=\"http://www.w3.org/2000/svg\" x-bind:width=\"size\" x-bind:height=\"size\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" x-bind:stroke-width=\"stroke\" stroke-linecap=\"round\" stroke-linejoin=\"round\" width=\"44\" height=\"44\" stroke-width=\"2\"><path d=\"M14 3v4a1 1 0 0 0 1 1h4\"></path><path d=\"M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4\"></path><path d=\"M2 21v-6\"></path><path d=\"M5 15v6\"></path><path d=\"M2 18h3\"></path><path d=\"M20 15v6h2\"></path><path d=\"M13 21v-6l2 3l2 -3v6\"></path><path d=\"M7.5 15h3\"></path><path d=\"M9 15v6\"></path></svg>",

    // Descripción del módulo: Texto explicativo sobre el contenido del módulo
    texto: "urus sed, placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",
    
    // Duración del módulo en horas: Un número entero que representa cuántas horas toma completar el módulo
    horas: 150
};

// Definimos el segundo módulo llamado modulo1
const modulo1 = {
    // Título del módulo
    titulo: "Programación web en el entorno servidor",

    // Icono del módulo: Usamos comillas simples en lugar de dobles
    // Las comillas dentro del SVG no necesitan ser escapadas, ya que estamos usando comillas simples para delimitar el string
    icono: '<svg xmlns="http://www.w3.org/2000/svg" x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" stroke="currentColor" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" width="44" height="44" stroke-width="2"><path d="M14 3v4a1 1 0 0 0 1 1h4"></path><path d="M5 12v-7a2 2 0 0 1 2 -2h7l5 5v4"></path><path d="M5 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M17 18h1.5a1.5 1.5 0 0 0 0 -3h-1.5v6"></path><path d="M11 21v-6"></path><path d="M14 15v6"></path><path d="M11 18h3"></path></svg>',

    // Descripción del módulo
    texto: "Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",

    // Duración del módulo
    horas: 160
};

// Definimos el tercer módulo llamado modulo2
const modulo2 = {
    // Título del módulo
    titulo: "Implantación de aplicaciones web en entornos internet",

    // Icono del módulo: Usamos comillas invertidas (backticks) para manejar mejor el contenido del SVG, que puede ocupar varias líneas
    icono: `<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                        <path d="M6.36997 9.50993C2.28997 9.79993 2.29997 15.7099 6.36997 15.9999H16.03C17.2 16.0099 18.33 15.5699 19.2 14.7799C22.06 12.2799 20.53 7.27991 16.76 6.79991C15.41 -1.34009 3.61998 1.74993 6.40998 9.50993" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M12 16V19" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M18 21H14" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M10 21H6" stroke="#292D32" x-bind:stroke-width="stroke" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>`,
    
    // Descripción del módulo
    texto: "Curabitur mollis auctor diam in bibendum. Donec semper, urus sed, placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",

    // Duración del módulo
    horas: 170
};

// Definimos el cuarto módulo llamado modulo3
const modulo3 = {
    // Título del módulo
    titulo: "Módulo de prácticas profesionales",

    // Icono del módulo: También usamos comillas invertidas para el código SVG
    icono: `<svg x-bind:width="size" x-bind:height="size" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width="44" height="44">
                        <path d="M18.14 21.62C17.26 21.88 16.22 22 15 22H8.99998C7.77998 22 6.73999 21.88 5.85999 21.62C6.07999 19.02 8.74998 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M15 2H9C4 2 2 4 2 9V15C2 18.78 3.14 20.85 5.86 21.62C6.08 19.02 8.75 16.97 12 16.97C15.25 16.97 17.92 19.02 18.14 21.62C20.86 20.85 22 18.78 22 15V9C22 4 20 2 15 2ZM12 14.17C10.02 14.17 8.42 12.56 8.42 10.58C8.42 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58C15.58 12.56 13.98 14.17 12 14.17Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                        <path d="M15.58 10.58C15.58 12.56 13.98 14.17 12 14.17C10.02 14.17 8.42004 12.56 8.42004 10.58C8.42004 8.60002 10.02 7 12 7C13.98 7 15.58 8.60002 15.58 10.58Z" stroke="#292D32" x-bind:stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></path>
                    </svg>`,
    
    // Descripción del módulo
    texto: "placerat erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lacinia molestie lacinia. Curabitur mollis auctor diam in bibendum. Donec semper, ar",

    // Duración del módulo
    horas: 180
};










