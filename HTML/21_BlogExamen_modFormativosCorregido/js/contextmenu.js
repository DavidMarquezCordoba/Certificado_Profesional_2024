
function crearContextmenu(evento) {

    // Esto es para no duplicar los menú, 
    // si cuando pulsamos el botón derecho existía un menú, 
    // lo eliminamos antes de crear otro en la nueva posición
    if(document.querySelector("#contextmenu")){ 
        document.querySelector("#contextmenu").remove();
    }

    //Este if es para que solamente aparezca el menú contextual(el del botón 
    // derecho del ratón) si estoy sobre una entrada del blog
    if(evento.target.closest("article")) { 
        // Creamos el div de nuestro menú contextual
        const contextmenu = document.createElement("div");
        contextmenu.id="contextmenu";
        contextmenu.dataset.ficha = evento.target.textContent;
        contextmenu.classList.add("contextmenu");
        // Posiciona el menú en la ubicación del clic
        contextmenu.style.top = `${evento.pageY}px`;
        contextmenu.style.left = `${evento.pageX}px`;
        contextmenu.style.display = "block";

        // Creamos nuestra lista de elementos del contextmenu
        const lista = document.createElement("ul");

        // creamos nuestros elementos con sus acciones
        // podríamos crear menus diferentes dependiendo si estamos
        // sobre un elemento o sobre otro o sobre ninguno
        const elementos = [
            {texto:"Escuchar Entrada", accion:function() {oirEntrada(evento.target.closest("article")) }, ayudavoz:"Pulsa aquí para oir esta entrada del blog"}
            ,{texto:"Eliminar Entrada", accion:function() {quitaEntrada({target:evento.target.closest("article")}) }, ayudavoz:"Pulsa aquí para eliminar esta entrada del blog"} // lo he metido en un objeto con la propiedad target para que la misma función de quitaElemento quite los elementos normales y enviados por nosotros
        ];
        elementos.forEach((elemento) => {
            const elementoNuevo = document.createElement("li");
            elementoNuevo.textContent = elemento.texto;
            elementoNuevo.setAttribute("aria-describedby", elemento.ayudavoz);
            elementoNuevo.addEventListener("click", elemento.accion);
            lista.appendChild(elementoNuevo);
        });

        contextmenu.appendChild(lista);
        document.body.appendChild(contextmenu);
    }
}


// Evento cuando el DOM se ha creado correctamente, es para evitar acceder al DOM sin que esté teminado
// Recordad que si creamos una variable o constante dentro, no existirá fuera de aquí.
document.addEventListener("DOMContentLoaded", () => {

    // Evento para abrir el menú contextual
    document.addEventListener("contextmenu", (evento) => {
        evento.preventDefault(); // Evita el menú por defecto
        crearContextmenu(evento);
    });

    // Cerrar el menú cuando se hace clic en otra parte y está abierto
    document.addEventListener("click", () => {
        if(document.querySelector("#contextmenu")){ // Si existe un elemento con id = "#contextmenu" elimínalo
            document.querySelector("#contextmenu").remove();
        }
    });
});