console.log("Objetos");
console.log("=======");



const miObjeto ={
   nombre: "caja",
   tamano: "20x5x10",
   disponibilidad: true,
   unidades: 23,
};

Object.seal(miObjeto);
Object.freeze(miObjeto);
Object.preventExtensions(miObjeto); //No permite ampliar atributos, pero si eliminar
// console.log("no ampliable");


console.log("miObjeto = ", miObjeto);

// Añadimos una propiedad al objeto

miObjeto.color="rojo";
console.log("Objeto color añadido = ", miObjeto.color);

//Sellar: Se puede modificar perono eliminar ni añadir
//Congelar: Ni se puede modificar ni eliminar

// Sellamos el objeto
miObjeto.abierta = true; //No añade la propiedad por estar sellada
miObjeto.color = "azul";
console.log("Mi objeto actualmente sellada: ", miObjeto);

// Congelamos el objeto
miObjeto.abierta = true; //No añade la propiedad por estar sellada
miObjeto.color = "azul"; //Previamente hay que comentar color=azul en sellado
console.log("Mi objeto actualmente congelado: ", miObjeto);

// Conclusión: Ni se añade "abierta" ni modifica el color

delete miObjeto.tamano; //Para que funcione, debe comentarse frezee y seal