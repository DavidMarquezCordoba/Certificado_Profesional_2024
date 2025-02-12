let tiempo = 10; // Inicializa la variable "tiempo" en 10, que será el valor del temporizador que se descontará en cada segundo.
const reloj = document.querySelector("#tempo"); // Obtiene el elemento del DOM con el id "tempo" y lo guarda en la constante "reloj".

let temporizador = setInterval(() => { // Crea un temporizador con setInterval que ejecuta la función dentro del setInterval cada 1000 milisegundos (1 segundo).
    (tiempo <= 0)?clearInterval(temporizador):tiempo--; // Si "tiempo" es menor o igual a 0, se detiene el temporizador con clearInterval. Si no, se decrementa el valor de "tiempo" en 1.
    reloj.textContent = tiempo; // Actualiza el contenido de texto del elemento "reloj" con el nuevo valor de "tiempo".
}, 1000); // Establece que la función se ejecute cada 1000 milisegundos (1 segundo).







/* Segunda Parte: Explicación Detallada 



let tiempo = 10;
let tiempo = 10;: Inicializa la variable tiempo en 10. Esta variable va a representar el valor del temporizador y será decrementada cada segundo.



const reloj = document.querySelector("#tempo");
const reloj = document.querySelector("#tempo");: Selecciona el elemento del DOM con el id="tempo" y lo asigna a la constante reloj. Este es el lugar en la interfaz de usuario donde se mostrará el tiempo restante del temporizador.



let temporizador = setInterval(() => { 
let temporizador = setInterval(() => { ... }, 1000);: Crea un temporizador usando setInterval. La función que se pasa a setInterval se ejecutará cada 1000 milisegundos (es decir, cada segundo).



    (tiempo <= 0)?clearInterval(temporizador):tiempo--;
(tiempo <= 0)?clearInterval(temporizador):tiempo--;: Esta es una expresión condicional (ternaria) que verifica si el valor de tiempo es menor o igual a 0.
Si es true (el tiempo ha llegado a 0 o ha pasado), se detiene el temporizador con clearInterval(temporizador), lo que evita que la función se siga ejecutando.
Si es false (el tiempo no ha llegado a 0), se decrementa el valor de tiempo en 1 con tiempo--.




    reloj.textContent = tiempo;
reloj.textContent = tiempo;: Actualiza el contenido de texto del elemento reloj con el nuevo valor de tiempo. Esto refleja el cambio en la interfaz de usuario, mostrando el tiempo restante.



}, 1000);
}, 1000);: Finaliza la llamada a setInterval, indicando que la función interna se ejecutará cada 1000 milisegundos (1 segundo), repitiéndose hasta que se detenga. */