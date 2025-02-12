
// Explicación general:

// Este código se utiliza para crear dinámicamente módulos formativos en una página web utilizando datos que 
// están almacenados en un array llamado modulos. El código crea un section por cada módulo, añadiendo un título, un icono, 
// una descripción y las horas del módulo, los cuales provienen del array. Estos elementos se inyectan en el contenedor en el DOM, 
// que es el elemento con la clase .modformativos. Cada uno de los elementos del módulo (título, icono, texto, y horas) es creado y 
// agregado de manera secuencial al contenedor, lo que permite agregar los módulos dinámicamente según los datos que tengamos en 
// el archivo datos_array.js.


// Los datos (objetos) los hemos guardado en un archivo aparte llamado datos_array.js
// datos_array.js tiene que ser llamado desde el index.html y antes que este archivo para evitar ERROR

// Buscamos al elemento contenedor de los section
const contenedor = document.querySelector(".modformativos"); 
// Con esta línea seleccionamos el contenedor donde se van a agregar los módulos formativos. El contenedor es un elemento con la clase .modformativos.

// Creamos los elementos con un forEach
modulos.forEach(function(modulo) { 
    // Usamos el método forEach para recorrer cada uno de los objetos dentro del array `modulos`. 
    // Cada `modulo` es un objeto que contiene información como el título, el icono, el texto y las horas.

    const moduloFormativo = document.createElement("section"); 
    // Creamos un nuevo elemento <section> para representar un módulo formativo.

    moduloFormativo.classList.add("modformativo"); 
    // Añadimos la clase "modformativo" al nuevo <section> para que pueda ser estilizado en CSS.

    // Creamos los hijos del primer elemento
    const moduloFormativo_titulo = document.createElement("h3"); 
    // Creamos un elemento <h3> para mostrar el título del módulo formativo.
    
    moduloFormativo_titulo.innerHTML = modulo.titulo; 
    // Asignamos el título del módulo (que proviene de `modulo.titulo`) al contenido HTML de <h3>.

    const moduloFormativo_icono = document.createElement("div"); 
    // Creamos un elemento <div> que contendrá el icono del módulo formativo.
    
    moduloFormativo_icono.classList.add("icono"); 
    // Añadimos la clase "icono" al <div> para que pueda ser estilizado.

    moduloFormativo_icono.innerHTML = modulo.icono; 
    // Asignamos el contenido del icono (SVG o cualquier otro HTML) al <div> de icono.

    const moduloFormativo_texto = document.createElement("p"); 
    // Creamos un párrafo <p> para mostrar el texto descriptivo del módulo.

    moduloFormativo_texto.innerHTML = modulo.texto; 
    // Asignamos el texto descriptivo (proporcionado en `modulo.texto`) al contenido HTML del párrafo.

    const moduloFormativo_horas = document.createElement("p"); 
    // Creamos otro párrafo <p> para mostrar las horas del módulo formativo.
    
    moduloFormativo_horas.classList.add("horas"); 
    // Añadimos la clase "horas" al párrafo para que pueda ser estilizado como las horas del módulo.

    moduloFormativo_horas.innerHTML = `${modulo.horas} Horas`; 
    // Asignamos el número de horas del módulo, seguido de la palabra "Horas" al contenido del párrafo.



    

    // Añadimos los hijos al elemento en curso
    moduloFormativo.appendChild(moduloFormativo_titulo); 
    // Agregamos el título (<h3>) como hijo del módulo formativo (<section>).

    moduloFormativo.appendChild(moduloFormativo_icono); 
    // Agregamos el icono (<div>) como hijo del módulo formativo.

    moduloFormativo.appendChild(moduloFormativo_texto); 
    // Agregamos el texto (<p>) como hijo del módulo formativo.

    moduloFormativo.appendChild(moduloFormativo_horas); 
    // Agregamos las horas (<p>) como hijo del módulo formativo.

    // Inyectamos el section creado completo en el DOM usando el contenedor con el método append que lo inserta después de todos sus hijos
    contenedor.append(moduloFormativo); 
    // Añadimos el módulo formativo (con todos sus hijos) al contenedor con la clase .modformativos. 
    // Esto hace que el módulo formativo se muestre en la página web.
});
