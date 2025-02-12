// Comparación de igualdad relajada y estricta
// La igualdad relajada (==) convierte los tipos antes de hacer la comparación, mientras que la estricta (===) no.
console.log("igualdad relajada ==", (13 == 13));  // Devuelve true, ya que los valores son iguales
console.log("igualdad estricta ===", (13 === 13));  // También devuelve true, porque los valores y tipos son iguales

// Conversión de tipos con números y cadenas
let numero = 13;
console.log(numero);  // Muestra el número 13
console.log(numero.toString());  // Convierte el número a cadena de texto "13"

let boleano = true;
console.log(boleano);  // Muestra el valor booleano 'true'
console.log(boleano.toString());  // Convierte el valor booleano a cadena de texto "true"

// Realización de una resta con decimales
console.log(0.2 - 0.1);  // Devuelve 0.1, la resta de los decimales
console.log("resta decimal 0.3 - 0.2", 0.3 - 0.2);  // Devuelve 0.1, muestra el texto y el resultado de la operación
console.log("resta decimal con toFixed(2)", (0.3 - 0.2).toFixed(1));  // Devuelve 0.1 como string con un decimal

// Ejemplo de número grande
console.log(119_223_372_036_854_780_000);  // Los guiones bajos son para mejorar la legibilidad de los números grandes

// Conversión de valores con letras a números
console.log("convertir valor con letras a numero (number)", Number("119_223_372_036_854_780_000"));  // Convierte la cadena a número (el resultado es un valor numérico)
console.log("convertir valor con letras a numero (+)", +("119_223_372_036_854_780_000"));  // Otra forma de convertir una cadena a número, el "+" funciona igual que Number()
console.log("convertir valor con letras a numero (parseInt)", parseInt("119_223_372_036_854_780_000"));  // Convierte solo la parte entera (sin embargo, puede ser impreciso con números grandes)
console.log("convertir valor con letras a numero (parseInt)", parseInt("a119_223_372_036_854_780_000"));  // Da NaN porque empieza con una letra

// Conversión de un valor con caracteres no numéricos
console.log("convertir valor 30.01€ con letras a numero (parseInt)", parseInt("30.01€"));  // parseInt ignora el carácter "€" y toma solo el número entero (30)
console.log("convertir valor 30.01€ con letras a numero (parseFloat)", parseFloat("30.01€"));  // parseFloat devuelve 30.01, ignorando el símbolo "€"
console.log("convertir valor 30.01€ con letras a numero (number)", Number("30.01€"));  // Devuelve NaN porque el valor no es estrictamente un número

// Comprobación si el valor no es un número
console.log("convertir valor \"30.01€\" no es un numero (isNaN)", isNaN("30.01€"));  // Comprobamos si "30.01€" es NaN (devuelve true)
console.log("convertir valor 30.01€  no es un numero (isNaN)", isNaN("30.01"));  // false, ya que es un número válido

// Comprobación de si el valor es finito
console.log("convertir valor \"30.01€\" no es un numero (isFinite)", isFinite("30.01€"));  // false, ya que "30.01€" no es un número válido
console.log("convertir valor \"30.01€\" no es un numero (isFinite)", isFinite("30.01€"));  // false, no es un número válido
console.log("convertir valor \"30.01€\" no es un numero (isFinite)", isFinite("2e308"));  // true, es un número finito (es muy grande, pero válido)
console.log("convertir valor \"30.01€\" no es un numero (isNaN)", Math.max("12", 5 , -1));  // 12 es el valor más alto entre "12", 5 y -1, pero "12" se convierte a número
console.log("convertir valor \"30.01€\" no es un numero (isNaN)", Math.min("12", 5 , -1));  // -1 es el valor más bajo entre "12", 5 y -1

// Operación de potenciación
console.log("2 elevado a pow", Math.pow("2", 3));  // 2 elevado a la potencia de 3, devuelve 8

// Generación de números aleatorios
console.log("numero aleatorio entre 0 y 1", Math.random());  // Genera un número aleatorio entre 0 y 1
console.log("numero aleatorio entre 0 y 50", Math.random() * 50);  // Número aleatorio entre 0 y 50
let mialeatortio = Math.random() * 50;  // Generamos un número aleatorio entre 0 y 50
console.log("numero aleatorio entre 0 y 50 floor", Math.floor(mialeatortio));  // Redondeamos hacia abajo (entero más cercano)
console.log("numero aleatorio entre 0 y 50 ceil", Math.ceil(mialeatortio));  // Redondeamos hacia arriba
console.log("numero aleatorio entre 0 y 50 round", Math.round(mialeatortio));  // Redondeamos al entero más cercano

// Generar un número aleatorio entre un rango específico
let max = 50, min = 20;
mialeatortio = Math.random() * (max - min) + min;  // Número aleatorio entre 20 y 50
console.log(`numero aleatorio entre ${min} y ${max} floor`, Math.floor(mialeatortio));  // Redondeamos hacia abajo

// Operadores de incremento y decremento
let valor = 5;
console.log("valor", valor);  // Muestra el valor inicial
console.log("valor++", valor++);  // Muestra el valor y luego incrementa
console.log("valor", valor);  // Muestra el valor después del incremento
console.log("++valor", ++valor);  // Incrementa el valor y luego lo muestra
console.log("valor", valor);  // Muestra el valor después del incremento

// Decremento
valor = 5;
console.log("valor", valor);  // Muestra el valor inicial
console.log("valor--", valor--);  // Muestra el valor y luego decrementa
console.log("valor", valor);  // Muestra el valor después del decremento
console.log("--valor", --valor);  // Decrementa el valor y luego lo muestra
console.log("valor", valor);  // Muestra el valor después del decremento

// Uso de los operadores unarios
console.log("valor", valor);  // Muestra el valor actual
console.log("-valor", -valor);  // Cambia el signo del valor
console.log("valor", valor);  // Muestra el valor actual

valor = 5;
console.log("valor", valor);  // Muestra el valor
console.log("+valor", +valor);  // Convierte el valor a número (aunque ya es un número, el resultado es el mismo)
console.log("valor", valor);  // Muestra el valor

// Comparación entre valores numéricos y de cadena
let valor5 = 5;
let strValor5 = "5";
let valor8 = 8;

console.log("valor5 == valor5", valor5 == valor);  // Comparación numérica, devuelve true
console.log("valor5 == strValor5", valor5 == strValor5);  // Devuelve true, ya que '5' se convierte a número
console.log("valor5 === strValor5", valor5 === strValor5);  // Devuelve false, ya que compara el tipo (número vs cadena)
console.log("valor5 != strValor5", valor5 != strValor5);  // Devuelve false, ya que son iguales
console.log("valor5 !== strValor5", valor5 !== strValor5);  // Devuelve true, ya que son de diferentes tipos
console.log("valor8 > strValor5", valor8 > strValor5);  // Compara el número 8 con la cadena "5", devuelve true
console.log("valor8 < strValor5", valor8 < strValor5);  // Devuelve false, ya que 8 es mayor que 5
console.log("valor8 >= strValor5", valor8 >= strValor5);  // Devuelve true
console.log("valor5 >= strValor5", valor5 >= strValor5);  // Devuelve true
console.log("valor5 <= strValor5", valor5 <= strValor5);  // Devuelve false

// Ámbito de las variables
// Las variables declaradas fuera de las funciones son globales y las declaradas dentro de las funciones son locales.

let miVarGlobal = "Variable Global";
console.log("miVarGlobal creada", miVarGlobal);  // Muestra la variable global

function mifuncion() {
  let miVarLocal = "Variable Global en LOCAL";  // Variable local dentro de la función
  console.log("miVarGlobal creada:", miVarGlobal);  // Accede a la variable global
  console.log("miVarGlobal modificada en LOCAL", miVarGlobal);  // Modifica la variable global
  miVarGlobal = "Variable Global en LOCAL";  // Cambia el valor de la variable global
  console.log("Variable Global en LOCAL;",  miVarLocal);  // Muestra la variable local
}

mifuncion();  // Llama a la función
console.log("miVarGlobal creada:", miVarGlobal);  // Muestra el valor de la variable global después de haber sido modificada
// console.log("miVarLocal creada:", miVarLocal);  // Da error, porque miVarLocal es local a la función
