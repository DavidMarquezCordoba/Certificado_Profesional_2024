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