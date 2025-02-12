
// Explicación general:

// Este código tiene como objetivo crear dinámicamente módulos formativos (contenedores de información) en una página web. 
// Para hacerlo:

// Crear y Clonar Elementos: Primero, se crea un primer módulo básico (moduloFormativo0). Luego, ese módulo se clona 
// para crear otros tres módulos similares.
// Rellenar con Datos: Cada módulo se rellena con información proveniente de objetos (almacenados en modulo0, modulo1, modulo2, modulo3), 
// como el título, el icono, el texto descriptivo y las horas.
// Insertar en el DOM: Después, los módulos rellenos se insertan en el contenedor del HTML usando los métodos append y appendChild. 
// Estos métodos añaden los módulos al final de la lista de elementos dentro del contenedor de manera ordenada.
// Este enfoque permite mantener el código limpio y flexible para agregar más módulos de forma sencilla.



// Los datos (objetos) los hemos guardado en un archivo aparte llamado datos.js
// datos.js debe ser llamado desde el index.html antes que este archivo para evitar ERROR.

// Declaramos una constante que define si se clona el contenido o no.
const CLONAR_CONTENIDO = true;  // Si es verdadero (true), se clonará el contenido de los módulos; si es falso (false), no.


// Buscamos el contenedor donde se agregarán los módulos formativos (div o sección en HTML).
// document.querySelector selecciona el primer elemento que coincida con el selector proporcionado.
const contenedor = document.querySelector(".modformativos");  // seleccionamos el contenedor de módulos formativos.


/* --- Crear primer módulo formativo (moduloFormativo0) --- */
// Creamos un nuevo elemento 'section' para el módulo formativo.
const moduloFormativo0 = document.createElement("section");  // creamos un elemento <section> donde se mostrará un módulo.

// Añadimos la clase CSS "modformativo" a este nuevo elemento <section> para poder estilizarlo.
moduloFormativo0.classList.add("modformativo");  // esto agrega la clase "modformativo" para aplicar estilos en CSS.

// Creamos los elementos hijos que formarán el contenido del módulo.
const moduloFormativo0_titulo = document.createElement("h3");  // creamos un encabezado de nivel 3 para el título del módulo.
const moduloFormativo0_icono = document.createElement("div");  // creamos un div para contener el icono del módulo.
moduloFormativo0_icono.classList.add("icono");  // añadimos una clase CSS llamada "icono" para el div del icono.
const moduloFormativo0_texto = document.createElement("p");  // creamos un párrafo para contener el texto del módulo.
const moduloFormativo0_horas = document.createElement("p");  // creamos un párrafo para contener las horas del módulo.
moduloFormativo0_horas.classList.add("horas");  // añadimos la clase CSS "horas" para estilizar el texto relacionado con las horas.

// Añadimos los elementos hijos (titulo, icono, texto, horas) al elemento <section> que hemos creado.
moduloFormativo0.appendChild(moduloFormativo0_titulo);  // agregamos el título al módulo formativo.
moduloFormativo0.appendChild(moduloFormativo0_icono);  // agregamos el icono al módulo formativo.
moduloFormativo0.appendChild(moduloFormativo0_texto);  // agregamos el texto descriptivo al módulo formativo.
moduloFormativo0.appendChild(moduloFormativo0_horas);  // agregamos las horas al módulo formativo.


/* --- Crear otros módulos clonando el primero --- */
// Creamos los siguientes módulos clonando el primero (moduloFormativo0), y si CLONAR_CONTENIDO es true, copiaremos también el contenido.
const moduloFormativo1 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // clonamos el módulo 0 con el contenido si CLONAR_CONTENIDO es true.
const moduloFormativo2 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // clonamos el módulo 0 con el contenido si CLONAR_CONTENIDO es true.
const moduloFormativo3 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);  // clonamos el módulo 0 con el contenido si CLONAR_CONTENIDO es true.


/* --- Rellenar el contenido de cada módulo --- */
// Ahora, rellenamos el contenido de cada módulo (moduloFormativo0, moduloFormativo1, moduloFormativo2, moduloFormativo3) con los datos de los objetos respectivos.

// Módulo 0: Asignamos los datos al primer módulo.
moduloFormativo0.children[0].innerHTML = modulo0.titulo;  // Asignamos el título del objeto modulo0 al <h3> del primer módulo.
moduloFormativo0.children[1].innerHTML = modulo0.icono;  // Asignamos el icono del objeto modulo0 al <div> del primer módulo.
moduloFormativo0.children[2].innerHTML = modulo0.texto;  // Asignamos el texto descriptivo del objeto modulo0 al <p> del primer módulo.
moduloFormativo0.children[3].innerHTML = `${modulo0.horas} Horas`;  // Asignamos las horas del objeto modulo0 al <p> del primer módulo.

// Módulo 1: Asignamos los datos al segundo módulo.
moduloFormativo1.children[0].innerHTML = modulo1.titulo;  // Asignamos el título del objeto modulo1 al <h3> del segundo módulo.
moduloFormativo1.children[1].innerHTML = modulo1.icono;  // Asignamos el icono del objeto modulo1 al <div> del segundo módulo.
moduloFormativo1.children[2].innerHTML = modulo1.texto;  // Asignamos el texto descriptivo del objeto modulo1 al <p> del segundo módulo.
moduloFormativo1.children[3].innerHTML = `${modulo1.horas} Horas`;  // Asignamos las horas del objeto modulo1 al <p> del segundo módulo.

// Módulo 2: Asignamos los datos al tercer módulo.
moduloFormativo2.children[0].innerHTML = modulo2.titulo;  // Asignamos el título del objeto modulo2 al <h3> del tercer módulo.
moduloFormativo2.children[1].innerHTML = modulo2.icono;  // Asignamos el icono del objeto modulo2 al <div> del tercer módulo.
moduloFormativo2.children[2].innerHTML = modulo2.texto;  // Asignamos el texto descriptivo del objeto modulo2 al <p> del tercer módulo.
moduloFormativo2.children[3].innerHTML = `${modulo2.horas} Horas`;  // Asignamos las horas del objeto modulo2 al <p> del tercer módulo.

// Módulo 3: Asignamos los datos al cuarto módulo.
moduloFormativo3.children[0].innerHTML = modulo3.titulo;  // Asignamos el título del objeto modulo3 al <h3> del cuarto módulo.
moduloFormativo3.children[1].innerHTML = modulo3.icono;  // Asignamos el icono del objeto modulo3 al <div> del cuarto módulo.
moduloFormativo3.children[2].innerHTML = modulo3.texto;  // Asignamos el texto descriptivo del objeto modulo3 al <p> del cuarto módulo.
moduloFormativo3.children[3].innerHTML = `${modulo3.horas} Horas`;  // Asignamos las horas del objeto modulo3 al <p> del cuarto módulo.


/* --- Inyectamos los elementos en el DOM --- */
// Finalmente, insertamos los módulos creados y rellenos con datos en el DOM. Usamos el contenedor previamente seleccionado para esto.
// Para agregar cada módulo, usamos el método append, que agrega el nuevo contenido después de todos los hijos del contenedor.

// Añadimos el primer módulo (moduloFormativo0) al contenedor.
contenedor.append(moduloFormativo0);  // agrega el primer módulo al contenedor en el DOM.

// Añadimos el segundo módulo (moduloFormativo1) al contenedor.
contenedor.append(moduloFormativo1);  // agrega el segundo módulo al contenedor en el DOM.

// Añadimos el tercer módulo (moduloFormativo2) al contenedor.
contenedor.append(moduloFormativo2);  // agrega el tercer módulo al contenedor en el DOM.

// Añadimos el cuarto módulo (moduloFormativo3) al contenedor.
contenedor.append(moduloFormativo3);  // agrega el cuarto módulo al contenedor en el DOM.








/* --- Método alternativo para agregar elementos: appendChild --- */
// // La siguiente sección de código muestra una alternativa para agregar elementos en el DOM.
// // Ambos métodos append y appendChild funcionan de forma similar, pero append permite agregar más de un nodo a la vez,
// // mientras que appendChild agrega un solo nodo.

// // Añadimos el primer módulo al contenedor utilizando appendChild.
// contenedor.appendChild(moduloFormativo0);  // agrega el primer módulo al contenedor en el DOM.

// // Añadimos el segundo módulo al contenedor utilizando appendChild.
// contenedor.appendChild(moduloFormativo1);  // agrega el segundo módulo al contenedor en el DOM.

// // Añadimos el tercer módulo al contenedor utilizando appendChild.
// contenedor.appendChild(moduloFormativo2);  // agrega el tercer módulo al contenedor en el DOM.

// // Añadimos el cuarto módulo al contenedor utilizando appendChild.
// contenedor.appendChild(moduloFormativo3);  // agrega el cuarto módulo al contenedor en el DOM.
