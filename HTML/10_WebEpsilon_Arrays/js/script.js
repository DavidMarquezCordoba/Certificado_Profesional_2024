// Creamos un array de arrays que recorreremos con forEach
// Cada array contiene los datos de un módulo formativo 
///// [0] título
///// [1] icono
///// [2] texto
///// [3] horas
const modulos = [modulo0, modulo1, modulo2, modulo3];

// Seleccionamos el contenedor ppal donde iremos inyectando cada uno de los módulos
const contenedor = document.querySelector(".mod-formativos");

// 1º Recorremos el array padre (modulos)
// 2º Por cada array hijo asignamos el trozo código html a una constante
// 3º Inyectamos el código html en el contenedor concatenando "html"s
modulos.forEach(function(mod) {  
   const trozoAInyectar = `
      <section class="modformativo">
         <h3>${mod[0]}</h3>
         <div class="fondo-iconos">${mod[1]}</div>
         <p>${mod[2]}</p>
         <p class="horas">${mod[3]} Horas</p>
      </section>
   `;
   contenedor.innerHTML += trozoAInyectar;
});

