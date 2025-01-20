// Declaramos el array de valores y su operación
const valores = ["*", 1, 6, 8, 7];

let total = operacion(...valores);
console.log(total);

function operacion(opera, ...misvalores) {
   
   let subTotal;

   if (opera == "+") {      
      subTotal = 0;
      misvalores.forEach(valor => {
         subTotal += valor;
      });
   } else if (opera == "*") {      
         subTotal = 1;
         misvalores.forEach(valor => {
            subTotal *= valor;
      });
   }
   return subTotal;
}

// //////////// //
// MÉTODO SORT //
// ////////// //

cajitaNumeros = [1,2,3,4,5,-1, 0,7, 10, -20];
console.log("Valores antes de ordenarlo: ", cajitaNumeros);

// Metemos de forma aleatoria
cajitaNumeros.sort(() => Math.random() - 0.5);
console.log("Valores después de ordenarlo aleatoriamente: ", cajitaNumeros);

// Ordenamos de mayor a menor
cajitaNumeros.sort((a, b) => b - a);
console.log("Valores después de ordenarlo de mayor a menor: ", cajitaNumeros);

// Ordenamos de menor a mayor
cajitaNumeros.sort((a, b) => a - b);
console.log("Valores después de ordenarlo (primero los pares): ", cajitaNumeros);

// Ordenar los pares primero
cajitaNumeros.sort((a, b) => a%2 - b%2);
console.log("Valores después de ordenarlo (primero los pares): ", cajitaNumeros);

// Ordenar los números mayores a 3
cajitaNumeros.sort((a, b) => (a>3)? -1:1);
console.log("Valores después de ordenarlo (primero num mayores a 3): ", cajitaNumeros);


// Ordenar palabras
let palabras = ["hola", "adios", "buenos días", "buenas noches", "hasta luego mari carmen"];
console.log("Palabras antes de ordenar: ", palabras);

palabras.sort((a,b) => a.length - b.length);
console.log("Palabras después de ordenar por tamaño de palabra: ", palabras);

// Creamos ARRAY de objetos para ordenar según una propiedad

let personas = [{nombre: "Juan", edad: 25},
               {nombre: "Ana", edad: 16},
               {nombre:"David", edad: 30}];

console.log("Antes de ordenar por edad:");
console.table(personas);

console.log("Después de ordenar por edad (menor a mayor):");
personas.sort((a,b) => a.edad - b.edad);
console.table(personas);

console.log("");

console.log("Después de ordenar por edad (Mayor a menor):");
personas.sort((a,b) => b.edad - a.edad);
console.table(personas);

console.log("Después de ordenar Alfabéticamente (a-z):");
personas.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.table(personas);

// FILTER
// Extrae sin modificar el array, para extraer algo en concreto
const numeros = [1,2,3,4,5,6,7,8,9,10];

function esPrimo(num) {
   for (let i = 2; i < num; i++) {
      
      if (num%i == 0) {
         esPrimo = false;
      } else {
         esPrimo = true;
      }

      return esPrimo;
   }
}


let resultado;

resultado = numeros.filter(esPrimo);
console.log("Solo primos: ", resultado);

resultado = numeros.filter(num => num % 2 == 0);
console.log("Números pares: ", resultado);

resultado = numeros.filter(num => num<7 == 0);
console.log("Números mayores a 7: ", resultado);

resultado = numeros.filter(num => (num>=3) && (num<=7));
console.log("Números entre 3 y 7: ", resultado);


resultado = personas.filter(persona => persona.edad>=18);
console.log("");

console.log("Personas mayores de edad");
console.table(resultado);


// Map
// En la posición de cada valor, pone el resultado de la función
resultado = numeros.map(num => num * num);
console.log("Cuadrados: ", resultado);

resultado = numeros.map(num => num * 1.21);
console.log("Añadir el IVA: ", resultado);

// Reduce
// Devuelve el valor total del número de cada posición

let precios = [10.50, 23.45, 0.60, 21.15, 89.99]
console.log("Estos son nuestros precios: ", precios);

let suma = precios.reduce((totalAcumulado, precio) => totalAcumulado + precio, 0); // el tercer parámetro, el 0 es la inicialización
console.log("Subtotal:",suma, `€`);


// FIND
// De todos los que cumplan el requisito, devolverá el primero

//SOME
// Devuelve true o false si alguno de los valores del array cumple la función

//******** */ EJERCICIO ************ //
let productos = [{nombre: "banana amarillo", precio: 1, color: "amarillo"},
   {nombre: "manzana verde", precio: 2, color: "verde"},
   {nombre: "kibis verde", precio: 1.5, color: "verde"}];

console.table(productos);
console.log("");
console.log("Mis productos de color verde: ");

resultado = productos.filter(producto => producto.color == "verde");
console.table(resultado);

console.log("");
console.log("Mis productos que valen 1€: ");
resultado = productos.filter(producto => producto.precio == 1);
console.table(resultado);

console.log("");
console.log("Mis productos menor a 2€: ");
resultado = productos.filter(producto => producto.precio < 2);
console.table(resultado);

console.log("");
console.log("Productos que contengan verde en su nombre: ");
// El método include devuelve un true o false, si lo incluye o no
resultado = productos.filter(producto => producto.nombre.includes("verde"));
console.table(resultado);

console.log("");
console.log("Lista de productos aleatorios: ");
resultado = productos.filter(producto => Math.random() > 0.5);
console.table(resultado);





// ************************************************************************** //