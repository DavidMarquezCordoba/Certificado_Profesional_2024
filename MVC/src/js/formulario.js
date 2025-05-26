let formulario;

document.addEventListener("DOMContentLoaded", function () {
    formulario = document.querySelector("#formularioContacto");

    formulario.addEventListener("submit", e => {
        e.preventDefault();
        enviarFormulario(e);
    });
});

async function enviarFormulario(e){
    mostrarLoader();
    
    const elementos = e.target.elements; // más completo que querySelectorAll("input")
    const datos_post = new FormData();
    
    for (let elemento of elementos) { // No se puede usar foreach porque vamos a usar "continue" y este no funciona en foreach
        if (!elemento.name) continue;

        if (elemento.type === "radio" || elemento.type === "checkbox") {
            if (elemento.checked) {
                datos_post.append(elemento.name, elemento.value);
            }
        } else {
            datos_post.append(elemento.name, elemento.value);
        }
    }

    try {
        const url = e.target.getAttribute("action");
        const metodo = e.target.getAttribute("method") || 'POST';

        const response = await fetch(url, {
            headers: {
                'token': mikey
            },
            method: 'POST',
            body: datos_post
        });

        // clonamos el response para poder usarlo 2 veces
        // const datosStr = await response.clone().text();
        // console.log("recibido:" + datosStr);
        

        const datosRecibidos = await response.json();
        
        
        if(datosRecibidos['ok']){  // la solicitud se ha procesado correctamento
            mensaje('todo ok: ' + datosRecibidos['mensaje'],'/contacto');
        } else {
            alerta(datosRecibidos['error']);
        }

    } catch (error) {
        console.log(error);
    }  finally {
        ocultarLoader(); // Siempre se oculta el loader, ocurra error o no
    }
}