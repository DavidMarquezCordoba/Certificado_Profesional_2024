// ARRAYS



// ====================== //
// DECLARACIÓN DE ARRAYS //
// ==================== //

// Forma de declaración 1:
const nombres = ["pepe", "juan", "jose", "miguel"];
console.table(nombres);// Con table se ve de forma más visual en array en una tabla

// Forma de declaración 2: (con new Array)
const nombres2 = new Array ("PEPE", "JUAN", "JOSE", "MIGUEL");
console.table(nombres2);

// Array de objetos y otros arrays
const arrayObjetos = ["Hola", true, 12, null, {nombre:"Pepe (obj)", edad: 12}, [1, 13, 50]];
console.table(arrayObjetos);







// ================ //
// USO DE FOR EACH //
// ============== //

console.log(""); //Salto de línea

console.log("USO DE for each 1");
console.log("=================");

// Forma 1 de forEach
arrayObjetos.forEach(
   function(arrayObjetos){
      console.log("Datos: ", arrayObjetos);
   });
   
console.log(""); //Salto de línea

console.log("USO DE for each 2");
console.log("=================");

// Forma 2 de forEach
arrayObjetos.forEach(arrayObjetos => {
   console.log("Datos 2: ", arrayObjetos);
});
   



// ======================= //
// MODIFICACIÓN DE ARRAYS //
// ===================== //

arrayObjetos[0] = "Modificación del nombre en la posición 1";

arrayObjetos[20] = "Añado una nueva posición";

console.table(arrayObjetos);




// ====================== //
// INFORMACIÓN DE ARRAYS //
// ==================== //

console.log(arrayObjetos.length); //Te dice cuantos elementos hay en TOTAL en todo el array
console.log(arrayObjetos[5].length);//Te dice cuantos elementos hay en la posición 5 del array (Hay 3 porque en esa posición hay un array de 3 números [1, 13, 50])





// ============================== //
// AÑADIR ELEMENTOS EN EL ARRAYS //
// ============================ //

console.log(arrayObjetos.push("final")); //Crea el string en el inicio del array
console.log(arrayObjetos.unshift("Inicio")); //Crea el string al final del array

console.table(arrayObjetos);




// =============================== //
// ELIMINAR ELEMENTOS EN EL ARRAY //
// ============================= //

console.log(arrayObjetos.pop()); //Eliminamos del principio del array
console.log(arrayObjetos.shift()); //Eliminamos del final del array

console.table(arrayObjetos);

// arrayObjetos.splice(inicio del recorte, cuantos elementos quieres eliminar)
console.log(arrayObjetos.splice(0, 1)); //Elimina DESDE la primera posición (0), cuántos elementos eliminamos
console.table(arrayObjetos);



// NO ME HA QUEDADO CLARO !!!!!!!!!!!!!!!!

// ================================ //
// REST OPERADOR o SPREAD OPERATOR //
// ============================== //

// ¿Qué hace?: CREAR NUEVO ARRAY CON UN ARRAY Y VALORES NUEVOS

function numMayor(...numeros) {
   let elMayor = numeros[0];
   numeros.forEach(function(numero){
      if(elMayor < numero){
         elMayor = numero;
      }
   });

   console.log(elMayor);
   
}

console.log(numMayor(1,5,9));



/////////////////////////
// Métodos más usados //
///////////////////////

// .INCLUDES() : Nos devuelve True o False Según el argumento que el enviemos está o no en el array

// .SOME(): Sí está o no en el array de objetos

// .REDUCE(): Cuando queremos sumar alguna propiedad de los objetos que están en el array

// .FILTER(): Nos devuelve valores filtrados del array