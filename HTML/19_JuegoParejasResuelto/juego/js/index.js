let imagenes = ['🫥','😊','💕','😎','😢','😒','😁','😉'];
let tiempoMaximo = 12;
const tablero = document.querySelector("#tablero");
const botonStart = document.querySelector(".boton-start");
const botonEditar = document.querySelector(".boton-editar");

let cartasGiradas = [];
let cartas;

let cartasEmparejadas = 0;
let tiempo = 0;
let intentos = 0;
let tiempoComienzo = 0;

let temporizador;


function jugar() {
    // Reiniciamos las variables por si están modificadas por un posible juego anterior
    cartasGiradas = [];
    cartasEmparejadas = 0;
    intentos = 0;
    tiempo = 0;

    // Actualizo el momento de empezar a jugar para contar el tiempo transcurrido
    tiempoComienzo = Date.now();

    // Si no he jugado antes no está creado el h2 del tiempo, entonces lo creo
    // si está creado le cambio su textContent
    if(document.querySelector("#tiempo") === null){
        const h2 = document.createElement("h2");
        h2.id = "tiempo";
        h2.textContent = `Tiempo: ${tiempo} seg. (${tiempoMaximo-tiempo})`
        document.body.insertBefore(h2, tablero);
    } else {
        document.querySelector("#tiempo").textContent = `Tiempo: ${tiempo} seg. (${tiempoMaximo-tiempo})`
    }

    // Si no he jugado antes no está creado el h2 de intentos, entonces lo creo
    // si está creado le cambio su textContent
    if(document.querySelector("#intentos") === null){
        const h2 = document.createElement("h2");
        h2.id = "intentos";
        h2.textContent = `Intentos: ${intentos}`;
        document.body.insertBefore(h2, tablero);
    } else {
        document.querySelector("#intentos").textContent = `Intentos: ${intentos}`;
    }

    // Si no he jugado antes no está creado el h2 de contar las parejas, entonces lo creo
    // si está creado le cambio su textContent
    if(document.querySelector("#parejas") === null){
        const h2 = document.createElement("h2");
        h2.id = "parejas";
        h2.textContent = `Cartas Emparejadas: ${cartasEmparejadas}`;
        document.body.insertBefore(h2, tablero);
    } else {
        document.querySelector("#parejas").textContent = `Cartas Emparejadas: ${cartasEmparejadas}`;
    }

    // Creo el temporizador para contar el tiempo transcurrido
    temporizador = setInterval(cuentaTiempo, 1000);

    // creo mi baraja y la barajo aleatoriamente
    cartas = [...imagenes,...imagenes].sort(() => Math.random()-0.5);

    // Pinto la baraja en el tablero
    cartas.forEach((carta) =>{
        const micarta = document.createElement("div");
        micarta.classList.add("carta");
        micarta.textContent = "?";
        micarta.dataset.imagen = carta;
        tablero.appendChild(micarta);
    });

    // creo el detector de eventos de todas las cartas por burbujeo y delegación de evento
    tablero.addEventListener("click", pulsaCarta);
    // oculto los botones de Jugar y Editar
    botonStart.style.display = "none";
    botonEditar.style.display = "none";
}

// gestión del evento de tocar una carta
function pulsaCarta(evento) {    
    const cartaPulsada = evento.target;
    // Miro cuantas cartas giradas y emparejadas tengo
    const numCartasGiradas = document.querySelectorAll(".carta-girada").length;
    const numCartasEmparejadas = document.querySelectorAll(".carta-emparejada").length;

    // compruebo las condiciones necesarias para girar una carta
    if(cartaPulsada.classList.contains("carta") && !cartaPulsada.classList.contains("carta-girada") && !cartaPulsada.classList.contains("carta-emparejada") && (numCartasGiradas-numCartasEmparejadas) < 2) {
        cartaPulsada.classList.add("carta-girada");
        cartaPulsada.innerHTML = cartaPulsada.dataset.imagen;

        // añado la carta pulsada a mi array de cartasGiradas
        cartasGiradas = [...cartasGiradas, cartaPulsada];
        // podría haberlo hecho también con push

        // compruebo que hay 2 cartas giradas para comprobar si son iguales o no
        if(cartasGiradas.length == 2) {
            intentos++;
            document.querySelector("#intentos").textContent = `Intentos: ${intentos}`;
            const [carta1, carta2] = cartasGiradas;  // creamos las constantes carta1 y carta2 con "destructuring"
            // miramos si son iguales comprobando su data-imagen que creamos al pintar las cartas
            if(carta1.dataset.imagen === carta2.dataset.imagen) {
                carta1.classList.add("carta-emparejada");
                carta2.classList.add("carta-emparejada");
                cartasEmparejadas += 2;
                document.querySelector("#parejas").textContent = `Cartas Emparejadas: ${cartasEmparejadas}`;
            } else {
                // si no son iguales las volvemos a girar pasado 1segundo
                setTimeout(() => {
                    carta1.classList.remove("carta-girada");
                    carta2.classList.remove("carta-girada");     
                    carta1.textContent = "?";             
                    carta2.textContent = "?";             
                }, 1000);
            }
            // limpiamos nuestro array cartasGiradas
            cartasGiradas = [];
        }
        // comprobamos si todas las cartas están emparejadas llamamos a finJuego
        if(numCartasEmparejadas === cartas.length){
            // Aquí llamamos a finJuego 500milisegundos después para ver que en un setTimeout los argumentos de las funciones se envian por separado después del tiempo
            setTimeout(finJuego, 500,"¡Felicidades, ganaste!!!!");
        }
    }
}

// función que va contando el tiempo de juego transcurrido
function cuentaTiempo() {
    tiempo = Math.floor((Date.now()-tiempoComienzo)/1000);
    // si ha pasado más del tiempoMáximo llamamos a la función finJuego
    if(tiempo > tiempoMaximo) {
        finJuego("¡Se acabó el tiempo!");
        tiempo = tiempoMaximo; // para que no salga -1 en el contador
    }
    document.querySelector("#tiempo").textContent = `Tiempo: ${tiempo} seg. (${tiempoMaximo-tiempo})`;
}

// función que borra el temporizador, quita el detector de eventos sobre el tablero y enseña de nuevo los botones de Jugar y editar
function finJuego(mensaje) {
    clearInterval(temporizador);
    tablero.removeEventListener("click", pulsaCarta);
    botonStart.style.display = "block";
    botonEditar.style.display = "block";
}

// creamos el detector de eventos para el botón de Jugar
botonStart.addEventListener("click", jugar);