let tiempo = 10;
const reloj = document.querySelector("#tempo");

let temporizador = setInterval(() => {
    (tiempo <= 0)?clearInterval(temporizador):tiempo--;
    reloj.textContent = tiempo;
}, 1000);