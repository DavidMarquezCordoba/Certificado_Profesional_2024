const boton = document.querySelector("#boton");
boton.textContent = "Realizar Fetch";
boton.addEventListener("click", realizarFetch);

const usuario = {
    nombre: "Pepe",
    edad: 25
}

const url = "https://reqres.in/api/users";

function realizarFetch (){
    fetch(url, {
        method: "POST",
        headers: {
            'x-api-key' : 'reqres-free-v1',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)

    })
        .then( resp => resp.json())
        .then( respJson => console.log(respJson))
        .catch( e => console.log("error: " + e));
}