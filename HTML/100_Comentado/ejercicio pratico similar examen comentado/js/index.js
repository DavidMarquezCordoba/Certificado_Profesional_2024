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
