const boton = document.querySelector('#boton');

boton.textContent = "Realizar tarea asíncrona (Promise.all)";

boton.addEventListener("click", realizarTarea);

function miPromesa1() {
    return new Promise((resolve, reject) => {
        console.log('Iniciando la promesa 1');
        setTimeout(() => {
            // resolve("Promesa 1 cumplida");
            reject("Promesa 1 NO cumplida");
        }, 2000)
    });
}

function miPromesa2() {
    return new Promise((resolve, reject) => {
        console.log('Iniciando la promesa 2');
        setTimeout(() => {
            // resolve("Promesa 2 cumplida");
            reject("Promesa 2 NO cumplida");
        }, 1000)
    });
}

function realizarTarea(){
    Promise.all([miPromesa1(), miPromesa2()])
    .then( mensajes => {
        console.log(mensajes);
    }).catch( error => {
        console.log("Promesa con errrores : " + error);
    }).finally(() => {
        console.log("promesa finalizada");
    });

    console.log("Instrucciones después de la promesa");
    
}