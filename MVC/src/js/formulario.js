let formulario;

document.addEventListener("DOMContentLoaded", function () {
    formulario = document.querySelector("#formularioContacto");

    formulario.addEventListener("submit", e => { // aqui estamos detectando el formulario (con submit, en vez de usar el click)
        e.preventDefault();
        enviarFormulario(e);
    });
});

async function enviarFormulario(e){
    mostrarLoader();
    
    const elementos = e.target.elements; // más completo que querySelectorAll("input") // me dice los elementos que estan en mi formulario // hay elementos que pueden contener valores, y no son precisamente inputs (podria haber select por ejemplo)
    const datos_post = new FormData(); 
    
    for (let elemento of elementos) { // No se puede usar foreach porque vamos a usar "continue" y este no funciona en foreach
        if (!elemento.name) continue; // si no existe ningun atributo name en este elemento -> continua con el siguiente // continue se salta solo esa pasada y vuelve a empezar

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

        // para poder leer que es lo que me esta devolviendo:
        const datosStr = await response.clone().text(); // el problema es que en el momento que le solicito que me lo convierta, el response se queda vacio, por eso clonamos la respuesta
        console.log("recibido:" + datosStr);

        const datosRecibidos = await response.json();

        // console.log(datosRecibidos);
        
        
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