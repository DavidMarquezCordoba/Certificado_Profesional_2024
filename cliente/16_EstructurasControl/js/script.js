// **************************** //
//    Estructuras de control   //
// ************************** //

// FOR
// Itera una cantidad ya determinada de veces

const numeroDivs = 17;

for (let i = 1; i <= numeroDivs; i++) {
    
    const padre = document.querySelector("body");
    const divCreado = document.createElement("div");

    // Forma 1:
    // if (i == numeroDivs) {
    //     divCreado.id = "jugar";
    // } else {
    //     divCreado.id = `bloques ${i}`
    // }

    // Forma 2
    divCreado.id = (i == numeroDivs)?"jugar":`bloque${i}`;
    divCreado.textContent = (i==numeroDivs)?"jugar":`Bloque${i}`
    padre.appendChild(divCreado);
    
    if (i%2==0) {
        divCreado.classList.add("verde");
    } else {
        divCreado.classList.add("azul");
    }
    
    // divCreado.classList.add((i%2==0)?"verde":"azul"); //Lo mismo que el if de arriba pero en ternario
    
    switch (divCreado.textContent) {
        case "Bloque1":
            divCreado.style.border = "5px solid black";
            break;
        case "Bloque2":
            divCreado.style.border = "5px solid yellow";
            break;
        case "Bloque3":
            divCreado.style.border = "5px solid green";
            break;
        case "Bloque4":
            divCreado.style.border = "5px solid orange";
            break;
        case "Bloque5":
            divCreado.style.border = "5px solid red";
            break;
        case "Bloque6":
            divCreado.style.border = "5px solid blue";
            break;
        case "Bloque7":
            divCreado.style.border = "5px solid violet";
            break;
        case "jugar":
            divCreado.style.cursor = "pointer"; //
            break;

        default:
            divCreado.style.border = "5px solid gray";
            break;
    }
}

function juego() {
    const quieroJugar = true;
    // mijuego es una etiqueta
    mijuego: while (true) {
        let valor = prompt("¿Juegas a \"números\" o a \"letras\"? cuando quieras dejar de jugar escribe \"fin\"");
        
        if (valor.toLocaleLowerCase() == "fin") break;

        if (valor.toLocaleLowerCase() == "numeros") {
            
            numeros: while(quieroJugar){
                let finTiempo = Date.now() + 10000;
                const valor1 = Math.round(Math.random()*100) //Esto genera un num entre 0 y 1 lo multiplica *100 y luego redondea
                const valor2 = Math.round(Math.random()*100) //Esto genera un num entre 0 y 1 lo multiplica *100 y luego redondea

                // do {
                    
                //     let miNumero = prompt(`¿Cuánto es "${valor1} + ${valor2}"? cuando quieras acabar el juego escribe "fin" y si quieres cambiar de juego escribe "cambiar"`);
                //     if (miNumero.toLocaleLowerCase() == "fin") break mijuego;
                //     if (miNumero.toLocaleLowerCase() == "cambiar") break numeros;
    
                //     if(finTiempo < Date.now()){
                //         alert("Ha pasado más de 10 segundos, el juego ha terminado");
                //         break mijuego;
                //     }

                //     if (miNumero == (valor1+valor2)) {
                //         alert("Correcto!");
                //         quieroJugar = false;
                //     } else{
                //         alert("Vuelve a intentarlo");
                //     }

                    
                // } while (quieroJugar)
                
                    
                let miNumero = prompt(`¿Cuánto es "${valor1} + ${valor2}"? cuando quieras acabar el juego escribe "fin" y si quieres cambiar de juego escribe "cambiar"`);
                if (miNumero.toLocaleLowerCase() == "fin") break mijuego;
                if (miNumero.toLocaleLowerCase() == "cambiar") break numeros;
                
                if(finTiempo < Date.now()){
                    alert("Ha pasado más de 10 segundos, el juego ha terminado");
                    break mijuego;
                }
                
                if (miNumero == (valor1+valor2)) {
                    alert("Correcto!");
                    break numeros;
                } else{
                    alert("Vuelve a intentarlo");
                }
            }
            
        } else if(valor.toLocaleLowerCase() == "letras"){
            
            letras: do {
                let finTiempo = Date.now() + 10000;
                let letraCorrecta = "Z";
                let numAleatorio = Math.floor((Math.random()*25))+65;
                
                let letraAleatoria = String.fromCharCode(numAleatorio) //fromCharCode crear una cadena de texto a partir de valores de código de caracteres (códigos Unicode) que se pasan como argumentos.
                let miLetra = prompt(`¿Qué letra va delante de ${letraAleatoria}?, "cambiar" => cambia de juego "fin" => Termina el juego`)
                
                if (miLetra.toLocaleLowerCase() == "fin") break mijuego;
                if (miLetra.toLocaleLowerCase() == "cambiar") break letras;
                
                if(finTiempo < Date.now()){
                    alert("Ha pasado más de 10 segundos, el juego ha terminado");
                    break mijuego;
                }
                
                if (letraAleatoria.charCodeAt(0)>65) {
                    letraCorrecta = String.fromCharCode(letraAleatoria.charCodeAt(0)-1);
                }

                if (letraCorrecta == miLetra.toLocaleUpperCase()) {
                    alert("C O R R E C T O !!!")
                } else {
                    alert(`La respuesta correcta es la ${letraCorrecta}, "cambiar" => cambia de juego "fin" => Termina el juego`)
                }

            
            } while (quieroJugar);
        } else {
            alert("No entiendo a qué quieres jugar");
        }
    }
}

document.querySelector("#jugar").addEventListener("click", juego);