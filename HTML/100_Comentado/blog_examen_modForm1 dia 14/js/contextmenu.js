function crearContextmenu(evento) {

    // Esto es para no duplicar los menús,
    // si cuando pulsamos el botón derecho existía un menú, 
    // lo eliminamos antes de crear otro en la nueva posición
    if(document.querySelector("#contextmenu")){ 
        document.querySelector("#contextmenu").remove(); // Elimina el menú anterior si ya existe
    }

    // Este if es para que solamente aparezca el menú contextual (el del botón 
    // derecho del ratón) si estoy sobre una entrada del blog
    if(evento.target.closest("article")) { 
        // Creamos el div de nuestro menú contextual
        const contextmenu = document.createElement("div");
        contextmenu.id="contextmenu"; // Asignamos el id para poder acceder al menú
        contextmenu.dataset.ficha = evento.target.textContent; // Añadimos el contenido del artículo al menú
        contextmenu.classList.add("contextmenu"); // Añadimos la clase para darle estilo
        // Posiciona el menú en la ubicación del clic
        contextmenu.style.top = `${evento.pageY}px`; // Ajustamos la posición vertical
        contextmenu.style.left = `${evento.pageX}px`; // Ajustamos la posición horizontal
        contextmenu.style.display = "block"; // Hacemos visible el menú

        // Creamos nuestra lista de elementos del contextmenu
        const lista = document.createElement("ul");

        // Creamos nuestros elementos con sus acciones
        // podríamos crear menús diferentes dependiendo si estamos
        // sobre un elemento o sobre otro o sobre ninguno
        const elementos = [
            {texto:"Escuchar Entrada", accion:function() {oirEntrada(evento.target.closest("article")) }, ayudavoz:"Pulsa aquí para oír esta entrada del blog"},
            {texto:"Eliminar Entrada", accion:function() {quitaEntrada({target:evento.target.closest("article")}) }, ayudavoz:"Pulsa aquí para eliminar esta entrada del blog"} // lo he metido en un objeto con la propiedad target para que la misma función de quitaEntrada elimine los elementos
        ];
        // Recorremos los elementos para crear cada uno de los items del menú
        elementos.forEach((elemento) => {
            const elementoNuevo = document.createElement("li");
            elementoNuevo.textContent = elemento.texto; // Establecemos el texto del item
            elementoNuevo.setAttribute("aria-describedby", elemento.ayudavoz); // Añadimos texto para accesibilidad
            elementoNuevo.addEventListener("click", elemento.accion); // Asignamos la acción correspondiente al click
            lista.appendChild(elementoNuevo); // Añadimos el item a la lista
        });

        contextmenu.appendChild(lista); // Añadimos la lista al menú contextual
        document.body.appendChild(contextmenu); // Añadimos el menú al body del documento
    }
}

// Evento cuando el DOM se ha creado correctamente, es para evitar acceder al DOM sin que esté terminado
// Recordad que si creamos una variable o constante dentro, no existirá fuera de aquí.
document.addEventListener("DOMContentLoaded", () => {

    // Evento para abrir el menú contextual
    document.addEventListener("contextmenu", (evento) => {
        evento.preventDefault(); // Evita el menú por defecto
        crearContextmenu(evento); // Llama a la función para crear el menú
    });

    // Cerrar el menú cuando se hace clic en otra parte y está abierto
    document.addEventListener("click", () => {
        if(document.querySelector("#contextmenu")){ // Si existe un elemento con id = "#contextmenu" elimínalo
            document.querySelector("#contextmenu").remove(); // Elimina el menú si se hace clic fuera
        }
    });
});
