// cargamos el blog desde el localStorage
const entradas = JSON.parse(localStorage.getItem("entradas")) || [
    {titulo: "1984",fecha: "viernes, 15 de marzo de 2024, 14:23",texto:"La novela popularizó los conceptos del omnipresente y vigilante Gran Hermano o Hermano Mayor, de la notoria habitación 101, de la ubicua policía del Pensamiento y de la neolengua"}
    ,{titulo: "Viaje al centro de la Tierra",fecha: "viernes, 15 de marzo de 2024, 14:24",texto:"un pergamino de origen rúnico que oculta un criptograma. Tras muchos esfuerzos y gracias a un descubrimiento casual de Axel, logran descifrarlo; es un texto del alquimista islandés Arne Saknussemm1​ quien revela cómo llegar al centro de la tierra"}
    ,{titulo: "Así habló Zaratustra",fecha: "domingo, 17 de marzo de 2024, 19:11",texto: "La obra contiene las principales ideas de Nietzsche, expresadas de forma poética: está compuesta por una serie de relatos y discursos que ponen en el centro de atención algunos hechos y reflexiones de un profeta llamado Zaratustra"}
];

// constantes y variables globales
const botonNuevo = document.querySelector("#boton-nuevo");
const nuevaEntrada = document.querySelector("#nueva-entrada");
const contenedorEntradas = document.querySelector("main");
const agregar = document.querySelector("#agregar");
botonNuevo.addEventListener("click", () => {nuevaEntrada.showModal();});
contenedorEntradas.addEventListener("click", quitaEntrada);
agregar.addEventListener("click", addNuevaEntrada);


// Función crear entradas del blog en el DOM
function crearEntrada(entrada, nuevo = false) {
    const miEntrada = document.createElement("article");
    if(nuevo) miEntrada.classList.add("crece"); // Aqui le ponemos la clase crece para la animación
    const titulo = document.createElement("h3");
    titulo.textContent = entrada.titulo;
    const texto = document.createElement("code");
    texto.textContent = entrada.texto;
    const fecha = document.createElement("time");
    fecha.dateTime = entrada.fecha;
    fecha.textContent = entrada.fecha;
    miEntrada.appendChild(titulo);
    miEntrada.appendChild(texto);
    miEntrada.appendChild(fecha);
    contenedorEntradas.prepend(miEntrada);
}

function addNuevaEntrada(evento) {
    var today = new Date();
    let opciones = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour:"numeric", minute:"numeric" };
    var date = today.toLocaleDateString('es-ES', opciones);
    const nuevaExp = {
        titulo:document.querySelector("#titulo").value
        ,texto:document.querySelector("#texto").value
        ,fecha:date
    };
    entradas.push(nuevaExp);
    localStorage.setItem("entradas", JSON.stringify(entradas));
    crearEntrada(nuevaExp, true);
}

function quitaEntrada(evento) {
    if((evento.target.tagName != "MAIN") && (evento.target.tagName != "svg") && (evento.target.tagName != "path") && (confirm("¿Seguro que quieres eliminar esta entrada?"))) {
        const miEntrada = evento.target.closest("article");
        const indice = entradas.findIndex((entrada) => {return (entrada.titulo.includes(miEntrada.children[0].textContent) && entrada.texto.includes(miEntrada.children[1].textContent))});
        entradas.splice(indice, 1)
        localStorage.setItem("entradas", JSON.stringify(entradas));
        miEntrada.classList = "quita";
        setTimeout(() => {
            miEntrada.remove();
        }, 1450);
    }
}

document.addEventListener("DOMContentLoaded",() => {
    entradas.forEach(entrada => crearEntrada(entrada));
});