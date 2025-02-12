let tPasado = Date.now(); // Guarda el valor actual de los milisegundos desde el 1 de enero de 1970
console.log("milisegundos", tPasado); // Imprime el valor de tPasado (tiempo en milisegundos) en la consola

function futuro() { // Define la función "futuro" que se ejecutará después de un tiempo determinado
    const tActual = Date.now(); // Obtiene el valor actual de los milisegundos desde el 1 de enero de 1970
    console.log("Actual", tActual, "han pasado:", tActual - tPasado, "milisegundos"); // Imprime el tiempo actual y los milisegundos que han pasado desde tPasado
}

let mitimeout = setTimeout(futuro, 5000); // Establece un temporizador para ejecutar la función "futuro" después de 5 segundos (5000 milisegundos)
console.log("Estoy después del setTimeout"); // Imprime un mensaje indicando que el código ha continuado después de configurar el temporizador

document.querySelector("#boton").addEventListener("click", () => { // Añade un evento para cuando se haga clic en el botón con id "boton"
    clearTimeout(mitimeout); // Cancela el temporizador asociado a mitimeout
    console.log("desactivado el temporizador"); // Imprime en la consola que el temporizador ha sido desactivado
});

document.querySelector("#ampliar").addEventListener("click", () => { // Añade un evento para cuando se haga clic en el botón con id "ampliar"
    clearTimeout(mitimeout); // Cancela el temporizador anterior asociado a mitimeout
    mitimeout = setTimeout(futuro, 5000); // Reinicia el temporizador para ejecutar la función "futuro" después de otros 5 segundos
    console.log("ampliado 5seg más el temporizador"); // Imprime en la consola que el temporizador ha sido ampliado en 5 segundos
});



/* Segunda Parte: Explicación Detallada 



let tPasado = Date.now();
console.log("milisegundos", tPasado);
let tPasado = Date.now();: Utiliza Date.now() para obtener la cantidad de milisegundos transcurridos desde el 1 de enero de 1970 hasta el momento en que se ejecuta el código. Este valor se almacena en la variable tPasado.
console.log("milisegundos", tPasado);: Imprime en la consola el valor de tPasado, mostrando los milisegundos desde el inicio de la era Unix.

function futuro() {
    const tActual = Date.now();
    console.log("Actual", tActual, "han pasado:", tActual - tPasado, "milisegundos");
}
function futuro() {: Define una función llamada futuro que se ejecutará después de un tiempo especificado.
const tActual = Date.now();: Obtiene el tiempo actual en milisegundos.
console.log("Actual", tActual, "han pasado:", tActual - tPasado, "milisegundos");: Imprime en consola el tiempo actual y la diferencia entre el tiempo actual y tPasado, lo que indica cuántos milisegundos han pasado desde que se guardó tPasado.

let mitimeout = setTimeout(futuro, 5000);
console.log("Estoy después del setTimeout");
let mitimeout = setTimeout(futuro, 5000);: Establece un temporizador que ejecutará la función futuro después de 5 segundos (5000 milisegundos) y guarda el identificador del temporizador en la variable mitimeout.
console.log("Estoy después del setTimeout");: Imprime un mensaje que indica que el código sigue ejecutándose inmediatamente después de configurar el temporizador, sin esperar los 5 segundos.

document.querySelector("#boton").addEventListener("click", () => {
    clearTimeout(mitimeout);
    console.log("desactivado el temporizador");
});
document.querySelector("#boton").addEventListener("click", () => {...});: Asocia un evento de clic al elemento con id "boton". Cuando se haga clic en ese botón, se ejecutará el código dentro de la función.
clearTimeout(mitimeout);: Cancela el temporizador almacenado en mitimeout, deteniendo la ejecución de la función futuro que estaba programada para dentro de 5 segundos.
console.log("desactivado el temporizador");: Imprime un mensaje que indica que el temporizador ha sido desactivado.

document.querySelector("#ampliar").addEventListener("click", () => {
    clearTimeout(mitimeout);
    mitimeout = setTimeout(futuro, 5000);
    console.log("ampliado 5seg más el temporizador");
});
document.querySelector("#ampliar").addEventListener("click", () => {...});: Asocia un evento de clic al elemento con id "ampliar". Cuando se haga clic en ese botón, se ejecutará el código dentro de la función.
clearTimeout(mitimeout);: Cancela el temporizador previamente establecido.
mitimeout = setTimeout(futuro, 5000);: Establece un nuevo temporizador para ejecutar la función futuro después de otros 5 segundos y guarda su identificador en mitimeout.
console.log("ampliado 5seg más el temporizador");: Imprime un mensaje indicando que el temporizador ha sido ampliado en 5 segundos.

 */