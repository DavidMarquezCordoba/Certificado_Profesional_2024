// JSON es el medio por donde enviar información

console.table(modulos);

// let modulos = JSON.stringify(modulos) //Convertido todo a texto

// Lo formateamos bonito y lo transformamos a texto
let modulosTexto = JSON.stringify(modulos, null, 2); //null = coge todas
                                                    //2 = sangria

let titulos = JSON.stringify(modulos, ["titulo"], 4); //Aquí solo cogeremos Titulo y 4 espacios de sangria

console.log(modulosTexto);

let todosLosObjetos = document.querySelector("#texto");
let soloTitulos = document.querySelector("#titulos");

todosLosObjetos.textContent = modulosTexto;
soloTitulos.textContent = titulos;

// Guardamos en el localStorage

let textoJSONleido = localStorage.getItem("modulos") || "hola";
localStorage.setItem("modulos", modulosTexto);