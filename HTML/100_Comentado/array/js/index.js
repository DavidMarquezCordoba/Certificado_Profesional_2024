
// Explicación general de cada parte del código:

// Creación y manipulación de arrays:

// Se muestran diferentes formas de crear un array, con valores constantes o usando el constructor de arrays.
// console.log y console.table se usan para visualizar el contenido de los arrays en consola.
// Métodos de arrays:

// forEach(): Itera sobre todos los elementos de un array y ejecuta una función sobre cada uno de ellos.
// push() y unshift(): Añaden elementos al final y al principio de un array, respectivamente.
// pop() y shift(): Elimina elementos del final y del principio de un array, respectivamente.
// splice(): Modifica el array, eliminando o añadiendo elementos en una posición específica.
// Operadores REST y SPREAD:

// REST: Se usa en la declaración de la función numMayor para capturar valores pasados como parámetros y convertirlos en un array.
// SPREAD: Se usa dentro de la misma función para separar los valores del array en parámetros individuales cuando los imprime.
// Este código es un buen ejemplo de cómo trabajar con arrays, manipulando sus valores, y cómo usar operadores como REST y SPREAD para gestionar parámetros de funciones.


// Creación de un Array con 4 valores
const nombres = ["pepe", "juan", "jose", "miguel"];
console.log(nombres); // Muestra el array en consola
console.table(nombres); // Muestra el array en formato tabla

// Creación de un Array con 4 valores usando el constructor
const nombresConstructor = new Array("pepe", "juan", "jose", "miguel");
console.log(nombresConstructor); // Muestra el array creado con el constructor
console.table(nombresConstructor); // Muestra el array en formato tabla

// Ejemplo de Array con valores de diferentes tipos
const datos = ["Hola", true, 12, null, { nombre: "Pepe", edad: 28 }, [31, 28, 31]];
console.log(datos); // Muestra el array en consola
console.table(datos); // Muestra el array en formato tabla

// Iteración en un Array con el método forEach
console.log("forEach");
datos.forEach(function (dato) {
    console.log("dato:", dato); // Itera sobre cada elemento e imprime el valor en consola
});

// Añadimos un valor directamente en la posición número 20
datos[20] = "posición 20"; // Se añade un valor en la posición 20
console.table(datos); // Muestra el array actualizado en formato tabla

// Escribimos los datos uno a uno, no todos juntos como array
datos.forEach(function (dato) {
    console.log("dato:", dato); // Imprime los elementos individualmente
});

console.log("dato en la posición 16 (15):", datos[15]); // Muestra el dato en la posición 15 (nota que los índices empiezan desde 0)

// datos.length nos devuelve el número de valores que tiene el array, al haber creado antes datos[20], automáticamente este array tiene 21 elementos desde 0 a 20
console.log(datos.length); // Muestra la longitud del array (21 elementos)

// datos[5].length nos devuelve el número de valores que tiene el array secundario que hay en la posición 5 del array datos
console.log(datos[5].length); // Muestra la longitud del array en la posición 5 (array [31, 28, 31])

// datos[0].length nos devuelve el número de letras que tiene el string que hay en la posición 0 del array datos
console.log(datos[0].length); // Muestra la longitud del string "Hola" (4 caracteres)

// datos[1] y datos[2] nos devuelven undefined porque el tipo de valores que tiene la posición 1 y 2 del array datos no aceptan el método length
console.log(datos[1].length); // Devuelve undefined, ya que el valor es un booleano (true)
console.log(datos[2].length); // Devuelve undefined, ya que el valor es un número (12)

// Insertamos el valor "final" al final del array
console.log(datos.push("final")); // Añade el valor "final" al final y devuelve la nueva longitud del array
console.table(datos); // Muestra el array actualizado en formato tabla

// Insertamos el valor "inicio" al inicio del array
console.log(datos.unshift("inicio")); // Añade el valor "inicio" al principio y devuelve la nueva longitud del array
console.table(datos); // Muestra el array actualizado en formato tabla

// Quitamos el valor que está al final del array y nos devuelve el valor quitado
console.log(datos.pop()); // Elimina el último valor del array ("final") y lo muestra
console.table(datos); // Muestra el array actualizado en formato tabla

// Quitamos el valor que está al inicio del array y nos devuelve el valor quitado
console.log(datos.shift()); // Elimina el primer valor del array ("inicio") y lo muestra
console.table(datos); // Muestra el array actualizado en formato tabla

// Quitamos el valor que está en la posición 1 del array y desde ahí, quitamos 2 valores
console.log(datos.splice(1, 2)); // Elimina los elementos en las posiciones 1 y 2 (empieza en 1, elimina 2 valores)
console.table(datos); // Muestra el array actualizado en formato tabla

// Quitamos el valor que está en la posición 1 del array y desde ahí, quitamos 1 valor, y añadimos "tercer argumento"
console.log(datos.splice(1, 1, "tercer argumento")); // Elimina el valor en la posición 1 y agrega "tercer argumento"
console.table(datos); // Muestra el array actualizado en formato tabla

// Operador REST convierte valores separados en valores pertenecientes a un array llamado numeros
function numMayor(...numeros) { // El operador REST recibe varios valores como un array
    let elMayor = numeros[0]; // Inicializa el mayor valor como el primer valor del array
    numeros.forEach(function (numero) { // Itera sobre todos los números
        if (elMayor < numero) // Compara el mayor valor con el siguiente número
            elMayor = numero; // Si el número es mayor, lo asigna como el nuevo mayor
    });
    console.log(elMayor); // Muestra el mayor valor encontrado
    console.log(numeros); // Muestra todos los números pasados como array
    console.log(...numeros); // Muestra los números como valores separados por comas
}

// Aquí llamamos a la función dándole un número indeterminado de valores separados por comas
numMayor(21, 5, 39, 12); // El operador REST convierte los valores pasados en un array dentro de la función
