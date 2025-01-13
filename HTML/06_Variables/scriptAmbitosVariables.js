// Ambitos de variables

// Llamamos antes de crearla
// console.log("Variable global = ", miVarGlobal);

// Creamos e inicializamos
let miVarGlobal = "Variable global";
console.log("miVarGlobal creada global = ", miVarGlobal);

function miFuncion() {

   let miVarLocal = "Variable local";
   console.log("miVarLocal creada local en la función = ", miVarLocal);
   console.log("miVarGlobal creada global en la función = ", miVarGlobal);
   
   miVarGlobal = "He modificado la variable de forma LOCAL";
   console.log("miVarGlobal modificada en la función = ", miVarGlobal);
   
   if (true) {
      let miVarGlobal = "de bloque";
      console.log("Dentro del bloque = ", miVarGlobal);
      
   }

   console.log("miVarGlobal después del if = ", miVarGlobal);
   
}

// Llamamos a la función
miFuncion();

console.log("miVarGlobal creada = ", miVarGlobal);
// console.log("miVarLocal creada = ", miVarLocal);


