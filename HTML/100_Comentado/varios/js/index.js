
// Explicación general del código:

// Este código es una serie de ejemplos prácticos que muestran cómo utilizar varias funciones de los arrays en JavaScript como .forEach(), 
// .map(), .filter(), .reduce(), .sort(), etc. Aquí se implementan varias operaciones matemáticas sobre arrays y se muestra cómo ordenar y 
// filtrar arrays de números y objetos, así como realizar operaciones de reducción como la suma y el producto de valores. Además, el 
// código incluye ejemplos de uso de las funciones find() y some(), que permiten buscar elementos dentro de los arrays y comprobar si 
// alguno cumple con una condición.

// En términos de operaciones:

// .forEach(): Itera sobre cada elemento de un array y realiza una operación sobre él.
// .map(): Crea un nuevo array con los resultados de la aplicación de una función a cada elemento del array original.
// .filter(): Filtra un array basado en una condición y crea un nuevo array con los elementos que la cumplen.
// .reduce(): Acumula un valor basado en una operación (como suma, producto, etc.) aplicada a todos los elementos del array.
// .sort(): Ordena los elementos de un array según un criterio especificado.
// Con este código puedes practicar operaciones comunes con arrays en JavaScript y entender cómo manipularlos de manera efectiva.


// ==================================================
// Array de valores iniciales
// ==================================================
let valores = ["+", 1, 6, 8, 7]; // Array que contiene un operador y números.

// ==================================================
// Función `operacion`: Realiza operaciones matemáticas
// ==================================================
function operacion(opera, ...misvalores) {
    let subtotal;
    if (opera == "+") { // Si el operador es "+", realiza una suma.
        subtotal = 0; // Inicializa el subtotal en 0.
        misvalores.forEach(valor => {
            subtotal += valor; // Suma cada valor al subtotal.
        });
    } else if (opera == "*") { // Si el operador es "*", realiza una multiplicación.
        subtotal = 1; // Inicializa el subtotal en 1.
        misvalores.forEach(valor => {
            subtotal *= valor; // Multiplica cada valor al subtotal.
        });
    } else {
        subtotal = "No entiendo esa operación"; // Si el operador no es reconocido, devuelve un mensaje.
    }
    return subtotal; // Devuelve el resultado de la operación.
}

// Llama a la función `operacion` con los valores del array `valores`.
let total = operacion(...valores);
console.log(total); // Muestra el resultado en la consola.

console.log(""); // Línea en blanco para separar en la consola.

// ==================================================
// Método `.sort`: Ordena arrays
// ==================================================
valores = [1, 2, 3, 4, 5]; // Array de números.

console.log("valores antes de ordenarlo:", valores); // Muestra el array antes de ordenar.

// Ordena el array de forma aleatoria.
valores.sort(() => Math.random() - 0.5);
console.log("valores después de ordenarlo aleatoriamente:", valores);

// Ordena el array de mayor a menor.
valores.sort((a, b) => b - a);
console.log("valores después de ordenarlo de mayor a menor:", valores);

// Ordena el array de menor a mayor.
valores.sort((a, b) => a - b);
console.log("valores después de ordenarlo de menor a mayor:", valores);

// Ordena el array colocando primero los números pares.
valores.sort((a, b) => a % 2 - b % 2);
console.log("valores después de ordenarlo primero los pares:", valores);

// Ordena el array colocando primero los números impares.
valores.sort((a, b) => b % 2 - a % 2);
console.log("valores después de ordenarlo primero los impares:", valores);

// Ordena el array colocando primero los valores mayores o iguales a 3.
valores.sort((a, b) => (a >= 3) ? -1 : 1);
console.log("valores después de ordenarlo primero los valores mayor que 3:", valores);

console.log(""); // Línea en blanco para separar en la consola.

// ==================================================
// Ordenar palabras por longitud
// ==================================================
let palabras = ["hola", "adios", "buenos dias", "buenas noches", "hasta luego"]; // Array de palabras.
console.log("valores antes de ordenar:", palabras); // Muestra el array antes de ordenar.

// Ordena las palabras por su longitud (de menor a mayor).
palabras.sort((a, b) => a.length - b.length);
console.log("valores después de ordenar por tamaño de palabra:", palabras);

// ==================================================
// Ordenar objetos por propiedad
// ==================================================
let personas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 16 },
    { nombre: "Pedro", edad: 20 }
]; // Array de objetos (personas).

console.table(personas); // Muestra el array de personas en forma de tabla.
console.log("Antes de ordenar por edad");

// Ordena las personas por edad de menor a mayor.
personas.sort((a, b) => a.edad - b.edad);
console.table(personas);
console.log("Ordenados por edad de menor a mayor");

// Ordena las personas por edad de mayor a menor.
personas.sort((a, b) => b.edad - a.edad);
console.table(personas);
console.log("Ordenados por edad de mayor a menor");

// Ordena las personas por nombre alfabéticamente (A-Z).
personas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.table(personas);
console.log("Ordenados por nombre alfabéticamente a-z");

// Ordena las personas por nombre alfabéticamente (Z-A).
personas.sort((a, b) => b.nombre.localeCompare(a.nombre));
console.table(personas);
console.log("Ordenados por nombre alfabéticamente z-a");

// ==================================================
// Método `.filter`: Filtra elementos de un array
// ==================================================
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array de números.

// Función para verificar si un número es primo.
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false; // Si es divisible, no es primo.
    }
    return num != 1; // Devuelve true si es primo y no es 1.
}

let resultado; // Variable para almacenar resultados.

// Filtra los números primos.
resultado = numeros.filter(esPrimo);
console.log("solo primos:", resultado);

// Filtra los números pares.
resultado = numeros.filter(num => num % 2 == 0);
console.log("solo pares:", resultado);

// Filtra los números impares.
resultado = numeros.filter(num => num % 2 != 0);
console.log("solo impares:", resultado);

// Filtra los números mayores o iguales a 7.
resultado = numeros.filter(num => num >= 7);
console.log("solo mayor o igual a 7:", resultado);

// Filtra los números entre 3 y 7.
resultado = numeros.filter(num => (num >= 3) && (num <= 7));
console.log("solo números entre 3 y 7:", resultado);

// Filtra las personas mayores de edad.
resultado = personas.filter(persona => persona.edad >= 18);
console.table(resultado);
console.log("solo personas mayores de edad");

// Filtra las personas con nombre "Juan".
resultado = personas.filter(persona => persona.nombre == "Juan");
console.table(resultado);
console.log(`Juan tiene ${resultado[0].edad}`); // Muestra la edad de Juan.

// ==================================================
// Método `.map`: Transforma elementos de un array
// ==================================================
// Crea un nuevo array con los cuadrados de los números.
resultado = numeros.map(num => num * num);
console.log("cuadrados:", resultado);

// Crea un nuevo array con los números aumentados en un 21% (simulando IVA).
resultado = numeros.map(num => num * 1.21);
console.log("añadir iva:", resultado);

console.log(""); // Línea en blanco para separar en la consola.

// ==================================================
// Método `.reduce`: Reduce un array a un único valor
// ==================================================
let precios = [10, 20, 30, 40, 50]; // Array de precios.
console.log("Estos son nuestros precios", precios);

// Suma todos los precios.
resultado = precios.reduce((total, precio) => total + precio, 0);
console.log("mi suma:", resultado);

// Multiplica todos los precios.
resultado = precios.reduce((total, precio) => total * precio, 1);
console.log("mi producto:", resultado);

// ==================================================
// Filtrado de productos
// ==================================================
let productos = [
    { nombre: "banana amarilla", color: "amarillo", precio: 1 },
    { nombre: "manzana verde", color: "verde", precio: 2 },
    { nombre: "kiwi verde", color: "verde", precio: 1.5 }
]; // Array de productos.

console.table(productos); // Muestra los productos en forma de tabla.
console.log("mis productos");

// Filtra los productos de color verde.
resultado = productos.filter(producto => producto.color == "verde");
console.table(resultado);
console.log("productos de color verde:");

// Filtra los productos con precio igual a 1€.
resultado = productos.filter(producto => producto.precio == 1);
console.table(resultado);
console.log("productos de precio 1€:");

// Filtra los productos con precio menor a 2€.
resultado = productos.filter(producto => producto.precio < 2);
console.table(resultado);
console.log("productos de precio menor a 2€:");

// Filtra los productos con precio entre 1€ y 2€.
resultado = productos.filter(producto => producto.precio > 1 && producto.precio < 2);
console.table(resultado);
console.log("productos de precio mayor a 1€ y menor a 2€:");

// Filtra los productos que contienen "verde" en su nombre.
resultado = productos.filter(producto => producto.nombre.includes("verde"));
console.table(resultado);
console.log("productos que contengan verde en su nombre:");

// Filtra productos aleatorios.
resultado = productos.filter(producto => Math.random() > 0.5);
console.table(resultado);
console.log("lista de productos aleatorios:");

// ==================================================
// Método `.find`: Encuentra el primer elemento que cumple una condición
// ==================================================
// Encuentra un producto aleatorio.
resultado = productos.find(producto => Math.random() > 0.5);
console.table(resultado);
console.log("me devuelve un producto aleatorio del array:");

// Encuentra el primer producto con precio entre 1€ y 2€.
resultado = productos.find(producto => producto.precio > 1 && producto.precio < 2);
console.table(resultado);
console.log("el primer producto de precio mayor a 1€ y menor a 2€:");

// ==================================================
// Método `.some`: Verifica si algún elemento cumple una condición
// ==================================================
console.table(productos); // Muestra los productos en forma de tabla.

// Verifica si hay algún producto con precio entre 1€ y 2€.
resultado = productos.some(producto => producto.precio > 1 && producto.precio < 2);
console.log(resultado ? "si hay" : "no hay"); // Imprime "si hay" o "no hay".

// ==================================================
// Método `.every`: Verifica si todos los elementos cumplen una condición
// ==================================================
console.table(productos); // Muestra los productos en forma de tabla.

// Verifica si todos los productos tienen un precio entre 0€ y 3€.
resultado = productos.every(producto => producto.precio > 0 && producto.precio < 3);
console.log(resultado ? "todos SI cumplen la condición" : "todos NO cumplen la condición");

// ==================================================
// Método `.includes`: Verifica si un valor está en el array
// ==================================================
console.log(numeros); // Muestra el array de números.

// Verifica si el número 5 está en el array.
resultado = numeros.includes(5);
console.log(resultado); // Imprime true o false.
console.log(resultado ? "Algún valor es igual al dado" : "NO hay ningún valor que sea igual al dado");

// ==================================================
// Método `.indexOf`: Encuentra la posición de un valor en el array
// ==================================================
// Busca la posición del número 5 en el array.
resultado = numeros.indexOf(5);
console.log(resultado); // Imprime la posición o -1 si no se encuentra.
console.log((resultado != -1) ? `He encontrado tu valor en la posición ${resultado}` : "No lo he encontrado");

// ==================================================
// Manipulación de `dataset`: Acceso a atributos data-*
// ==================================================
console.log("");
console.log("dataset");

// Accede al valor del atributo `data-mivalor`.
console.log(document.querySelector("#midiv").dataset.mivalor);

// Accede al valor del atributo `data-otro`.
console.log(document.querySelector("#midiv").dataset.otro);

// Cambia el valor del atributo `data-mivalor`.
document.querySelector("#midiv").dataset.mivalor = "he cambiado el valor";
console.log(document.querySelector("#midiv").dataset.mivalor); // Muestra el nuevo valor.

// ==================================================
// Uso de `Date`: Trabajo con fechas y tiempos
// ==================================================
console.log("");
console.log("Date: nos devuelve la fecha");

// Muestra la fecha actual en milisegundos desde el 1 de enero de 1970.
console.log("la fecha de hoy es " + Date.now());

let tiempo = Date.now(); // Almacena el tiempo actual.

// Crea un botón para medir el tiempo transcurrido.
const miboton = document.createElement("button");
miboton.textContent = "Pulsa"; // Añade texto al botón.
document.body.appendChild(miboton); // Añade el botón al body.

// Evento para mostrar el tiempo transcurrido al hacer clic.
miboton.addEventListener("click", () => {
    let ahora = parseInt((Date.now() - tiempo) / 1000); // Calcula los segundos transcurridos.
    alert(`Ha pasado ${ahora} segundos desde que se creó el DOM`); // Muestra el tiempo en una alerta.
});

// ==================================================
// Prevención del menú contextual
// ==================================================
// Evita que aparezca el menú contextual al hacer clic derecho.
document.addEventListener("contextmenu", evento => evento.preventDefault());

// ==================================================
// Tiempo de pulsación de un botón
// ==================================================
let intervalo; // Variable para almacenar el tiempo inicial.

// Crea un botón para medir el tiempo de pulsación.
const btnIntervalo = document.createElement("button");
btnIntervalo.textContent = "Intervalo"; // Añade texto al botón.
document.body.appendChild(btnIntervalo); // Añade el botón al body.

// Evento para almacenar el tiempo inicial al presionar el botón.
btnIntervalo.addEventListener("mousedown", () => intervalo = Date.now());

// Evento para calcular y mostrar el tiempo de pulsación al soltar el botón.
btnIntervalo.addEventListener("mouseup", () => alert(`Has estado pulsando ${parseInt((Date.now() - intervalo) / 1000)} segundos`));

// ==================================================
// Formato de fecha
// ==================================================
const fecha = new Date; // Crea un objeto de fecha con la fecha y hora actuales.

// Muestra la fecha en diferentes formatos.
console.log("string:", fecha.toString()); // Fecha en formato de cadena.
console.log("ISO:", fecha.toISOString()); // Fecha en formato ISO.
console.log("fecha en formato local:", fecha.toLocaleDateString()); // Fecha en formato local.
console.log("hora en formato local:", fecha.toLocaleTimeString()); // Hora en formato local.

// Arrays para nombres de días y meses.
const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
console.log("Día de la semana:", diaSemana[fecha.getDay()]); // Día de la semana.

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
console.log("mes:", meses[fecha.getMonth()]); // Mes del año.

// Otras propiedades de la fecha.
console.log("Día del mes:", fecha.getDate()); // Día del mes.
console.log("Año:", fecha.getFullYear()); // Año.
console.log("Hora:", fecha.getHours()); // Hora.
console.log("Minutos:", fecha.getMinutes()); // Minutos.
console.log("Segundos:", fecha.getSeconds()); // Segundos.
console.log("millis:", fecha.getMilliseconds()); // Milisegundos.

// Creación de una fecha específica.
let fechaConstructor = new Date(2020, 7, 2, 8, 25, 56, 156); // Año, mes (0-11), día, hora, minutos, segundos, milisegundos.
console.log("fecha constructor en formato local:", fechaConstructor.toLocaleDateString()); // Fecha en formato local.
console.log("ISO:", fechaConstructor.toISOString()); // Fecha en formato ISO.

// ==================================================
// CSS Transform: Aplicación de transformaciones CSS
// ==================================================
console.log("");
console.log("Transform");

// Crea un div rojo que rota al hacer clic.
const rojo = document.createElement("div");
rojo.classList.add("midiv", "rojo"); // Añade clases CSS.
rojo.textContent = "pulsa para rotar"; // Añade texto.
document.body.appendChild(rojo); // Añade el div al body.
rojo.addEventListener("click", () => rojo.classList.toggle("rotar")); // Alterna la clase "rotar" al hacer clic.

// Crea un div azul que se traslada al hacer clic.
const azul = document.createElement("div");
azul.classList.add("midiv", "azul"); // Añade clases CSS.
azul.textContent = "pulsa para trasladar"; // Añade texto.
document.body.appendChild(azul); // Añade el div al body.
azul.addEventListener("click", () => azul.classList.toggle("trasladar")); // Alterna la clase "trasladar" al hacer clic.

// Crea un div verde que escala al hacer clic.
const verde = document.createElement("div");
verde.classList.add("midiv", "verde"); // Añade clases CSS.
verde.textContent = "pulsa para escalar"; // Añade texto.
document.body.appendChild(verde); // Añade el div al body.
verde.addEventListener("click", () => verde.classList.toggle("escalar")); // Alterna la clase "escalar" al hacer clic.

// Crea un div amarillo que escala y traslada al hacer clic.
const amarillo = document.createElement("div");
amarillo.classList.add("midiv", "amarillo"); // Añade clases CSS.
amarillo.textContent = "pulsa para escalar y transladar"; // Añade texto.
document.body.appendChild(amarillo); // Añade el div al body.
amarillo.addEventListener("click", () => amarillo.classList.toggle("escalar-trasladar")); // Alterna la clase "escalar-trasladar" al hacer clic.

// Crea un div violeta que anima al hacer clic.
const violeta = document.createElement("div");
violeta.classList.add("midiv", "violeta"); // Añade clases CSS.
violeta.textContent = "pulsa para animar"; // Añade texto.
document.body.appendChild(violeta); // Añade el div al body.
violeta.addEventListener("click", () => violeta.classList.toggle("animar")); // Alterna la clase "animar" al hacer clic.

// ==================================================
// Modal: Creación de un modal interactivo
// ==================================================
// Crea un botón para abrir el modal.
const btnModal = document.createElement("button");
btnModal.textContent = "Abrir Modal"; // Añade texto.
document.body.appendChild(btnModal); // Añade el botón al body.

// Crea el modal.
const modal = document.createElement("div");
modal.classList.add("modal"); // Añade la clase "modal".
document.body.appendChild(modal); // Añade el modal al body.

// Evento para mostrar el modal al hacer clic en el botón.
btnModal.addEventListener("click", evento => {
    modal.classList.add("mostrar"); // Muestra el modal.
    document.body.classList.add("quieto"); // Evita el desplazamiento del body.
});

// Evento para ocultar el modal al hacer clic en él.
modal.addEventListener("click", evento => {
    modal.classList.remove("mostrar"); // Oculta el modal.
    document.body.classList.remove("quieto"); // Restaura el desplazamiento del body.
});