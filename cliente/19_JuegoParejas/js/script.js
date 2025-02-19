let imagenes = ["😎","😶‍🌫️","🤬","🤡","💩","🥷","🏇","🎊"];
let tiempoMaximo = 120;

const tablero = document.querySelector("#tablero");
const botonStart = document.querySelector(".boton-start");
const botonEditar = document.querySelector(".boton-editar");

let cartasGiradas = [];
let cartasEmparejadas = 0; // Para hacer comprobaciones
let cartas;
let tiempo; //Tiempo que está corriendo
let intentos = 0;
let tiempoComienzo = 0;

let temporizador;


function jugar() {
    // Reiniciamos los datos cada vez que jueguemos de nuevo
    
    
    cartasGiradas = [];
    cartasEmparejadas = 0;
    intentos = 0;
    tiempo = 0;
    
    tiempoComienzo = Date.now();
    
    // TIEMPO
    if (document.querySelector("#tiempo") === null) {
        const h2  = document.createElement("h2"); //Aquí lo creamos porque no existe
        h2.id = "tiempo";
        h2.textContent =  `Tiempo ${tiempo} seg. (${tiempoMaximo-tiempo})`;
        document.body.insertBefore(h2, tablero);
    } else {
        const h2 = document.querySelector("#tiempo"); //Aquí ya sí existe y solo la seleccionamos
        h2.textContent =  `Tiempo ${tiempo} seg. (${tiempoMaximo-tiempo})`;
    }

    // INTENTOS
    if (document.querySelector("#intentos") === null) {
        const h2  = document.createElement("h2"); //Aquí lo creamos porque no existe
        h2.id = "intentos";
        h2.textContent =  `Intentos: ${intentos})`;
        document.body.insertBefore(h2, tablero);
    } else {
        const h2 = document.querySelector("#intentos"); //Aquí ya sí existe y solo la seleccionamos
        h2.textContent =  `Intentos: ${intentos})`;
    }

    // PAREJAS
    if (document.querySelector("#parejas") === null) {
        const h2  = document.createElement("h2"); //Aquí lo creamos porque no existe
        h2.id = "parejas";
        h2.textContent =  `Parejas: ${cartasEmparejadas})`;
        document.body.insertBefore(h2, tablero);
    } else {
        const h2 = document.querySelector("#parejas"); //Aquí ya sí existe y solo la seleccionamos
        h2.textContent =  `Parejas: ${cartasEmparejadas})`;
    }

    temporizador = setInterval(cuentaTiempo, 1000);

    
    // Los ... es para "desglosar" el array
    cartas = [...imagenes, ...imagenes].sort(()=> Math.random()-0.5);

    cartas.forEach((carta) => {
        const miCarta = document.createElement("div");
        miCarta.classList.add("carta");
        miCarta.textContent = "?";
        miCarta.dataset.imagen = carta;
        tablero.appendChild(miCarta);
    });

    tablero.addEventListener("click", pulsaCarta);

    botonStart.style.display = "none";
    botonEditar.style.display = "none";
}

function pulsaCarta(evento) {
    const cartaPulsada = evento.target;
    const numCartasGiradas = document.querySelectorAll(".carta-girada").length;
    const numCartasEmparejadas = document.querySelectorAll(".carta-emparejada").length;

    if (cartaPulsada.classList.contains("carta") && !(cartaPulsada.classList.contains("carta-girada"))  && !(cartaPulsada.classList.contains("carta-emparejada")) && (cartasGiradas - cartasEmparejadas) < 2) {
        cartaPulsada.classList.add("carta-girada");
        cartaPulsada.innerHTML = cartaPulsada.dataset.imagen;

        cartasGiradas = [...cartasGiradas, cartaPulsada];

        if (cartasGiradas.length == 2) {
            intentos++;
            document.querySelector("#intentos").textContent = `Intentos: ${intentos}`;
            const [carta1, carta2] = cartasGiradas; //Creamos las constantes carta1 y carta 2, con "destructuring" Válido en arrays y objetos
            if (carta1.dataset.imagen === carta2.dataset.imagen) {
                carta1.classList.add("carta-emparejada");
                carta2.classList.add("carta-emparejada");
                cartasEmparejadas += 2;
                document.querySelector("#parejas").textContent = `Parejas: ${cartasEmparejadas}`;
            } else {
                setTimeout(() => {
                    carta1.classList.add("carta-girada");
                    carta2.classList.add("carta-girada");
                    carta1.textContent = "?";
                    carta2.textContent = "?";
                }, 1000);
            }
            cartasGiradas = [];

        }
    } 
}

function cuentaTiempo() {
    tiempo = Math.floor((Date.now()-tiempoComienzo)/1000);
    document.querySelector("#tiempo").textContent = `Tiempo ${tiempo} seg. (${tiempoMaximo-tiempo})`; //Aparece una vez que empecemos a jugar

    if (tiempo > tiempoMaximo) {
        finJuego("¡Se acabó el tiempo!")
    }
}

botonStart.addEventListener("click", jugar);