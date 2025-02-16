
// los datos (objetos) los hemos guardado en un archivo aparte llamado datos_array.js
// datos_array.js tiene que ser llamado desde el index.html y antes que este archivo para que no de ERROR

// Buscamos al elemento contenedor de los section
const contenedor = document.querySelector(".modformativos");

// Creamos los elementos con un forEach
modulos.forEach(function(modulo) {
    const moduloFormativo = document.createElement("section");
    moduloFormativo.classList.add("modformativo");

    // creamos lo hijos del primer elemento
    const moduloFormativo_titulo = document.createElement("h3");
    moduloFormativo_titulo.innerHTML = modulo.titulo;
    
    const moduloFormativo_icono = document.createElement("div");
    moduloFormativo_icono.classList.add("icono");
    moduloFormativo_icono.innerHTML = modulo.icono;
    
    const moduloFormativo_texto = document.createElement("p");
    moduloFormativo_texto.innerHTML = modulo.texto;
    
    const moduloFormativo_horas = document.createElement("p");
    moduloFormativo_horas.classList.add("horas");
    moduloFormativo_horas.innerHTML = `${modulo.horas} Horas`;

// Añadimos los hijos al elemento en curso
    moduloFormativo.appendChild(moduloFormativo_titulo);
    moduloFormativo.appendChild(moduloFormativo_icono);
    moduloFormativo.appendChild(moduloFormativo_texto);
    moduloFormativo.appendChild(moduloFormativo_horas);
    
    // Inyectamos el section creado completo en el DOM usando el contenedor con el método append que lo inserta después de todos sus hijos
    contenedor.append(moduloFormativo);
});

