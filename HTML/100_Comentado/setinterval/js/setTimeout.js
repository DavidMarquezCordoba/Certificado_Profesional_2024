let tPasado = Date.now(); // Obtiene el tiempo actual en milisegundos desde el 1 de enero de 1970 y lo guarda en tPasado
console.log(tPasado); // Imprime el valor de tPasado en la consola, el cual es el tiempo en milisegundos desde el 1 de enero de 1970

let veces = 1; // Inicializa la variable "veces" con el valor 1, que llevará el conteo de cuántas veces se ejecuta la función
let tTotal = 0; // Inicializa la variable "tTotal" en 0, que acumulará el tiempo total transcurrido en las ejecuciones

let interTimeout = setTimeout( // Inicia un setTimeout que ejecuta la función miFuncion después de 100ms
    function miFuncion() { // Define la función miFuncion que se ejecutará cada vez que se llame el setTimeout
        const tActual = Date.now(); // Obtiene el tiempo actual en milisegundos
        console.log(`Ha pasado ${tActual - tPasado} milisegundos`); // Calcula y muestra en consola el tiempo que ha pasado desde la última ejecución

        for (let index = 0; index < 2000; index++) { // Realiza un bucle que se repite 2000 veces
            console.log(`setTimeout ${veces}`); // Imprime en la consola "setTimeout" seguido del número de veces en que está
        }

        tTotal += (tActual - tPasado); // Suma el tiempo transcurrido desde la última ejecución al tiempo total
        tPasado = tActual; // Actualiza tPasado con el valor de tActual para el siguiente cálculo de intervalo

        interTimeout = setTimeout(miFuncion, 100); // Llama a setTimeout nuevamente para ejecutar la función miFuncion después de 100ms
        if (veces >= 10) { // Verifica si la variable "veces" ha llegado a 10
            clearTimeout(interTimeout); // Si "veces" ha llegado a 10, cancela el setTimeout, deteniendo las futuras ejecuciones
            console.log("tiempo total", tTotal); // Imprime el tiempo total acumulado en tTotal
        } else {
            veces++; // Si "veces" es menor a 10, incrementa el contador de veces para la siguiente ejecución
        }
    }
, 100); // Inicializa el setTimeout con un retardo de 100 milisegundos






/* Segunda Parte: Explicación Detallada 



let tPasado = Date.now(); 
console.log(tPasado);
let tPasado = Date.now();: Obtiene el tiempo actual (en milisegundos desde el 1 de enero de 1970) y lo guarda en la variable tPasado. Este valor servirá como referencia para calcular el tiempo transcurrido en cada ejecución de la función.
console.log(tPasado);: Imprime en la consola el valor de tPasado, mostrando el tiempo actual cuando se ejecuta el código.



let veces = 1;
let tTotal = 0;
let veces = 1;: Define una variable llamada veces y la inicializa en 1. Esta variable llevará la cuenta de cuántas veces se ha ejecutado la función.
let tTotal = 0;: Inicializa tTotal en 0. Esta variable acumulará el tiempo total transcurrido entre cada ejecución de la función.


let interTimeout = setTimeout(
    function miFuncion() { 
let interTimeout = setTimeout(...);: Crea un temporizador setTimeout que ejecuta la función miFuncion después de un retardo de 100 milisegundos. La función miFuncion se pasará como argumento al setTimeout.



    const tActual = Date.now(); 
    console.log(`Ha pasado ${tActual - tPasado} milisegundos`);
const tActual = Date.now();: Almacena el tiempo actual en milisegundos en la variable tActual.
console.log(...);: Imprime en consola el tiempo que ha transcurrido desde la última ejecución, calculado como la diferencia entre tActual y tPasado.



    for (let index = 0; index < 2000; index++) { 
        console.log(`setTimeout ${veces}`);
    }
for (let index = 0; index < 2000; index++) { ... }: Realiza un bucle for que ejecuta el código dentro de él 2000 veces.
console.log(...): Imprime en la consola "setTimeout" seguido del número de ejecución almacenado en la variable veces.



    tTotal += (tActual - tPasado); 
    tPasado = tActual; 
tTotal += (tActual - tPasado);: Suma el tiempo que ha pasado desde la última ejecución (la diferencia entre tActual y tPasado) al total acumulado en tTotal.
tPasado = tActual;: Actualiza tPasado con el valor de tActual para el próximo cálculo de intervalo en la siguiente ejecución.




    interTimeout = setTimeout(miFuncion, 100);
interTimeout = setTimeout(miFuncion, 100);: Repite el setTimeout, programando la ejecución de miFuncion nuevamente después de 100 milisegundos.



    if (veces >= 10) { 
        clearTimeout(interTimeout); 
        console.log("tiempo total", tTotal); 
    } else {
        veces++; 
    }
if (veces >= 10) { ... }: Si la variable veces es mayor o igual a 10, se ejecuta el bloque de código dentro del if.
clearTimeout(interTimeout);: Detiene el setTimeout, evitando que la función miFuncion se ejecute nuevamente.
console.log("tiempo total", tTotal);: Muestra en consola el tiempo total acumulado en tTotal.
veces++;: Si la condición no se cumple, incrementa el contador veces en 1 para la siguiente ejecución.



}, 100); // Inicializa el setTimeout con un retardo de 100 milisegundos
}, 100);: El primer setTimeout se ejecutará después de un retardo de 100 milisegundos. Esto hace que miFuncion se ejecute por primera vez después de 100 milisegundos y continúe ejecutándose a intervalos de 100 ms hasta que se cumpla la condición de veces >= 10. */