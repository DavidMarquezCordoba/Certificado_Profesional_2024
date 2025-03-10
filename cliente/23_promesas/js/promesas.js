const boton = document.querySelector("#boton");
boton.textContent = "Realizar tarea asíncrona";
boton.addEventListener("click", realizarTarea);

function miPromesa() {
   return new Promise((resolve, reject) => {
      console.log("Iniciando la promesa");
      
      const exito = Math.random > 0.5;

      if (exito) {
         resolve("Promesa cumplida!!")
      } else {
         reject("Promesa NO cumplida")
      }
      setTimeout(() => {
         resolve("¡Promesa cumplida!");
      }, 5000);
   })
}

function realizartarea() {
   miPromesa()
      .then( mensaje => {
         console.log("Éxito: " + mensaje);
      })
      .catch(error => {
         console.log("Error: ");
      })
      .finally(() => {
         console.log("Tarea finalizada pero no sé como");
      });

   
}