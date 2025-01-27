// SETTIMEOUT

let tPasado = Date.now(); //Milisegundos desde 1970 hasta la actualidad
console.log("milisegundos", tPasado);

// let miTimeout = setTimeout (() =>{
//     const tActual = Date.now();
//     console.log("Actual", tActual, " han pasado: ", tActual-tPasado);
// }, 5000);


// console.log("Estoy  después del setTimeOut");


function futuro() {
    const tActual = Date.now();
    console.log("Actual", tActual, " han pasado: ", tActual-tPasado);
}

let miTimeout = setTimeout(futuro, 5000);
console.log("Estoy después del setTimeout");

document.querySelector("#boton").addEventListener("click", () =>{
    clearTimeout(miTimeout);
    console.log("He desactivado el temporizador");
})

document.querySelector("#ampliar").addEventListener("click", () => {
    clearTimeout(miTimeout);
    miTimeout = setTimeout (futuro, 5000);
    console.log("ampliado 5sg más el temporizador");
})

// settimeout => temporizador una sola vez
// setInterval => que se repita cada X tiempo

// Creamos un setInterval