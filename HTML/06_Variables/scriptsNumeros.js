console.log("PARSEOS DE STRING A INT");
console.log("***********************");



console.log("De String a número usando Number() =", Number("119_223_372_036_854_775_808"));
console.log("De String a número usando (+) =", +("119_223_372_036_854_775_808"));

// Solo cogerá los números y parará de parsear en el momento que detecte una letra
console.log("De String a número usando parseInt() =", parseInt("11912a_223_372_036_854_775_808"));
// En este caso empieza por texto y no funciona
console.log("De String a número usando parseInt() =", parseInt("a119_223_372_036_854_775_808"));
console.log("De decimal a número usando parseInt() =", parseInt("30.01"));
console.log("De decimal a número usando parseFloat() =", parseFloat("30.0121212"));
console.log("De decimal a número usando Number() =", Number("30.0121212"));
// Preguntamos si es un número
console.log("");
console.log("¿ES UN NÚMERO?");
console.log("**************");

console.log("Preguntamos si es un número \"as\" usando isNaN() =", isNaN("AS"));
console.log("Preguntamos si es un número \"30.01\" usando isNaN() =", isNaN("30.01"));

console.log("");
console.log("FINITO o INFINITO");
console.log("*****************");

// Preguntamos si es finito o no es finito
console.log("Preguntamos si es FINITO \"30.01\" usando isFinite() =", isFinite("30.01"));
// 2e308 es infinito para el pc
console.log("Preguntamos si es FINITO \"2e308\" usando isFinite() =", isFinite("2e308"));

console.log("");
console.log("MAX Y MIN");
console.log("*********");
console.log("Preguntamos el número máximo \"12,5,9,-2, 30\" usando max() =", Math.max(12,5,9,-2, 30));
console.log("Preguntamos el número mínimo \"12,5,9,-2, 30\" usando min() =", Math.min(12,5,9,-2, "30"));

console.log("");
console.log("POW");
console.log("***");
// Se puede usar números enteros
console.log("Preguntamos el exponente \"base 2 expo 3\" usando pow() =", Math.pow(2,3));
// Y también se puede usar strings
console.log("Preguntamos el exponente \"base 2 expo 3\" usando pow() =", Math.pow("2","3"));
// En lugar de usar la libreria Math, podemos hacer exponentes usando dos asteriscos **
console.log("Preguntamos el exponente \"base 2 expo 3\" usando ** =", ("2"**"3"));

console.log("");
console.log("ALEATORIO");
console.log("*********");
// Sin redondeo
// 0 a 1 excl
console.log("Números aleatorios entre 0 y 0.99 usando random =", Math.random());
console.log("");

// 0 a 50 excl
let miAleatorio = Math.random()*50;
console.log("El número aleatorio es: ", miAleatorio);

console.log("Números aleatorios entre 0 y 49 usando random y floor =", Math.floor(miAleatorio));
console.log("Números aleatorios entre 0 y 49 usando random y round =", Math.floor(miAleatorio));
console.log("Números aleatorios entre 0 y 49 usando random y ceil =", Math.floor(miAleatorio));

console.log("");
// Vamos a generar números aleatorios entre dos números concretos
let max = 50;
let min = 20;
// Primero se crea el intermedio entre 50 y 20  y luego le marcamos el mínimo
miAleatorio = Math.random()*(max-min) + min;
console.log(`Números aleatorios entre ${max} y ${min} usando random y floor =`, Math.floor(miAleatorio));

console.log("");
console.log("INCREMENTO Y DECREMENTO");
console.log("***********************");

let valorIncremento = 5; 
console.log("Valor = ", valorIncremento);
// Primero se imprime y luego se suma
console.log("Valor++ = ", valorIncremento++);
// Ahora valor = 6
// Ahora ANTES se suma y luego se imprime por lo que ahora será
console.log("++Valor = ", ++valorIncremento);

let valorDecremento = 5;
console.log("-Valor = ", -valorDecremento);

console.log("");
console.log("OPERADORES LÓGICOS");
console.log("******************");

let valor5 = 5;
let strValor5 = "5";
let valor8 = 8;

console.log("valor5 = 5");
console.log("strValor5 = \"5\"");
console.log("valor8 = 8");

console.log("Comparaciones: ");

console.log("valor5 == valor5 = ", valor5 == valor5);
console.log("valor5 == strValor5 = ", valor5 == strValor5);
console.log("valor5 === strValor5 = ", valor5 === strValor5);
console.log("valor5 != strValor5 = ", valor5 != strValor5);
console.log("valor5 !== valor5 = ", valor5 !== strValor5);
console.log("valor8 < strValor5 = ", valor8 < strValor5);
console.log("valor8 > strValor5 = ", valor8 > strValor5);
console.log("valor8 >= strValor5 = ", valor8 >= strValor5);

console.log("valor5 >= strValor5 = ", valor5 >= strValor5);
console.log("valor5 <= strValor5 = ", valor5 <= strValor5);

