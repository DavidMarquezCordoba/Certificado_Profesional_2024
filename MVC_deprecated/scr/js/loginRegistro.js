let botonRegistro, botonLogin, contenedorLogin, contenedorRegistro, botonesOjo, enviarFormulario;

document.addEventListener("DOMContentLoaded", function () {
    botonRegistro = document.querySelector("#loguearse a");
    botonLogin = document.querySelector("#registrarse a");
    contenedorLogin = document.querySelector("#loguearse");
    contenedorRegistro = document.querySelector("#registrarse");
    botonesOjo = document.querySelectorAll(".div-pass label"); //aca usamos querySelectorAll para coger los 3 ojos (todos los label que esten dentro de mi div-pass)
    enviarFormulario = document.querySelectorAll("form");
    
    botonLogin.addEventListener("click", e => {
        e.preventDefault(); //con esto evitamos que recargue la pagina cada vez que pinchamos en "registrate" o "inicia sesion", donde se nos borrarian los datos cada vez que recarga
        console.log("login");
        contenedorLogin.classList.remove("ocultar");
        contenedorRegistro.classList.remove("mostrar");
        contenedorRegistro.classList.add("ocultar");
        setTimeout(() => {
            contenedorRegistro.classList.add("oculto");
            contenedorLogin.classList.remove("oculto");
            contenedorLogin.classList.add("mostrar");
        }, 450); //la desaparicion es un poquito antes de la animacion
    });
    
    botonRegistro.addEventListener("click", e => {
        e.preventDefault();
        console.log("registro");
        contenedorRegistro.classList.remove("ocultar");
        contenedorLogin.classList.remove("mostrar");
        contenedorLogin.classList.add("ocultar");
        setTimeout(() => {
            contenedorLogin.classList.add("oculto");
            contenedorRegistro.classList.remove("oculto");
            contenedorRegistro.classList.add("mostrar");
        }, 450); //la desaparicion es un poquito antes de la animacion
    });

    botonesOjo.forEach(botonOjo => {
        botonOjo.addEventListener("click", e => {
            const inputOjo = "#" + e.target.id + "+input"; //que coja el elemento input que este adyacente a mi id, para que sea el id del ojo que toque
            const miInput = document.querySelector(inputOjo);
            if((miInput.getAttribute("type")).toLocaleLowerCase() != "text") { //con getAttibute pregunto como esta el atribute type
                miInput.setAttribute("type", "text"); //nos puede ocurrir que ciertos atributos no podamos acceder con . => pero con setAttribute siempre funciona
                e.target.innerHTML = "&#128512;";
            } else {
                miInput.setAttribute("type", "password");
                e.target.innerHTML = "&#129763;";
            }
        });
    });

    enviarFormulario.forEach(formulario => {
        formulario.addEventListener("submit", e => { //no se puede hacer un addEventListener a un array
            e.preventDefault();
            enviarLoginRegistro(e);
        });
    });

});

async function enviarLoginRegistro(e) { //esta funcion sale de nuestra linea temporal, y se queda funcionando aparte, sin parar mi codigo
    const datos = e.target.querySelectorAll("input"); //mis datos estan dentro de mi input dentro de mi formulario
    const datos_post = new FormData(); //datos_pos: contiene todos los valores de mi formulario | estoy creando un objeto que su estructura esta definida en una clase, llamada FormData
    datos.forEach((dato) => {
        datos_post.append(dato.name, dato.value); //aqui dentro le tengo que meter el name de la variable y el valor, introduzco todos los valores de mi formulario, al que se le ha hecho el submit
    });
    try {
        const url = e.target.getAttribute("action"); //con esto vamos a la url del formulario en el que estemos 
        const response = await fetch(url, { //que vaya a esa url, que mire esos datos y que utilice el metodo post
            method: 'POST',
            body: datos_post //body: mis datos
        }); 
        const datosRecibidos = await response.json(); //pero esto tambien es una promesa, entonces tenemos que poner un await adelante
        if(datosRecibidos['ok']){ //la solicitud se ha procesado correctamente 
            alert('todo ok: ' + datosRecibidos['mensaje']);
        } else {
            alert(datosRecibidos['error']);
        }
    } catch (error) {
        
    }
}