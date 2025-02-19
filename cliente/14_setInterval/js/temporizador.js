let tiempo = 10;
const reloj = document.querySelector("#tempo");

let temporizador = setInterval(() => {
    tiempo--;
    reloj.textContent = tiempo;

    if (tiempo == 0) {
        clearInterval(temporizador);
        alert("BOOOOOOM");
    }
}, 1000);