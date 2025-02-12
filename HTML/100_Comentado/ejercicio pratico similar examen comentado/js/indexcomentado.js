JavaScript con Comentarios


// Recupera artículos del localStorage o inicializa el array
let articles = JSON.parse(localStorage.getItem('articles')) || [];

// Muestra el modal cuando se hace clic en el SVG
document.getElementById('mi-svg').addEventListener('click', function() {
    this.classList.add('reducido');
    const modal = document.getElementById('mi-modal');
    modal.showModal();
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
});

// Cierra el modal y restaura el tamaño del SVG cuando se hace clic en los botones
const buttons = document.querySelectorAll('.modal-buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('mi-modal');
        modal.classList.remove('open');
        setTimeout(() => {
            modal.close();
            document.getElementById('mi-svg').classList.remove('reducido');
        }, 500); // Espera a que termine la transición antes de cerrar el modal
    });
});

// Función para crear y añadir un artículo
function crearArticulo(titulo, texto, fecha, hora) {
    // Crea los elementos HTML del artículo
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const pre = document.createElement('pre');
    const dateDiv = document.createElement('div');
    const readButton = document.createElement('button');
    const infoDiv = document.createElement('div'); // Cambiado a 'article-info'

    h3.innerText = titulo;
    pre.innerText = texto;
    dateDiv.innerText = `${fecha} ${hora}`;
    dateDiv.classList.add('article-date');

    // Configura el botón de lectura en voz alta
    readButton.innerText = 'Leer en Voz Alta';
    readButton.classList.add('leer-voz-alta');
    readButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que se active la eliminación del artículo
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            readButton.textContent = 'Leer en Voz Alta';
            readButton.setAttribute('aria-label', 'Leer contenido en voz alta');
        } else {
            leerEnVozAlta(titulo, texto, fecha, hora, readButton);
        }
    });

    // Configura el footer con grid
    infoDiv.classList.add('article-info');
    infoDiv.appendChild(readButton); // Añade el botón de lectura al footer
    infoDiv.appendChild(dateDiv); // Añade la fecha y hora al footer

    // Añade los elementos al artículo
    article.appendChild(h3);
    article.appendChild(pre);
    article.appendChild(infoDiv); // Añade el footer al artículo

    // Añade la animación de entrada al artículo
    article.classList.add('article-enter');

    // Agrega el evento de eliminación al artículo
    article.addEventListener('click', function() {
        if (confirm('¿Está seguro de que quiere eliminar esta ficha?')) {
            article.classList.add('article-exit');
            article.addEventListener('animationend', () => {
                article.remove();
                articles = articles.filter(a => a.titulo !== titulo && a.texto !== texto);
                localStorage.setItem('articles', JSON.stringify(articles));
            });
        }
    });

    // Añade el artículo al contenedor principal al principio
    const mainContent = document.getElementById('main-content');
    mainContent.insertBefore(article, mainContent.firstChild);
}

// Agrega un nuevo artículo
document.getElementById('agregar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    // Obtiene la fecha y hora actual
    const now = new Date();
    const fecha = now.toLocaleDateString();
    const hora = now.toLocaleTimeString();

    // Crea un objeto de artículo
    const articleData = { titulo, texto, fecha, hora };
    articles.unshift(articleData); // Agrega el nuevo artículo al principio del array
    localStorage.setItem('articles', JSON.stringify(articles));

    // Crea y añade el artículo
    crearArticulo(titulo, texto, fecha, hora);

    // Limpia los campos del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';

    // Cierra el modal y restaura el tamaño del SVG
    const modal = document.getElementById('mi-modal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.close();
        document.getElementById('mi-svg').classList.remove('reducido');
    }, 500); // Espera a que termine la transición antes de cerrar el modal
});

// Carga inicial de artículos desde el localStorage
document.addEventListener('DOMContentLoaded', function() {
    articles.forEach(articleData => {
        // Crea y añade el artículo
        crearArticulo(articleData.titulo, articleData.texto, articleData.fecha, articleData.hora);
    });

    // Mueve el contenedor del SVG a la siguiente posición disponible
    const svgContainer = document.querySelector('.svg');
    const mainContent = document.getElementById('main-content');
    mainContent.appendChild(svgContainer);

    // Destacar el enlace activo en el nav
    const navLinks = document.querySelectorAll('.nav-contenedor a');
    navLinks.forEach(link => {
        if (link.href === window.location.href) {
            link.classList.add('active');
        }
    });
});

// Función para leer el contenido en voz alta
function leerEnVozAlta(titulo, texto, fecha, hora, botonLeerVozAlta) {
    const textoALeer = `${titulo} ${texto} Fecha: ${fecha}, Hora: ${hora}`;
    const utterance = new SpeechSynthesisUtterance(textoALeer);
    utterance.lang = 'es-ES';

    speechSynthesis.speak(utterance);

    botonLeerVozAlta.textContent = 'Inicio Lectura';
    botonLeerVozAlta.setAttribute('aria-label', 'Detener lectura en voz alta');

    utterance.onend = () => {
        botonLeerVozAlta.textContent = 'Leer en Voz Alta';
        botonLeerVozAlta.setAttribute('aria-label', 'Leer contenido en voz alta');
    };

    utterance.oncancel = () => {
        botonLeerVozAlta.textContent = 'Leer en Voz Alta';
        botonLeerVozAlta.setAttribute('aria-label', 'Leer contenido en voz alta');
    };

    botonLeerVozAlta.onclick = () => {
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
        } else {
            const textoALeer = `${titulo} ${texto} Fecha: ${fecha}, Hora: ${hora}`;
            const nuevaUtterance = new SpeechSynthesisUtterance(textoALeer);
            nuevaUtterance.lang = 'es-ES';

            speechSynthesis.speak(nuevaUtterance);

            nuevaUtterance.onend = () => {
                botonLeerVozAlta.textContent = 'Leer en Voz Alta';
                botonLeerVozAlta.setAttribute('aria-label', 'Leer contenido en voz alta');
            };

            nuevaUtterance.oncancel = () => {
                botonLeerVozAlta.textContent = 'Leer en Voz Alta';
                botonLeerVozAlta.setAttribute('aria-label', 'Leer contenido en voz alta');
            };

            botonLeerVozAlta.textContent = 'Inicio Lectura';
            botonLeerVozAlta.setAttribute('aria-label', 'Detener lectura en voz alta');
        }
    };
}




Explicación por Bloques
Inicialización de Artículos


// Recupera artículos del localStorage o inicializa el array
let articles = JSON.parse(localStorage.getItem('articles')) || [];


Explicacion


Recupera los artículos almacenados en localStorage y los convierte en un array. Si no hay artículos almacenados, inicializa el array como vacío.




Mostrar el Modal

// Muestra el modal cuando se hace clic en el SVG
document.getElementById('mi-svg').addEventListener('click', function() {
    this.classList.add('reducido');
    const modal = document.getElementById('mi-modal');
    modal.showModal();
    setTimeout(() => {
        modal.classList.add('open');
    }, 10);
});


Explicación


Añade un evento de clic al SVG para mostrar el modal. Se añade una clase para reducir el tamaño del SVG y se muestra el modal con una transición suave.



Cerrar el Modal


// Cierra el modal y restaura el tamaño del SVG cuando se hace clic en los botones
const buttons = document.querySelectorAll('.modal-buttons button');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const modal = document.getElementById('mi-modal');
        modal.classList.remove('open');
        setTimeout(() => {
            modal.close();
            document.getElementById('mi-svg').classList.remove('reducido');
        }, 500); // Espera a que termine la transición antes de cerrar el modal
    });
});



Explicacion

Cerrar el Modal y Restaurar el SVG:
const buttons = document.querySelectorAll('.modal-buttons button'); Selecciona todos los botones dentro del contenedor de botones del modal.
buttons.forEach(button => { ... }); Itera sobre cada botón y añade un evento de clic.
const modal = document.getElementById('mi-modal'); Obtiene el elemento modal.
modal.classList.remove('open'); Elimina la clase open del modal.
setTimeout(() => { modal.close(); document.getElementById('mi-svg').classList.remove('reducido'); }, 500); Espera 500ms para que la transición termine, luego cierra el modal y restaura el tamaño del SVG.


Crear y Añadir un Artículo


// Función para crear y añadir un artículo
function crearArticulo(titulo, texto, fecha, hora) {
    // Crea los elementos HTML del artículo
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    const pre = document.createElement('pre');
    const dateDiv = document.createElement('div');
    const readButton = document.createElement('button');
    const infoDiv = document.createElement('div'); // Cambiado a 'article-info'

    h3.innerText = titulo;
    pre.innerText = texto;
    dateDiv.innerText = `${fecha} ${hora}`;
    dateDiv.classList.add('article-date');

    // Configura el botón de lectura en voz alta
    readButton.innerText = 'Leer en Voz Alta';
    readButton.classList.add('leer-voz-alta');
    readButton.addEventListener('click', function(event) {
        event.stopPropagation(); // Evita que se active la eliminación del artículo
        if (speechSynthesis.speaking) {
            speechSynthesis.cancel();
            readButton.textContent = 'Leer en Voz Alta';
            readButton.setAttribute('aria-label', 'Leer contenido en voz alta');
        } else {
            leerEnVozAlta(titulo, texto, fecha, hora, readButton);
        }
    });

    // Configura el footer con grid
    infoDiv.classList.add('article-info');
    infoDiv.appendChild(readButton); // Añade el botón de lectura al footer
    infoDiv.appendChild(dateDiv); // Añade la fecha y hora al footer

    // Añade los elementos al artículo
    article.appendChild(h3);
    article.appendChild(pre);
    article.appendChild(infoDiv); // Añade el footer al artículo

    // Añade la animación de entrada al artículo
    article.classList.add('article-enter');

    // Agrega el evento de eliminación al artículo
    article.addEventListener('click', function() {
        if (confirm('¿Está seguro de que quiere eliminar esta ficha?')) {
            article.classList.add('article-exit');
            article.addEventListener('animationend', () => {
                article.remove();
                articles = articles.filter(a => a.titulo !== titulo && a.texto !== texto);
                localStorage.setItem('articles', JSON.stringify(articles));
            });
        }
    });

    // Añade el artículo al contenedor principal al principio
    const mainContent = document.getElementById('main-content');
    mainContent.insertBefore(article, mainContent.firstChild);
}



Explicacion


Función para Crear y Añadir un Artículo:
function crearArticulo(titulo, texto, fecha, hora) { ... } Define la función para crear un nuevo artículo.
const article = document.createElement('article'); Crea un elemento article.
const h3 = document.createElement('h3'); Crea un elemento h3 para el título.
const pre = document.createElement('pre'); Crea un elemento pre para el texto.
const dateDiv = document.createElement('div'); Crea un contenedor para la fecha y hora.
const readButton = document.createElement('button'); Crea un botón para la lectura en voz alta.
const infoDiv = document.createElement('div'); Crea un contenedor para la información del artículo (botón y fecha).

Añadir Contenido a los Elementos:
h3.innerText = titulo; Asigna el título al elemento h3.
pre.innerText = texto; Asigna el texto al elemento pre.
dateDiv.innerText =${fecha} ${hora}; Asigna la fecha y hora al dateDiv.

Configurar el Botón de Lectura en Voz Alta:
readButton.innerText = 'Leer en Voz Alta'; Define el texto del botón.
readButton.classList.add('leer-voz-alta'); Añade la clase leer-voz-alta al botón.
readButton.addEventListener('click', function(event) { ... }); Añade un evento de clic para la lectura en voz alta.

Añadir Elementos al Artículo:
infoDiv.appendChild(readButton); Añade el botón al contenedor infoDiv.
infoDiv.appendChild(dateDiv); Añade la fecha y hora al contenedor infoDiv.
article.appendChild(h3); Añade el título al artículo.
article.appendChild(pre); Añade el texto al artículo.
article.appendChild(infoDiv); Añade el contenedor infoDiv al artículo.

Añadir Animación de Entrada y Evento de Eliminación:
article.classList.add('article-enter'); Añade la animación de entrada al artículo.
article.addEventListener('click', function() { ... }); Añade un evento de clic para eliminar el artículo.

Añadir el Artículo al Contenedor Principal:
const mainContent = document.getElementById('main-content'); Obtiene el contenedor principal.
mainContent.insertBefore(article, mainContent.firstChild); Inserta el artículo al principio del contenedor.


Agregar un Nuevo Artículo


// Agrega un nuevo artículo
document.getElementById('agregar').addEventListener('click', function() {
    const titulo = document.getElementById('titulo').value;
    const texto = document.getElementById('texto').value;

    // Obtiene la fecha y hora actual
    const now = new Date();
    const fecha = now.toLocaleDateString();
    const hora = now.toLocaleTimeString();

    // Crea un objeto de artículo
    const articleData = { titulo, texto, fecha, hora };
    articles.unshift(articleData); // Agrega el nuevo artículo al principio del array
    localStorage.setItem('articles', JSON.stringify(articles));

    // Crea y añade el artículo
    crearArticulo(titulo, texto, fecha, hora);

    // Limpia los campos del formulario
    document.getElementById('titulo').value = '';
    document.getElementById('texto').value = '';

    // Cierra el modal y restaura el tamaño del SVG
    const modal = document.getElementById('mi-modal');
    modal.classList.remove('open');
    setTimeout(() => {
        modal.close();
        document.getElementById('mi-svg').classList.remove('reducido');
    }, 500); // Espera a que termine la transición antes de cerrar el modal
});



Explicacion



Agregar un Nuevo Artículo:
document.getElementById('agregar').addEventListener('click', function() { ... });: Añade un evento de clic al botón "Agregar".
const titulo = document.getElementById('titulo').value;: Obtiene el valor del campo de título.
const texto = document.getElementById('texto').value;: Obtiene el valor del área de texto.

Obtener la Fecha y Hora Actual:
const now = new Date();: Crea un nuevo objeto Date con la fecha y hora actuales.
const fecha = now.toLocaleDateString();: Obtiene la fecha en formato local.
const hora = now.toLocaleTimeString();: Obtiene la hora en formato local.

Crear un Objeto de Artículo:
const articleData = { titulo, texto, fecha, hora };: Crea un objeto de artículo con los datos obtenidos.
articles.unshift(articleData);: Añade el nuevo artículo al principio del array articles.
localStorage.setItem('articles', JSON.stringify(articles));: Almacena el array de artículos en localStorage.

Crear y Añadir el Artículo:
crearArticulo(titulo, texto, fecha, hora);: Llama a la función crearArticulo para crear y añadir el artículo al DOM.

Limpiar los Campos del Formulario:
document.getElementById('titulo').value = '';: Limpia el campo de título.
document.getElementById('texto').value = '';: Limpia el área de texto.

Este bloque de JavaScript añade interactividad a los enlaces de navegación.



// Destacar el enlace activo en el nav
const navLinks = document.querySelectorAll('.nav-contenedor a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});



Explicacion


Explicación General:
Este bloque de JavaScript añade interactividad a los enlaces de navegación. Se asegura de que cuando se haga clic en un enlace, éste reciba la clase active, haciendo que su estilo cambie a lo definido en el CSS. Además, inicializa el estado activo basado en la URL actual.
Explicación Línea por Línea:
const navLinks = document.querySelectorAll('.nav-contenedor a');: Selecciona todos los enlaces (<a>) dentro del contenedor .nav-contenedor y los guarda en la variable navLinks.

navLinks.forEach(link => {: Inicia un bucle que recorre cada enlace en navLinks.

link.addEventListener('click', () => {: Añade un evento de clic a cada enlace. Cuando un enlace se hace clic, ejecuta la función.

navLinks.forEach(l => l.classList.remove('active'));: Dentro de la función de clic, recorre todos los enlaces y elimina la clase active de cada uno. Esto asegura que solo un enlace tenga la clase active en un momento dado.

link.classList.add('active');: Añade la clase active al enlace que fue clicado, cambiando su estilo según lo definido en el CSS.

});: Cierra la función de clic.

if (link.href === window.location.href) {: Verifica si el href del enlace coincide con la URL actual de la página.

link.classList.add('active');: Si coincide, añade la clase active a ese enlace, destacándolo como el enlace activo en la carga inicial de la página.

}: Cierra la condición if.

});: Cierra el bucle forEach.