// Creamos un setInterval con un setTimeout
let tPasado = Date.now();
console.log(tPasado);

let veces = 1;
let tTotal = 0;

let interTimeout = setTimeout(
    function miFuncion() {
        const tActual = Date.now();
        console.log(`Ha pasado ${tActual-tPasado} milisegundos`);
        for (let index = 0; index < 2000; index++) {
            console.log(`setTimeout ${veces}`);
        }
        tTotal += (tActual-tPasado);
        tPasado = tActual;
        interTimeout = setTimeout(miFuncion, 100);
        if(veces >= 10) {
            clearTimeout(interTimeout);
            console.log("tiempo total", tTotal);
        } else {
            veces++;
        }
    }
, 100);