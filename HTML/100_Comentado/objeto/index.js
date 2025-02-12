// Definimos el objeto inicial
const miObjeto = {
    nombre: 'caja',
    tamano: '20x5x10',
    disponibilidad: true,
    unidades: 23
};

// Mostramos el objeto inicial
console.log("miObjeto", miObjeto);

// Intento de reasignar el objeto (esto causaría un error porque miObjeto es una constante)
// miObjeto = {  // Esto daría un error, ya que no puedes reasignar miObjeto porque es una constante
//     nombre: 'perro',
//     tamaño: 'chico',
//     disponibilidad: false,
//     unidades: 1
// }

// Agregamos una nueva propiedad al objeto
miObjeto.color = 'rojo';  // Podemos añadir una propiedad nueva, ya que Object.seal() no afecta la adición de propiedades.
console.log("miObjeto", miObjeto);

// Sellamos el objeto con Object.seal(), lo que previene la adición o eliminación de propiedades
Object.seal(miObjeto);
console.log("Objeto sellado", miObjeto);

// Intentamos agregar una propiedad nueva (esto no funcionará, ya que el objeto está sellado)
miObjeto.abierta = false;  // Esto no tendrá efecto ya que no se puede añadir propiedades a un objeto sellado
miObjeto.color = 'blue';  // Pero podemos modificar propiedades existentes
console.log("miObjeto después de cambios", miObjeto);

// Intentamos eliminar una propiedad sellada
delete miObjeto.tamano;  // Esto no eliminará la propiedad 'tamano' porque el objeto está sellado
console.log("miObjeto después de intentar eliminar una propiedad", miObjeto);

// Verificamos el valor de 'tamano', sigue existiendo aunque intentamos eliminarla
console.log("tamano", miObjeto.tamano);

