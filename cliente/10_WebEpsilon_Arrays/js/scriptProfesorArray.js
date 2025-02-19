// Creamos el contenedor base
const contenedor = document.querySelector(".mod-formativos");

// Iteraremos cada objeto del array 
// Pasamos por parámetro el nombre del array de datos.js
modulos.forEach(function(modulo){

   // Empezamos a crear la estructura

   const moduloFormativo = document.createElement("section"); //Creamos elemento
   moduloFormativo.classList.add("modformativo"); 

   const moduloFormativo_titulo = document.createElement("h3");
   moduloFormativo_titulo.innerHTML = modulo.titulo;
   
   const moduloFormativo_icono = document.createElement("div");
   moduloFormativo_icono.classList.add("fondo-iconos");
   moduloFormativo_icono.innerHTML = modulo.icono;
   
   const moduloFormativo_texto = document.createElement("p");
   moduloFormativo_texto.innerHTML = modulo.texto;
   
   const moduloFormativo_horas = document.createElement("p");
   moduloFormativo_horas.classList.add("horas");
   moduloFormativo_horas.innerHTML = modulo.horas;

   // rellena en la memoria título, icono, texto y horas para cada iteración
   moduloFormativo.appendChild(moduloFormativo_titulo);
   moduloFormativo.appendChild(moduloFormativo_icono);
   moduloFormativo.appendChild(moduloFormativo_texto);
   moduloFormativo.appendChild(moduloFormativo_horas);

   // Inyecta la información iterada en la web
   contenedor.appendChild(moduloFormativo);
});