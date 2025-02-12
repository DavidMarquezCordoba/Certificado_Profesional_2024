// Cargamos el blog desde el localStorage o creamos una lista de entradas por defecto
const entradas = JSON.parse(localStorage.getItem("entradas")) || [
    {titulo: "1984", fecha: "viernes, 15 de marzo de 2024, 14:23", texto:"La novela popularizó los conceptos del omnipresente y vigilante Gran Hermano o Hermano Mayor, de la notoria habitación 101, de la ubicua policía del Pensamiento y de la neolengua"},
    {titulo: "Viaje al centro de la Tierra", fecha: "viernes, 15 de marzo de 2024, 14:24", texto:"Un pergamino de origen rúnico que oculta un criptograma. Tras muchos esfuerzos y gracias a un descubrimiento casual de Axel, logran descifrarlo; es un texto del alquimista islandés Arne Saknussemm quien revela cómo llegar al centro de la tierra"},
    {titulo: "Así habló Zaratustra", fecha: "domingo, 17 de marzo de 2024, 19:11", texto: "La obra contiene las principales ideas de Nietzsche, expresadas de forma poética: está compuesta por una serie de relatos y discursos que ponen en el centro de atención algunos hechos y reflexiones de un profeta llamado Zaratustra"}
];

// Declaración de constantes y variables globales
const botonNuevo = document.querySelector("#boton-nuevo"); // Botón para agregar una nueva entrada
const nuevaEntrada = document.querySelector("#nueva-entrada"); // Cuadro de diálogo para nueva entrada
const contenedorEntradas = document.querySelector("main"); // Contenedor donde se mostrarán las entradas
const agregar = document.querySelector("#agregar"); // Botón de agregar nueva entrada

// Event Listeners (eventos)
botonNuevo.addEventListener("click", () => { 
    nuevaEntrada.showModal(); // Muestra el cuadro de diálogo para agregar una nueva entrada
});
contenedorEntradas.addEventListener("click", quitaEntrada); // Evento para eliminar una entrada
agregar.addEventListener("click", addNuevaEntrada); // Evento para agregar una nueva entrada

// Función para crear una entrada en el DOM
function crearEntrada(entrada, nuevo = false) {
    const miEntrada = document.createElement("article"); // Crea un elemento de artículo para la entrada
    if(nuevo) miEntrada.classList.add("crece"); // Si es una nueva entrada, agrega animación "crece"

    // Crear elementos para la entrada (título, contenido y fecha)
    const titulo = document.createElement("h3");
    titulo.textContent = entrada.titulo; // Asigna el título

    const texto = document.createElement("code");
    texto.textContent = entrada.texto; // Asigna el contenido de la entrada

    const fecha = document.createElement("time");
    fecha.dateTime = entrada.fecha; // Asigna la fecha en formato accesible
    fecha.textContent = entrada.fecha; // Muestra la fecha en texto

    // Agrega los elementos al artículo de la entrada
    miEntrada.appendChild(titulo);
    miEntrada.appendChild(texto);
    miEntrada.appendChild(fecha);

    // Inserta la nueva entrada al inicio del contenedor
    contenedorEntradas.prepend(miEntrada);
}

// Función para agregar una nueva entrada al blog
function addNuevaEntrada(evento) {
    var today = new Date(); // Obtiene la fecha y hora actual
    let opciones = { 
        weekday: 'long', 
        day: 'numeric', 
        month: 'long', 
        year: 'numeric', 
        hour: "numeric", 
        minute: "numeric" 
    };
    var date = today.toLocaleDateString('es-ES', opciones); // Formatea la fecha en español

    // Crea un nuevo objeto de entrada con los valores ingresados por el usuario
    const nuevaExp = {
        titulo: document.querySelector("#titulo").value,
        texto: document.querySelector("#texto").value,
        fecha: date
    };

    // Agrega la nueva entrada al array de entradas y actualiza el localStorage
    entradas.push(nuevaExp);
    localStorage.setItem("entradas", JSON.stringify(entradas));

    // Llama a la función para crear la entrada en el DOM
    crearEntrada(nuevaExp, true);
}

// Función para eliminar una entrada
function quitaEntrada(evento) {
    // Verifica si el clic se hizo en un área válida para eliminar una entrada
    if((evento.target.tagName != "MAIN") && (evento.target.tagName != "svg") && 
       (evento.target.tagName != "path") && (confirm("¿Seguro que quieres eliminar esta entrada?"))) {

        const miEntrada = evento.target.closest("article"); // Encuentra el artículo de la entrada

        // Busca el índice de la entrada en el array `entradas`
        const indice = entradas.findIndex((entrada) => {
            return (entrada.titulo.includes(miEntrada.children[0].textContent) && 
                    entrada.texto.includes(miEntrada.children[1].textContent));
        });

        // Elimina la entrada del array y actualiza localStorage
        entradas.splice(indice, 1);
        localStorage.setItem("entradas", JSON.stringify(entradas));

        // Agrega una clase para animación de eliminación
        miEntrada.classList = "quita";
        setTimeout(() => {
            miEntrada.remove(); // Elimina la entrada después de la animación (1.45 segundos)
        }, 1450);
    }
}

// Evento para cargar las entradas cuando se abra la página
document.addEventListener("DOMContentLoaded", () => {
    entradas.forEach(entrada => crearEntrada(entrada)); // Recorre el array y muestra las entradas en el DOM
});



/* Explicación por Secciones
1. Cargar Entradas desde LocalStorage

const entradas = JSON.parse(localStorage.getItem("entradas")) || [ ... ];
Intenta obtener las entradas guardadas en localStorage.
Si no hay datos guardados, crea una lista de entradas de ejemplo.



2. Seleccionar Elementos del DOM

const botonNuevo = document.querySelector("#boton-nuevo");
const nuevaEntrada = document.querySelector("#nueva-entrada");
const contenedorEntradas = document.querySelector("main");
const agregar = document.querySelector("#agregar");
Obtiene referencias a los elementos clave en el HTML para manipularlos con JavaScript.




3. Eventos

botonNuevo.addEventListener("click", () => { nuevaEntrada.showModal(); });
contenedorEntradas.addEventListener("click", quitaEntrada);
agregar.addEventListener("click", addNuevaEntrada);
Al hacer clic en el botón de nuevo post, se abre el cuadro de diálogo.
Al hacer clic en una entrada, se activa la función de eliminar.
Al hacer clic en el botón "Agregar", se ejecuta la función que crea una nueva entrada.




4. Crear Entrada en el DOM

function crearEntrada(entrada, nuevo = false) { ... }
Crea un article con título, texto y fecha.
Si es una nueva entrada, le agrega una animación (crece).
Inserta la entrada al inicio del contenedor.




5. Agregar Nueva Entrada

function addNuevaEntrada(evento) { ... }
Obtiene el título y contenido desde los inputs.
Genera la fecha actual con formato español.
Guarda la nueva entrada en localStorage y la muestra en el blog.




6. Eliminar Entrada

function quitaEntrada(evento) { ... }
Comprueba si el clic fue sobre un article.
Pide confirmación antes de eliminar la entrada.
Encuentra la entrada en el array, la elimina y actualiza localStorage.
Aplica una animación antes de borrar la entrada del DOM.




7. Cargar Entradas Guardadas

document.addEventListener("DOMContentLoaded", () => { ... });
Cuando la página se carga, recupera las entradas de localStorage y las muestra en el blog.
 */