let tPasado = Date.now();
let veces = 1;
let tTotal = 0;

let miInterval = setInterval(() => {
    let tActual = Date.now();
    console.log("Tiempo pasado ", (tActual-tPasado));
    
    for (let i = 0; i < 2000; i++) {
        console.log(`setTimeout ${veces}`);
    }

    tTotal += (tActual-tPasado);
    tActual = tPasado;

    if (veces >= 10) {
        clearInterval(miInterval);
        console.log("Total: ", tTotal);
    } else {
        veces++;
    }
}, 100);