// setTimeout

let tPasado = Date.now();
console.log("milisegundos", tPasado);

function futuro() {
    const tActual = Date.now();
    console.log("Actual", tActual,"han pasado:",tActual-tPasado,"milisegundos");
}

let mitimeout = setTimeout(futuro, 5000);
console.log("Estoy después del setTimeout");

document.querySelector("#boton").addEventListener("click", () => {
    clearTimeout(mitimeout);
    console.log("desactivado el temporizador");
});

document.querySelector("#ampliar").addEventListener("click", () => {
    clearTimeout(mitimeout);
    mitimeout = setTimeout(futuro, 5000);
    console.log("ampliado 5seg más el temporizador");
});


