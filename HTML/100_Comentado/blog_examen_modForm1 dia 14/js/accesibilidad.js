// función que es llamada cuando se pulsa a "Accesibilidad" (oculta o muestra el submenu)
// y si pulsa sobre "Texto a Voz" activa o desactiva la ayuda por voz guardando también
// la configuración seleccionada en el localStorage
function accesibilidad(evento) {
    // Verificamos si el elemento que se ha pulsado es un enlace con texto "Accesibilidad"
    if((evento.target.tagName == "A")&&(evento.target.textContent == "Accesibilidad")) {
        // Si se cumple la condición, alternamos la visibilidad del submenú
        evento.target.closest("div").querySelector("div").classList.toggle("submenu");
    } 
    // Si el texto del enlace es "Texto a Voz"
    else if((evento.target.tagName == "A")&&(evento.target.textContent == "Texto a Voz")) {
        // Si existe un elemento con la clase "texto-voz", la ayuda por voz está activada
        if(document.querySelector(".texto-voz")){
            const miMain = document.querySelector("main");
            // Obtenemos todos los altavoces (elementos con la clase "texto-voz")
            const altavoces = document.querySelectorAll(".texto-voz");
            // Eliminamos todos los altavoces
            altavoces.forEach((altavoz) => altavoz.remove());
            // Quitamos el evento "click" en el main
            miMain.removeEventListener("click", leerEntrada);
            // Quitamos el evento "mouseover" en el body
            document.body.removeEventListener("mouseover", leerEnlace);
            // Eliminamos el item "ayudaVoz" del localStorage
            localStorage.removeItem("ayudaVoz");
            // Emitimos un mensaje de voz indicando que la ayuda por voz se desactivó
            habla("Ayuda por voz desactivada");
        } 
        // Si no está activada la voz automática
        else {
            // Guardamos la configuración de voz automática en el localStorage
            localStorage.setItem("ayudaVoz", true);
            // Activamos la ayuda por voz
            activaAyudaVoz();
        }
        // Alternamos la visibilidad del submenú
        evento.target.closest("div").classList.toggle("submenu");
    }
}

// Función para activar la ayuda por voz
function activaAyudaVoz() {
    // Obtenemos todos los artículos del blog
    const articulos = document.querySelectorAll("article");
    const miMain = document.querySelector("main");
    // Iteramos sobre todos los artículos para añadir un altavoz
    articulos.forEach((articulo) => {
        articulo.style.position = "relative";
        // Creamos el altavoz y le asignamos la clase "texto-voz"
        const mialtavoz = document.createElement("div");
        mialtavoz.classList.add("texto-voz");
        // Insertamos un ícono de altavoz dentro del altavoz
        mialtavoz.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path aria-describedby="Pulsa para oir esta entrada del blog" d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>`;
        // Añadimos el altavoz al artículo
        articulo.appendChild(mialtavoz);
        // Emitimos un mensaje de voz indicando que la ayuda por voz está activada
        habla("La ayuda por voz está activada");
    });
    // Añadimos el evento "click" en el main para leer la entrada
    miMain.addEventListener("click", leerEntrada);
    // Añadimos el evento "mouseover" en el body para leer enlaces
    document.body.addEventListener("mouseover", leerEnlace);
}

// Función para leer la entrada del blog al hacer click
function leerEntrada(evento) {
    // Si el evento ocurrió sobre un artículo, se lee la entrada
    if(evento.target.closest("article")){
        oirEntrada(evento.target.closest("article"));
    }
}

// Función para leer el texto de un enlace cuando el mouse pasa sobre él
function leerEnlace(evento) {
    // Si el enlace tiene un atributo "aria-describedby", se lee el texto relacionado
    const tocado = evento.target.getAttribute("aria-describedby");
    if(tocado){
        habla(tocado);    
    }
}

// Función para leer el contenido de una entrada del blog
function oirEntrada(ficha) {
    // Preparamos el texto a leer con el título, el contenido y la fecha
    const sonido = "Título:" + ficha.children[0].textContent + ". Texto:" + ficha.children[1].textContent + ". Fecha de Publicación:" + ficha.children[2].textContent;
    // Emitimos el texto preparado a través de la función "habla"
    habla(sonido);
}

// Función que convierte texto a voz
function habla(textoHablar) {   
    // Creamos una instancia de SpeechSynthesisUtterance con el texto a hablar
    const voz = new SpeechSynthesisUtterance(textoHablar);
    // Si hay una voz en proceso, la cancelamos
    if(speechSynthesis.speaking){
        speechSynthesis.cancel();
    }
    // Definimos el idioma y la velocidad de la voz
    voz.lang = 'es-ES';
    voz.rate = 1;
    // Reproducimos el texto con la voz definida
    speechSynthesis.speak(voz);
}

// Esta función se ejecuta cuando el DOM está completamente cargado
document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos el elemento "nav" del documento
    const minav = document.querySelector("nav");
    // Creamos un contenedor para el enlace de accesibilidad
    const divEnlaceAccesibilidad = document.createElement("div");
    const enlaceAccesibilidad = document.createElement("a");
    // Añadimos el evento de clic para activar la funcionalidad de accesibilidad
    minav.addEventListener("click", accesibilidad);
    // Establecemos la descripción accesible para el enlace
    enlaceAccesibilidad.setAttribute("aria-describedby", "Pulsa para abrir o cerrar el submenú para Accesibilidad");
    enlaceAccesibilidad.innerHTML = "Accesibilidad";
    enlaceAccesibilidad.href = "#";
    // Añadimos el enlace al contenedor
    divEnlaceAccesibilidad.appendChild(enlaceAccesibilidad);

    // Creamos el submenú con el enlace para activar/desactivar el texto a voz
    const divSubmenu = document.createElement("div");
    divSubmenu.classList.add("submenu");
    const enlaceTextoaVoz = document.createElement("a");
    enlaceTextoaVoz.setAttribute("aria-describedby", "Pulsa aquí para activar o desactivar la ayuda por voz");
    enlaceTextoaVoz.innerHTML = "Texto a Voz";
    divSubmenu.appendChild(enlaceTextoaVoz);
    // Añadimos el submenú al contenedor de accesibilidad
    divEnlaceAccesibilidad.appendChild(divSubmenu);

    // Añadimos el enlace de accesibilidad al menú de navegación
    minav.appendChild(divEnlaceAccesibilidad);

    // Ajustamos el número de columnas del menú de navegación según el número de elementos
    const numHijosNav = document.querySelector("nav").children.length;
    document.documentElement.style.setProperty('--numColumnas', numHijosNav);

    // Si la ayuda por voz está activada en el localStorage, la activamos automáticamente
    if(localStorage.getItem("ayudaVoz")){
        setTimeout(() => {
            activaAyudaVoz();
        }, 500);
    }
});








/* Explicación del código (Modelo detallado) */
Función accesibilidad

function accesibilidad(evento) {
accesibilidad(evento): Es una función que se ejecuta cuando se interactúa con el menú de accesibilidad. Dependiendo de qué opción del menú se seleccione, esta función realiza diferentes acciones: activar el submenú o activar/desactivar la ayuda por voz.


    if((evento.target.tagName == "A")&&(evento.target.textContent == "Accesibilidad")) {
        evento.target.closest("div").querySelector("div").classList.toggle("submenu");
if((evento.target.tagName == "A")&&(evento.target.textContent == "Accesibilidad")) {...} Verifica si el clic fue sobre un enlace (<a>) con el texto "Accesibilidad". Si es así, se muestra o se oculta el submenú correspondiente usando toggle para añadir o quitar la clase submenu.


    } else if((evento.target.tagName == "A")&&(evento.target.textContent == "Texto a Voz")) {
else if((evento.target.tagName == "A")&&(evento.target.textContent == "Texto a Voz")) {...} Si el clic fue sobre el enlace "Texto a Voz", ejecuta la lógica para activar o desactivar la ayuda por voz.


        if(document.querySelector(".texto-voz")){ 
if(document.querySelector(".texto-voz")) {...} Verifica si existe algún elemento con la clase .texto-voz. Si es así, significa que la ayuda por voz está activada, por lo que desactivará la funcionalidad.


            const miMain = document.querySelector("main");
            const altavoces = document.querySelectorAll(".texto-voz");
            altavoces.forEach((altavoz) => altavoz.remove());
const altavoces = document.querySelectorAll(".texto-voz"); Obtiene todos los elementos con la clase .texto-voz y los elimina. Esto desactiva los iconos de altavoz que permiten escuchar las entradas del blog.


            miMain.removeEventListener("click", leerEntrada);
            document.body.removeEventListener("mouseover", leerEnlace);
miMain.removeEventListener("click", leerEntrada); Elimina los event listeners que permiten leer las entradas al hacer clic o al pasar el mouse sobre un enlace.


            localStorage.removeItem("ayudaVoz");
            habla("Ayuda por voz desactivada");
localStorage.removeItem("ayudaVoz"); Elimina la configuración guardada en localStorage para la ayuda por voz. Luego, se llama a la función habla para anunciar que la ayuda por voz ha sido desactivada.


        } else { 
            localStorage.setItem("ayudaVoz", true);
            activaAyudaVoz();
        }
Si la ayuda por voz no está activada, guarda la configuración en localStorage y llama a activaAyudaVoz() para activarla.


        evento.target.closest("div").classList.toggle("submenu");
Alterna la visibilidad del submenú de accesibilidad después de realizar la acción correspondiente.

Función activaAyudaVoz

function activaAyudaVoz() {
activaAyudaVoz(): Esta función habilita la ayuda por voz. Coloca los iconos de altavoz sobre las entradas del blog y configura los eventos para que se lea el contenido.


    const articulos = document.querySelectorAll("article");
    const miMain = document.querySelector("main");
    articulos.forEach((articulo) => {
        articulo.style.position = "relative";
        const mialtavoz = document.createElement("div");
        mialtavoz.classList.add("texto-voz");
const articulos = document.querySelectorAll("article"); Obtiene todos los artículos en la página. Luego, para cada uno de ellos, añade un icono de altavoz.


        mialtavoz.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path aria-describedby="Pulsa para oir esta entrada del blog" d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>`;
mialtavoz.innerHTML = ...; Inserta un icono de altavoz (SVG) dentro del nuevo div que tiene la clase .texto-voz. Este icono permitirá que el usuario escuche el contenido del artículo.


        articulo.appendChild(mialtavoz);
        habla("La ayuda por voz está activada");
    });
Añade el icono de altavoz al artículo y utiliza habla para anunciar que la ayuda por voz está activada.


    miMain.addEventListener("click", leerEntrada);
    document.body.addEventListener("mouseover", leerEnlace);
miMain.addEventListener("click", leerEntrada); Añade un event listener a la sección <main> para leer el contenido cuando se haga clic en un artículo. También se añade un evento mouseover al body para leer los enlaces cuando el mouse pase sobre ellos.

Función leerEntrada

function leerEntrada(evento) {
    if(evento.target.closest("article")){
        oirEntrada(evento.target.closest("article"));
    }
}
leerEntrada(evento): Esta función se ejecuta cuando se hace clic en un artículo. Llama a la función oirEntrada para leer el contenido del artículo.

Función leerEnlace

function leerEnlace(evento) {
    const tocado = evento.target.getAttribute("aria-describedby");
    if(tocado){
        habla(tocado);    
    }
}
leerEnlace(evento): Esta función lee el contenido de un enlace si tiene un atributo aria-describedby, proporcionando una descripción adicional para la accesibilidad.

Función oirEntrada

function oirEntrada(ficha) {
    const sonido = "Título:" + ficha.children[0].textContent + ". Texto:" + ficha.children[1].textContent + ". Fecha de Publicación:" + ficha.children[2].textContent;
    habla(sonido);
}
oirEntrada(ficha): Esta función toma un artículo (ficha) y genera un texto que describe su título, contenido y fecha de publicación. Luego, se utiliza la función habla para leer este texto en voz alta.

Función habla

function habla(textoHablar) {   
    const voz = new SpeechSynthesisUtterance(textoHablar);
    if(speechSynthesis.speaking){ 
        speechSynthesis.cancel();
    }
    voz.lang = 'es-ES';
    voz.rate = 1;
    speechSynthesis.speak(voz);
}
habla(textoHablar): Convierte el texto en voz utilizando la API SpeechSynthesis. Si ya se está hablando, se detiene la voz actual y se comienza a hablar el nuevo texto.

Evento DOMContentLoaded

document.addEventListener("DOMContentLoaded", function () {
DOMContentLoaded: Este evento asegura que el código no se ejecute hasta que el DOM esté completamente cargado. Aquí, se inicializan los elementos de accesibilidad.


    const minav = document.querySelector("nav");
    const divEnlaceAccesibilidad = document.createElement("div");
    const enlaceAccesibilidad = document.createElement("a");
    minav.addEventListener("click", accesibilidad);
    enlaceAccesibilidad.setAttribute("aria-describedby", "Pulsa para abrir o cerrar el submenú para Accesibilidad");
    enlaceAccesibilidad.innerHTML = "Accesibilidad";
    enlaceAccesibilidad.href = "#";
    divEnlaceAccesibilidad.appendChild(enlaceAccesibilidad);
Aquí estamos creando un enlace de "Accesibilidad" en el menú de navegación, añadiendo la funcionalidad para abrir o cerrar el submenú de accesibilidad cuando se hace clic en él.


    const divSubmenu = document.createElement("div");
    divSubmenu.classList.add("submenu");
    const enlaceTextoaVoz = document.createElement("a");
    enlaceTextoaVoz.setAttribute("aria-describedby", "Pulsa aquí para activar o desactivar la ayuda por voz");
    enlaceTextoaVoz.innerHTML = "Texto a Voz";
    divSubmenu.appendChild(enlaceTextoaVoz);
    divEnlaceAccesibilidad.appendChild(divSubmenu);
Aquí creamos el submenú con el enlace "Texto a Voz", que permitirá activar o desactivar la ayuda por voz.


    minav.appendChild(divEnlaceAccesibilidad);
Añadimos el enlace de accesibilidad y el submenú al menú de navegación.


    const numHijosNav = document.querySelector("nav").children.length;
    document.documentElement.style.setProperty('--numColumnas', numHijosNav);
Calculamos el número de elementos hijos en el menú de navegación y ajustamos el número de columnas del grid del menú según este valor.


    if(localStorage.getItem("ayudaVoz")){
        setTimeout(() => {
            activaAyudaVoz();
        }, 500);
    }
});
Si la ayuda por voz está activada previamente y guardada en localStorage, se activa nuevamente después de un breve retraso.

Explicación del código (Modelo resumido)
accesibilidad(evento): Esta función controla el submenú de accesibilidad y activa o desactiva la ayuda por voz. Guarda la configuración en localStorage.

activaAyudaVoz(): Activa la ayuda por voz añadiendo iconos de altavoz a los artículos y configurando eventos para leer los artículos y enlaces al hacer clic o al pasar el mouse.

leerEntrada(evento): Si se hace clic en un artículo, se lee en voz alta el contenido de dicho artículo.

leerEnlace(evento): Lee la descripción de un enlace si tiene un atributo aria-describedby.

oirEntrada(ficha): Lee el título, contenido y fecha de publicación de un artículo.

habla(textoHablar): Convierte el texto en voz utilizando la API SpeechSynthesis.

DOMContentLoaded: Inicializa el menú de accesibilidad y ajusta el diseño del menú de navegación cuando el DOM está completamente cargado. Si la ayuda por voz estaba activada anteriormente, la activa nuevamente.