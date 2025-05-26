let enviarFormulario, botonesOjo, botonRegistro, botonLogin, contenedorLogin, contenedorRegistro;

document.addEventListener("DOMContentLoaded", function () {
    botonRegistro = document.querySelector("#loguearse a");
    botonLogin = document.querySelector("#registrarse a");
    contenedorLogin = document.querySelector("#loguearse");
    contenedorRegistro = document.querySelector("#registrarse");
    botonesOjo = document.querySelectorAll(".div-pass label");
    enviarFormulario = document.querySelectorAll("form");

    botonLogin.addEventListener("click", e => {
        e.preventDefault();
        console.log("login");
        contenedorLogin.classList.remove("ocultar");
        contenedorRegistro.classList.remove("mostrar");
        contenedorRegistro.classList.add("ocultar");
        setTimeout(() => {
            contenedorRegistro.classList.add("oculto");
            contenedorLogin.classList.remove("oculto");
            contenedorLogin.classList.add("mostrar");
        }, 450);        
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
        }, 450);
    });

    botonesOjo.forEach(botonOjo => {
        botonOjo.addEventListener("click", e => {
            const inputOjo = "#" + e.target.id + "+input";
            const miInput = document.querySelector(inputOjo);
            if((miInput.getAttribute("type")).toLocaleLowerCase() != "text") {
                miInput.setAttribute("type", "text");
                e.target.innerHTML = "&#128512;";
            } else {
                miInput.setAttribute("type", "password");
                e.target.innerHTML = "&#129763;";
            }
        });
    });

    enviarFormulario.forEach(formulario => {
        formulario.addEventListener("submit", e => {
            e.preventDefault();
            enviarLoginRegistro(e);
        });
    });

});

async function enviarLoginRegistro(e){
    mostrarLoader();
    const datos = e.target.querySelectorAll("input");
    const datos_post = new FormData();
    datos.forEach(dato => {
        datos_post.append(dato.name, dato.value);
    });
    try {
        const url = e.target.getAttribute("action");
        const response = await fetch(url, {
            headers: {
                'token': mikey
            },
            method: 'POST',
            body: datos_post
        });
        const datosRecibidos = await response.json();
        console.log(datosRecibidos);
        
        if(datosRecibidos['ok']){  // la solicitud se ha procesado correctamento
            mensaje('todo ok: ' + datosRecibidos['mensaje'],"/");
        } else {
            alerta(datosRecibidos['error']);
        }

    } catch (error) {
        console.log(error);
    } finally {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    }
}
