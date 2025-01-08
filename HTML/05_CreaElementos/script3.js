//Insertar fragmentos

let miFragmento = document.createDocumentFragment();
let nuevaCaja14 = document.createElement("div");
let nuevaCaja15 = document.createElement("div");
let nuevaCaja16 = document.createElement("div");

nuevaCaja14.textContent = "caja14 por fragmento";
nuevaCaja15.textContent = "caja15 por fragmento";
nuevaCaja16.textContent = "caja16 por fragmento";

nuevaCaja14.classList.add("rosa");
nuevaCaja15.classList.add("violeta");
nuevaCaja16.classList.add("gris");

// Creamos una caja nueva que introduciremos dentro de la caja 15
let nuevaCaja17 = document.createElement("div");
nuevaCaja17.textContent = "caja 17 por fragmento dentro de caja 15";
nuevaCaja17.classList.add("agua");

// Ahora introducimos la caja 17 dentro de la 15
nuevaCaja15.appendChild(nuevaCaja17);

miFragmento.appendChild(nuevaCaja14);
miFragmento.appendChild(nuevaCaja15);
miFragmento.appendChild(nuevaCaja16);

document.body.appendChild(miFragmento);