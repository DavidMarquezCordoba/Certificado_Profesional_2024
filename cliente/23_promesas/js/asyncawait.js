const boton = document.querySelector("#boton");
boton.textContent = "Realizar tarea asíncrona con async await";
boton.addEventListener("click", realizarTarea);

function miPromesa() {
   return new Promise((resolve, reject) => {
      console.log("Iniciando la promesa");
      
      setTimeout(() => {
         const exito = Math.random() > 0.5;
         if (exito) {
            resolve("Promesa cumplida!!")
         } else {
            reject("Promesa NO cumplida")
         }
      
         // resolve("¡Promesa cumplida!");
      }, 1000);
   })
}

// function realizartarea() {
//    miPromesa()
//       .then( mensaje => {
//          console.log("Éxito: " + mensaje);
//       })
//       .catch(error => {
//          console.log("Error: ");
//       })
//       .finally(() => {
//          console.log("Tarea finalizada pero no sé como");
//       });

      // console.log("Instrucciones después de mi promesa");
// }

async function realizartareaAsync() {
   try {
      const resultado = await miPromesa();
      console.log("Éxito: " + resultado);
      
   } catch (error) {
      console.log("Error: " + error);
      
   }
}

function realizarTarea() {
   realizartareaAsync();
   console.log("Instrucciones después de mi promesa");
}