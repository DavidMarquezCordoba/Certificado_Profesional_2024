const boton = document.querySelector('#boton');

boton.textContent = "Realizar tarea asíncrona Promesa";

boton.addEventListener("click", realizarTarea);

function miPromesa() {
    return new Promise((resolve, reject) => {
        console.log('Iniciando la promesa');
        setTimeout(() => {
            // resolve("Promesa cumplida");
            reject("Promesa NO cumplida");
        }, 2000)
    });
}

function realizarTarea(){
    miPromesa().then(mensaje => {
        console.log("Promesa cumplida: " + mensaje);
    }).catch( error => {
        console.log("Promesa con errrores : " + error);
    }).finally(() => {
        console.log("promesa finalizada");
    });

    console.log("Instrucciones después de la promesa");
    
}