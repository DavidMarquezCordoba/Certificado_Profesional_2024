const cursos = [
   {
      clase: "imagen1",
      imagen: "curso1",
      alt: "foto curso operaciones básicas de comunicación"
   },
   {
      clase: "imagen1",
      imagen: "curso2",
      alt: "foto curso habilitación para la docencia"
   },
   {
      clase: "imagen1",
      imagen: "curso3",
      alt: "foto curso operaciones auxiliares de servicio"
   },
   {
      clase: "imagen1",
      imagen: "curso4",
      alt: "foto curso"
   },
   //aula 1
   {
      clase: "aula1",
      imagen: "aula1",
      alt: "foto curso"
   },
   //
   {
      clase: "imagen2",
      imagen: "curso5",
      alt: "foto curso"
   },
   {
      clase: "imagen2",
      imagen: "curso6",
      alt: "foto curso"
   },
   {
      clase: "imagen2",
      imagen: "curso7",
      alt: "foto curso"
   },
   //aula 2
   {
      clase: "aula2",
      imagen: "aula2",
      alt: "foto curso"
   },
   //
   //imagen 2-3
   {
      clase: "imagen2-3",
      imagen: "curso8",
      alt: "foto curso"
   },
   //
   {
      clase: "imagen3",
      imagen: "curso9",
      alt: "foto curso"
   },
   {
      clase: "imagen3",
      imagen: "curso10",
      alt: "foto curso"
   },
   {
      clase: "imagen3",
      imagen: "curso11",
      alt: "foto curso"
   },
   {
      clase: "imagen3",
      imagen: "curso12",
      alt: "foto curso"
   },
      //aula 3
      {
         clase: "aula3",
         imagen: "aula3",
         alt: "foto curso"
      },
      //
]

const padre = document.querySelector(".otros-cursos");

cursos.forEach((cursos, indice) => {
   // console.log(`Esta es la pasada número ${indice}` );
   const micurso = document.createElement("img");
   micurso.classList.add(cursos.clase);
   micurso.src = `./img/cursos/${cursos.imagen}.png`;
   micurso.alt = cursos.alt;
   padre.appendChild(micurso);
});

// MODAL
let modal;

function mostrarModal(evento){
   if(evento.target.tagName != "IMG"){
      return // Si no se hace clic en una imagen, no hacer nada
   } 

   // Crear el contenedor del modal
   modal = document.createElement("div");
   modal.classList.add("modal");
   // Lo añado al DOM
   document.body.appendChild(modal);

   // Crear imagen del modal
   const imagenModal = evento.target.cloneNode(true);
   imagenModal.classList = "imagen-modal";

   // Lo añado
   modal.appendChild(imagenModal);

   // Preparo el evento para cerrarlo
   modal.addEventListener("click", cerrarModal);
}



padre.addEventListener("click", mostrarModal);

function cerrarModal(evento) {
   modal.classList.add("modal-ocultar");
   modal.removeEventListener("click", cerrarModal);
   setTimeout(()=>{
      modal.remove();
   },900);
   
}