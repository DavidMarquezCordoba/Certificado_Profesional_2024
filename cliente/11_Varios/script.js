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
console.log("SORT");
   
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
console.log("FILTER");
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
console.log("MAP");
resultado = numeros.map(num => num * num);
console.log("Cuadrados: ", resultado);

resultado = numeros.map(num => num * 1.21);
console.log("Añadir el IVA: ", resultado);

// Reduce
// Devuelve el valor total del número de cada posición
console.log("REDUCE");
let precios = [10.50, 23.45, 0.60, 21.15, 89.99]
console.log("Estos son nuestros precios: ", precios);

let suma = precios.reduce((totalAcumulado, precio) => totalAcumulado + precio, 0); // el tercer parámetro, el 0 es la inicialización
console.log("Subtotal:",suma, `€`);

//******** */ EJERCICIO ************ //
console.log("FILTER");
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

// FIND
// De todos los que cumplan el requisito, devolverá el primero
console.log("");
console.log("FIND");
console.log("Me devuelve el primer producto que cumpla la condición");
resultado = productos.find(producto => Math.random()>0.5);
console.table(resultado);

//SOME
// Devuelve true o false si alguno de los valores del array cumple la función
console.log("");
console.log("SOME");
console.log("Devuelve true o false si alguno de los valores del array cumple la función");
resultado = productos.some(producto => producto.precio > 1 && producto.precio <= 2);
console.table(resultado?"Hay productos":"No hay productos");

// Every
// Devuelve true/False si todos los valores del array cumplen la condición
console.log("");
console.log("EVERY");
console.log("Devuelve true/False si todos los valores del array cumplen la condición");
resultado = productos.every(producto => producto.precio > 0 && producto.precio <= 4);
console.table(resultado?"Todos CUMPLEN la condición":"Todos NO cumplen la condición");

// INCLUDES
console.log("");
console.log("INCLUDES");
console.log("Igual que SOME, salvo que en esta ocasión la comparación debe ser estricta");
resultado = numeros.includes(5); //Array declarado en la línea 86
console.table(resultado?"Está el número":"NO está el número");

// indexOF
console.log("");
console.log("INDEXOF");
console.log("Encuentra la posición del valor dado");
resultado = numeros.indexOf(4); //Array declarado en la línea 86
console.table(resultado != -1?`Está el número en la posición ${resultado}`:"NO está el número");

// DATA SET
console.log("");
console.log("DATASET");
console.log(document.querySelector("#midiv").dataset.mivalor);
// Cambiamos el valor de dataset
document.querySelector("#midiv").dataset.mivalor = "He cambiado la info";
console.log(document.querySelector("#midiv").dataset.mivalor);

// DATE
console.log("");
console.log("DATE: Nos devuelve la fecha");
console.log("La fecha de hoy es ", Date.now());

// let tiempo = Date.now();
// const miBoton = document.createElement("button");
// miBoton.textContent="Pulsa";
// document.body.appendChild(miBoton);
// miBoton.addEventListener("click", ()=>{
//    let ahora = parseInt((Date.now() - tiempo)/1000);
//    alert(`Ha pasado ${ahora} segundos desde que se creó el DOM`)
// })
// ************************************************************************** //


// Tiempo de pulsado de un botón
let intervalo;
const btnIntervalo = document.createElement("button");
btnIntervalo.textContent = "Intervalo";
document.body.appendChild(btnIntervalo);

const miBoton = document.createElement("button");
miBoton.textContent="Pulsa";
document.body.appendChild(miBoton);

btnIntervalo.addEventListener("mousedown", ()=>{
   intervalo = Date.now()
});

btnIntervalo.addEventListener("mouseup", ()=>{
   alert(`Has pulsado el botón durante ${parseInt((Date.now() - intervalo)/1000)} segundos`);
   
});

// Para quitar el menú contextual (2º botón del botón)
document.addEventListener("contextmenu", (evento)=>{
   evento.preventDefault();
});


// FECHAS //
console.log("");
console.log("Fechas");

const fecha = new Date;
// console.log("now: ", fecha);
console.log("string con toDateString: ", fecha.toDateString());
console.log("string con toString: ", fecha.toString());
console.log("string con ISO: ", fecha.toISOString());

// Coge por defecto el valor de tu ordenador, si lo queremos con el formato inglés
// fecha.toLocaleDateString("en")
console.log("Fecha con localDateString: ", fecha.toLocaleDateString());
console.log("Hora con localTimeString: ", fecha.toLocaleTimeString());

// **** //
// DÍA //
// ** //

const diaSemana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
// console.log("Día de la semana: ", fecha.getDay()); Devuelve valores 0-6
// Por lo que lo haremos así
console.log("Día de la semana: ", diaSemana[fecha.getDay()]);

// ****** //
// MESES //
// **** //

const meses = [
   "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
   "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

console.log("Mes del año: ", meses[fecha.getMonth()]);
console.log("Día del mes: ", fecha.getDate());
console.log("Año: ", fecha.getFullYear());

console.log("Hora: ", fecha.getHours());
console.log("Minuto: ", fecha.getMinutes());
console.log("Segundos: ", fecha.getSeconds());
console.log("Miliegundos: ", fecha.getMilliseconds()); //Milisegundos del segundo

console.log("Miliegundos: ", fecha.getMilliseconds());


console.log("");
console.log("Fecha personalizada (2/07/2020)");

let fechaConstructor = new Date(2020, 7, 2);

// Ahora lo mostramos
console.log("Año personalizado: ", fechaConstructor.getFullYear());
console.log("Mes personalizado: ", meses[fechaConstructor.getMonth()]);
console.log("Día de la semana personalizado: ", diaSemana[fechaConstructor.getDate()]);

console.log("Fecha completa: ", fechaConstructor.toLocaleDateString());

// Variables
let anoPersonalizado = fechaConstructor.getFullYear();
let mesPersonalizado = meses[fechaConstructor.getMonth()];

console.log(`Málaga, ${fechaConstructor.getDate()} de ${mesPersonalizado} de ${anoPersonalizado}`);


// CSS TRANSFORM

// ROTAR
const rojo = document.createElement("div");
rojo.classList.add("midiv", "rojo");
rojo.textContent = "Pulsa para rotar"
document.body.appendChild(rojo);
rojo.addEventListener("click", ()=>{
   rojo.classList.toggle("rotar"); //Añade la clase al elemento rojo si no la tiene y la quita si la tiene
});

// TRANSLADAR
const azul = document.createElement("div");
azul.classList.add("midiv", "azul");
azul.textContent = "Pulsa para transladar"
document.body.appendChild(azul);
azul.addEventListener("click", ()=>{
   azul.classList.toggle("transladar"); //Añade la clase al elemento azul si no la tiene y la quita si la tiene
});

// ESCALAR
const verde = document.createElement("div");
verde.classList.add("midiv", "verde");
verde.textContent = "Pulsa para escalar";
document.body.appendChild(verde);
verde.addEventListener("click", ()=>{
   verde.classList.toggle("escalar"); //Añade la clase al elemento azul si no la tiene y la quita si la tiene
});

// ESCALAR Y TRANSLADAR

const amarillo = document.createElement("div");
amarillo.classList.add("midiv", "amarillo");
amarillo.textContent = "Pulsa para escalar y transladar";
document.body.appendChild(amarillo);
amarillo.addEventListener("click", ()=>{
   amarillo.classList.toggle("escalar-transladar"); //Añade la clase al elemento azul si no la tiene y la quita si la tiene
});

// ANIMATION
const violeta = document.createElement("div");
violeta.classList.add("midiv", "violeta");
violeta.textContent = "ANIMACIÓN";
document.body.appendChild(violeta);
violeta.addEventListener("click", ()=>{
   violeta.classList.toggle("animar"); //Añade la clase al elemento azul si no la tiene y la quita si la tiene
});

// MODAL
const btnModal = document.createElement("button");
btnModal.textContent = "Abrir Modal";
// btnModal.classList.add("boton-abrir-modal");
document.body.appendChild(btnModal);

const modal = document.createElement("div");
modal.classList.add("modal", "ocultar");
document.body.appendChild(modal);


btnModal.addEventListener("click", () =>{
   modal.classList.remove("ocultar");
   document.body.classList.add("quieto");
});

modal.addEventListener("click", () =>{
   modal.classList.add("ocultar");
   document.body.classList.remove("quieto");
});