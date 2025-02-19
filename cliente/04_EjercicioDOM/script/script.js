function cambioColor(event) {
   // Vemos todos los eventos posibles
   console.log(event);
   // Coge dirctamente el id del div que hemos pinchado 
   console.log(event.target.id);

   // Guarda TODOS los ESTILOS del div dentro de una variable
   let objCSS = getComputedStyle(document.getElementById("caja6"));

   // Guardamos el COLOR de la propiedad que se pasa por parámetro
   let miColor = objCSS.getPropertyValue("background-color");
   console.log(miColor);
   
   // Comprobamos si su color es rojo, cambiará a azul
   if (miColor == "rgb(255, 0, 0)") {
      // Con el modificador THIS accedemos directamente al propio ID que hemos pinchado
      this.style.backgroundColor = "blue";
   } else {
      // En caso contrario, es decir, si está azul, cambiará a rojo
      this.style.backgroundColor = "red";
   }
}

// Función que desactiva el cambio de color y eliminamos su evento
function desactivar(event) {
   // Modificamos el color
   caja6.style.backgroundColor = "grey";
   // Cambiamos el nombre a DESACTIVADO
   caja6.innerHTML="DESACTIVADO";
   caja5.innerHTML="Activar";
   // Elminamos el evento
   caja6.removeEventListener("click", cambioColor);
   // Mostramos imagen
   alert("Cambiar el color se ha desactivado");

   // Vamos ahora a activarnos nuevamente para cambiar los colores
   // Eliminamos nuestro eventro "desactivar"
   caja5.removeEventListener("click", desactivar);
   caja5.addEventListener("click", activar);

}

// Creamos la función activar [[SOLO ACCESIBLE CUANDO ESTÉ DESACTIVADO]],para que podamos volver a cambiar el color
function activar(event) {
   // Restauramos color y texto 
   caja6.style.backgroundColor = "red";
   caja6.innerHTML = "Cambia color";
   caja5.innerHTML = "Desactivar";

   // Volvemos a activar el evento cambio de color 
   caja6.addEventListener("click", cambioColor);
   caja5.addEventListener("click", desactivar);

   // Añadimos mensaje
   alert("Se ha vuelto a activar")
}

// Declaramos las variables GLOBALES para navegar en sus eventos
let caja5 = document.querySelector("#caja5");
let caja6 = document.querySelector("#caja6");

// Creamos el evento para que cuando hagamos click, nos lleve a su función correspondiente
caja5.addEventListener("click", desactivar);
caja6.addEventListener("click", cambioColor);



