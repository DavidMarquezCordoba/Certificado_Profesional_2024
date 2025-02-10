let tPasado = Date.now();
console.log("tiempo pasado", tPasado);
let veces = 1;
let tTotal = 0;

let miInterval = setInterval(() => {
    let tActual = Date.now();
    console.log("tiempo pasado", tActual-tPasado);
    for (let index = 0; index < 2000; index++) {
        console.log(`setTimeout ${veces}`);
    }
    tTotal += tActual-tPasado;
    tPasado = tActual;
    if(veces >= 10){
        clearInterval(miInterval);
        console.log("total",tTotal);
    } else {
        veces++;
    }
}, 100);
