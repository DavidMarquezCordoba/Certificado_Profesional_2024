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


// DESTRUCTURING
console.log("////////////Destructuring\\\\\\\\\\\\\\\\\\\\\\");
const persona = {
   nombre: "pepe",
   edad: 30,
   pais: "España"
}

// Forma clásica de crear variables con propiedades de un obj
// let nombre = persona.nombre;
// let edad = persona.edad;

// Con Destructuring
let {nombre, edad, pais} = persona;

console.log("nombre: ",nombre);
console.log("edad: ",edad);
console.log("pais: ",pais);

// Métodos en objetos
console.log("************************");
console.log("Métodos en objetos");
console.log("==================");

const miListaCanciones = ["cancion1","cancion2","cancion3","cancion4","cancion5",]

const reproductor = {
   lista: [...miListaCanciones, "cancion6"],
   volumen: 80,
   cancion: "",
   reproducir: function(numCancion) {
      if (numCancion >= 0 && numCancion<this.lista.length) {
         this.cancion = this.lista[numCancion];
         console.log(`Reproduciendo la canción: ${this.cancion}`);
         return "reproduciendo"
      } else return "Fallo al reproducir"
   },

   parar: function() {
      this.cancion = "";
      console.log("Parado el reproductor");
      
   }
};

console.log("Lista: ",reproductor.lista);
console.table("Canción: ",reproductor.cancion);

// Le decimos que reproducza la canción en la posición 2
let estadoReproductor = reproductor.reproducir(2)

console.log("Estado: ", estadoReproductor);
console.table(reproductor.cancion)

estadoReproductor = reproductor.reproducir(9);
console.log("Estado: ", estadoReproductor);

reproductor.parar();

// Reproductores
console.log("Reproductores");
const reproductores = [];

for (let i = 0; i < 5; i++) {
   reproductores.push({...reproductor});
}

console.table(reproductores);
reproductores[2].reproducir(1);
reproductores[1].reproducir(4);
console.table(reproductores);



