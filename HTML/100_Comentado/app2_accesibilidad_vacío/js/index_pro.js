
// los datos (objetos) los hemos guardado en un archivo aparte llamado datos.js
// datos.js tiene que ser llamado desde el index.html y antes que este archivo para que no de ERROR

const CLONAR_CONTENIDO = true;   // Si fuera false no copiaria el contenido
const contenedor = document.querySelector(".modformativos");

// Creamos el primer elemento (0)
const moduloFormativo0 = document.createElement("section");
moduloFormativo0.classList.add("modformativo");
// creamos lo hijos del primer elemento (0)
const moduloFormativo0_titulo = document.createElement("h3");
const moduloFormativo0_icono = document.createElement("div");
moduloFormativo0_icono.classList.add("icono");
const moduloFormativo0_texto = document.createElement("p");
const moduloFormativo0_horas = document.createElement("p");
moduloFormativo0_horas.classList.add("horas");
// Añadimos los hijos al primer elemento (0)
moduloFormativo0.appendChild(moduloFormativo0_titulo);
moduloFormativo0.appendChild(moduloFormativo0_icono);
moduloFormativo0.appendChild(moduloFormativo0_texto);
moduloFormativo0.appendChild(moduloFormativo0_horas);

// Creamos los otros elementos clonando el primero
const moduloFormativo1 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo2 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);
const moduloFormativo3 = moduloFormativo0.cloneNode(CLONAR_CONTENIDO);

// Rellenamos el contenido de todos los elementos usando los objetos
moduloFormativo0.children[0].innerHTML = modulo0.titulo;
moduloFormativo0.children[1].innerHTML = modulo0.icono;
moduloFormativo0.children[2].innerHTML = modulo0.texto;
moduloFormativo0.children[3].innerHTML = `${modulo0.horas} Horas`;

moduloFormativo1.children[0].innerHTML = modulo1.titulo;
moduloFormativo1.children[1].innerHTML = modulo1.icono;
moduloFormativo1.children[2].innerHTML = modulo1.texto;
moduloFormativo1.children[3].innerHTML = `${modulo1.horas} Horas`;

moduloFormativo2.children[0].innerHTML = modulo2.titulo;
moduloFormativo2.children[1].innerHTML = modulo2.icono;
moduloFormativo2.children[2].innerHTML = modulo2.texto;
moduloFormativo2.children[3].innerHTML = `${modulo2.horas} Horas`;

moduloFormativo3.children[0].innerHTML = modulo3.titulo;
moduloFormativo3.children[1].innerHTML = modulo3.icono;
moduloFormativo3.children[2].innerHTML = modulo3.texto;
moduloFormativo3.children[3].innerHTML = `${modulo3.horas} Horas`;




// Inyectamos los elementos en el DOM usando el contenedor con el método append que lo inserta después de todos sus hijos
 contenedor.append(moduloFormativo0);
 contenedor.append(moduloFormativo1);
 contenedor.append(moduloFormativo2);
 contenedor.append(moduloFormativo3);

// Inyectamos los elementos en el DOM usando el contenedor con el método appendChild que lo inserta después de todos sus hijos
// contenedor.appendChild(moduloFormativo0);
// contenedor.appendChild(moduloFormativo1);
// contenedor.appendChild(moduloFormativo2);
// contenedor.appendChild(moduloFormativo3);

