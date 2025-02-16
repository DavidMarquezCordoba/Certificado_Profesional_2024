// en este archivo accesibilidad.js añadimos ayuda por voz a nuestra web

// función que es llamada cuando se pulsa a "Accesibilidad" (oculta o muestra el submenu)
// y si pulsa sobre "Texto a Voz" activa o desactiva la ayuda por voz guardando también
// la configuración seleccionada en el localStorage
function accesibilidad(evento) {
    if((evento.target.tagName == "A")&&(evento.target.textContent == "Accesibilidad")) {
        evento.target.closest("div").querySelector("div").classList.toggle("submenu");
    } else if((evento.target.tagName == "A")&&(evento.target.textContent == "Texto a Voz")) {
        if(document.querySelector(".texto-voz")){ // hay algún elemento con la clase .texto-voz está habilitada la voz automática
            const miMain = document.querySelector("main");
            const altavoces = document.querySelectorAll(".texto-voz");
            altavoces.forEach((altavoz) => altavoz.remove());
            miMain.removeEventListener("click", leerEntrada);
            document.body.removeEventListener("mouseover", leerEnlace);
            // const enlaces = document.querySelectorAll("a");
            // enlaces.forEach((enlace) => enlace.removeEventListener("mouseover", leerEnlace));
            localStorage.removeItem("ayudaVoz");
            habla("Ayuda por voz desactivada");
        } else { // No está activada la voz automática
            localStorage.setItem("ayudaVoz", true);
            activaAyudaVoz();
        }
        evento.target.closest("div").classList.toggle("submenu");
    }
}

// activa la ayuda por voz y pinta los altavoces sobre todas las entradas del blog
function activaAyudaVoz() {
    const articulos = document.querySelectorAll("article");
    const miMain = document.querySelector("main");
    articulos.forEach((articulo) => {
        articulo.style.position = "relative";
        const mialtavoz = document.createElement("div");
        mialtavoz.classList.add("texto-voz");
        mialtavoz.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" width="48" height="48" stroke-width="2"><path d="M15 8a5 5 0 0 1 0 8"></path><path d="M17.7 5a9 9 0 0 1 0 14"></path><path aria-describedby="Pulsa para oir esta entrada del blog" d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5"></path></svg>`;
        articulo.appendChild(mialtavoz);
        habla("La ayuda por voz está activada");
    });
    miMain.addEventListener("click", leerEntrada);
    document.body.addEventListener("mouseover", leerEnlace);
    // const enlaces = document.querySelectorAll("a");
    // enlaces.forEach((enlace) => enlace.addEventListener("mouseover", leerEnlace));

}

// función llamada desde el detector de eventos de click y es para que llame a
// oirEntrada si he pulsado sobre un article
function leerEntrada(evento) {
    if(evento.target.closest("article")){
        oirEntrada(evento.target.closest("article"));
    }
}

// función para leer un enlace
function leerEnlace(evento) {
    const tocado = evento.target.getAttribute("aria-describedby");
    if(tocado){
        habla(tocado);    
    }
}

// función para leer una entrada del blog
function oirEntrada(ficha) {
    const sonido = "Título:" + ficha.children[0].textContent + ". Texto:" + ficha.children[1].textContent + ". Fecha de Publicación:" + ficha.children[2].textContent;
    habla(sonido);
}

// función que convierte texto a voz
function habla(textoHablar) {   
    const voz = new SpeechSynthesisUtterance(textoHablar);
    if(speechSynthesis.speaking){ // Esto es para parar de hablar si está hablando en este momento
        speechSynthesis.cancel();
    }
    voz.lang = 'es-ES';
    voz.rate = 1;
    speechSynthesis.speak(voz);
}

// esta función de comprobar si está activada la ayuda de voz 
// no funciona bien por las limitaciones de sonido al inicio 
// de la carga de una web, cuando se hace click en algún sitio 
// del Body comienza a funcionar
document.addEventListener("DOMContentLoaded", function () {

    // añadimos al menú un enlace Accesibilidad con un submenu texto a voz
    const minav = document.querySelector("nav");
    const divEnlaceAccesibilidad = document.createElement("div");
    const enlaceAccesibilidad = document.createElement("a");
    minav.addEventListener("click", accesibilidad);
    enlaceAccesibilidad.setAttribute("aria-describedby", "Pulsa para abrir o cerrar el submenú para Accesibilidad");
    enlaceAccesibilidad.innerHTML = "Accesibilidad";
    enlaceAccesibilidad.href = "#";
    divEnlaceAccesibilidad.appendChild(enlaceAccesibilidad);

    const divSubmenu = document.createElement("div");
    divSubmenu.classList.add("submenu");
    const enlaceTextoaVoz = document.createElement("a");
    enlaceTextoaVoz.setAttribute("aria-describedby", "Pulsa aquí para activar o desactivar la ayuda por voz");
    enlaceTextoaVoz.innerHTML = "Texto a Voz";
    divSubmenu.appendChild(enlaceTextoaVoz);
    divEnlaceAccesibilidad.appendChild(divSubmenu);

    minav.appendChild(divEnlaceAccesibilidad);

    // cambiamos en número de columnas del grid del menú de navegación de 4 
    // al número de elementos hijos que tenga el nav
    const numHijosNav = document.querySelector("nav").children.length; // Número de hijos del nav
    document.documentElement.style.setProperty('--numColumnas', numHijosNav);

    // Activo la ayuda por voz si está guardado en el localStorage
    if(localStorage.getItem("ayudaVoz")){
        setTimeout(() => {
            activaAyudaVoz();
        }, 500);
    }
});