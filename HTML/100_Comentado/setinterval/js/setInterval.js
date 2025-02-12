let tPasado = Date.now(); // Guarda el valor actual de los milisegundos desde el 1 de enero de 1970
console.log("tiempo pasado", tPasado); // Imprime el valor de tPasado en la consola

let veces = 1; // Inicializa la variable "veces" con el valor 1, que llevará un conteo de las iteraciones
let tTotal = 0; // Inicializa la variable "tTotal" con 0, que acumulará el tiempo total transcurrido

let miInterval = setInterval(() => { // Define una función que se ejecutará repetidamente con un intervalo de 100 milisegundos
    let tActual = Date.now(); // Obtiene el tiempo actual en milisegundos desde el 1 de enero de 1970
    console.log("tiempo pasado", tActual - tPasado); // Imprime el tiempo transcurrido desde la última ejecución

    for (let index = 0; index < 2000; index++) { // Realiza un ciclo for de 2000 iteraciones
        console.log(`setTimeout ${veces}`); // Imprime "setTimeout" seguido del número de veces en la que se encuentra
    }

    tTotal += tActual - tPasado; // Suma el tiempo transcurrido en este intervalo al total acumulado en tTotal
    tPasado = tActual; // Actualiza el valor de tPasado con el valor actual para el próximo cálculo de intervalo

    if (veces >= 10) { // Si el contador de veces alcanza 10, se detiene el intervalo
        clearInterval(miInterval); // Cancela el intervalo y detiene la ejecución repetida de la función
        console.log("total", tTotal); // Imprime el tiempo total acumulado en tTotal
    } else {
        veces++; // Incrementa el contador de veces en 1 para la siguiente iteración
    }
}, 100); // El intervalo se ejecuta cada 100 milisegundos





/* 
Segunda Parte: Explicación Detallada 




let tPasado = Date.now();
console.log("tiempo pasado", tPasado);
let tPasado = Date.now();: Almacena el valor actual de los milisegundos desde el 1 de enero de 1970 en la variable tPasado. Este será el tiempo inicial que servirá de referencia para calcular los intervalos.
console.log("tiempo pasado", tPasado);: Imprime en la consola el valor de tPasado, mostrando el tiempo en milisegundos desde el 1 de enero de 1970 al momento de la ejecución.

let veces = 1;
let tTotal = 0;
let veces = 1;: Inicializa una variable veces en 1, que se usará para llevar el registro de cuántas veces ha pasado por el intervalo.
let tTotal = 0;: Inicializa tTotal en 0, que acumulará el tiempo total transcurrido entre las ejecuciones del intervalo.



let miInterval = setInterval(() => { 
    let tActual = Date.now(); 
    console.log("tiempo pasado", tActual - tPasado);
let miInterval = setInterval(() => {...}, 100);: Define un intervalo de tiempo que ejecutará la función dentro del setInterval cada 100 milisegundos.
let tActual = Date.now();: Obtiene el tiempo actual en milisegundos y lo almacena en tActual.
console.log("tiempo pasado", tActual - tPasado);: Calcula y muestra en consola el tiempo transcurrido entre tPasado y tActual (el tiempo de ejecución del intervalo hasta ese momento).



    for (let index = 0; index < 2000; index++) { 
        console.log(`setTimeout ${veces}`); 
    }
for (let index = 0; index < 2000; index++) {: Ejecuta un bucle for que se repite 2000 veces.
console.log(setTimeout ${veces});: Imprime en la consola "setTimeout" seguido del número de veces que se ha ejecutado el intervalo, con el valor de veces.



    tTotal += tActual - tPasado; 
    tPasado = tActual; 
tTotal += tActual - tPasado;: Acumula el tiempo transcurrido entre la ejecución actual y la anterior en tTotal.
tPasado = tActual;: Actualiza tPasado con el valor de tActual para el próximo cálculo de intervalo en la siguiente ejecución.



    if (veces >= 10) { 
        clearInterval(miInterval); 
        console.log("total", tTotal); 
    } else {
        veces++; 
    }
if (veces >= 10) {: Verifica si el número de veces que se ha ejecutado el intervalo ha llegado a 10.
clearInterval(miInterval);: Si el contador veces alcanza 10, se cancela el intervalo y deja de ejecutarse.
console.log("total", tTotal);: Imprime el tiempo total acumulado en tTotal, mostrando cuánto tiempo ha transcurrido durante las 10 ejecuciones del intervalo.
veces++;: Si no ha llegado a 10, incrementa el contador veces para la siguiente iteración.

 */