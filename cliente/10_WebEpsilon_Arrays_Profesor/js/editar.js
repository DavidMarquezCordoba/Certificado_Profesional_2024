

// Crear tantos módulos formativos como veces le demos al click
// function crearModulo(evento) {
//    const hijos = document.querySelectorAll(".modformativos").children;  
//    const ultimoHijo = hijos[hijos.length - 1];
//    const nuevo = ultimoHijo.cloneNode(true);
//    ultimoHijo.after(nuevo);
// }

// const creaModulo = document.querySelector("main h2");
// creaModulo.addEventListener("click", crearModulo);

// Crear tantos módulos formativos como veces le demos al click
function crearModulo(evento) {
   const hijos = document.querySelector(".modformativos").children;
   console.log("hijos");
   console.log(hijos);
   
   const ultimoHijo = hijos[hijos.length - 1];  // Aquí corregimos "lengt" a "length"
   const nuevo = ultimoHijo.cloneNode(true);
   ultimoHijo.after(nuevo);
}

const creaModulo = document.querySelector("main h2");
creaModulo.addEventListener("click", crearModulo);


// Eliminar Módulo formativo
function eliminarModulo(evento) {
   
   const padre = document.querySelector(".modformativos");
   const numeroSectionAntes = padre.querySelectorAll("section").length;
   
   
   const miElemento = evento.target;
   const miSection = miElemento.closest("section"); //Esto nos da el ancestro más cercano que sea un section
   
   if (numeroSectionAntes == 1) {
      alert("JAJAJAJA no puedes");
      return;
   } 
   
   if (confirm("¿Seguro que quieres borrarlo")) {
      miSection.remove();
      const numeroSectionDespues = padre.querySelectorAll("section").length;

      // Si numSectionAntes = 4 y numSectionDespues = 4
      // Si se ha eliminado correctamente sería numSectionDespues = 3, 
      // Por lo que si restamos 4 - 3 = Debería haber 1 
      if (numeroSectionAntes - numeroSectionDespues == 1) {
         alert("Se ha eliminado correctamente!")
      } else {
         alert("No se ha podido eliminar el módulo formativo!")
      }

   } else {
      alert("Has cancelado la eliminación")
   }

}

// Función para asegurarnos que toca en el path o svg
// Esto es un paso previo a la eliminación para ser más exactos
function miraTocado(evento) {
   const miElemento = evento.target;
   if ((miElemento.tagName == "svg")||(miElemento.tagName == "path")) {
      eliminarModulo(evento);
   } else {
      cambiaInput(evento);
   }
}

document.querySelector(".modformativos").addEventListener("click", miraTocado);

function cambiaInput(evento) {
   if ((evento.target.tagName != "INPUT") && (evento.target.childNodes.length == 1)) {
      // El padre lo necesitamos para cuando vayamos a sustituir uno por otro
      const padre = evento.target.parentNode;
      const elementoAntiguo = evento.target;
      const nuevoInput = document.createElement("input");
      nuevoInput.type = "search";
      nuevoInput.style.border = "2px solid red";
      nuevoInput.name = elementoAntiguo.tagName;
      nuevoInput.value = elementoAntiguo.innerHTML;
      nuevoInput.id = elementoAntiguo.id;
      nuevoInput.classList = elementoAntiguo.classList;

      // sustituimos uno por otro
      padre.replaceChild(nuevoInput, elementoAntiguo);
      // damos el focus
      nuevoInput.focus();

   }
}

function devuelveInput(evento) {
   const miElemento = evento.target;
   if ((miElemento.tagName == "INPUT") && (miElemento.value.trim() != "")) {
      const padre = evento.target.parentNode;
      const inputAntiguo = evento.target;
      const nuevoElemento = document.createElement(inputAntiguo.name);
      // Asignamos los valores del antiguo input
      nuevoElemento.innerHTML = inputAntiguo.value;
      nuevoElemento.id = inputAntiguo.id;
      nuevoElemento.classList = inputAntiguo.classList;
      padre.replaceChild(nuevoElemento, inputAntiguo);
   }
   
}

function miraTecla(evento) {
   if (evento.key == "Enter") {
      // Blur deselecciona
      evento.target.blur();
   }
}

document.querySelector(".modformativos").addEventListener("keyup", miraTecla);
document.querySelector(".modformativos").addEventListener("focusout", devuelveInput);

