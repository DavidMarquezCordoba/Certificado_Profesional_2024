const nombrePais = document.querySelector("#pais");
const contenedor = document.querySelector("#contenedor")

nombrePais.addEventListener("input", buscaMiBandera);

function buscaMiBandera(e) {
    buscaBandera(e);
    contenedor.textContent = "Buscando mi bandera..."
}

function buscaBandera(e) {
    const url = "https://restcountries.com/v3.1/all"; //Declaramos el enlace
    fetch(url) //Hace la petición
    .then(response => {return response.json();}) // response.json()) -> puede ir sin el return cuando es una línea
    .then(datos => {
        contenedor.innerHTML = ""; //Limpiamos "Buscando mi bandera..."
        datos.forEach(pais => {     //pais porque recorre el json de paises, saca información individual
            if(pais.name.common.toLowerCase().includes(nombrePais.value)){ //Si coincide, 
                
                const bandera = document.createElement("img");
                bandera.src = pais.flags.png; //Asignamos al src, la ruta de la bandera
                
                const nombre = document.createElement("p");
                nombre.textContent = pais.translations.spa.official;

                // Mostramos
                contenedor.appendChild(nombre);
                contenedor.appendChild(bandera);
            }
        });
    })
}