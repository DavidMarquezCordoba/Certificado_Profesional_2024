// Creamos un setInterval con un setTimeout
let tPasado = Date.now();
let veces = 1;
let tTotal = 0;

console.log("Estoy ejecutando");

// Dentro de 100 se va a ejecutar el código
let interTimeout = setTimeout( 
    function miFuncion() {
        const tActual = Date.now();
        console.log(`Ha pasado ${tActual-tPasado} milisegundos`);
        for (let i = 0; i < 2000; i++) {
            console.log(`setTimeout ${veces}`);
        }
        tTotal += (tActual - tPasado);
        tPasado = tActual;

        interTimeout = setTimeout(miFuncion, 100);

        if (veces >=10) {
            clearTimeout(interTimeout);
            console.log("Tiempo total ", tTotal);
            
        } else {
            veces++;
        }
    }
, 100);