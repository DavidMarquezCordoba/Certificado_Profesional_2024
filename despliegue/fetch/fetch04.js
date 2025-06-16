const boton = document.querySelector("#boton");
boton.textContent = "Realizar Fetch 04";
boton.addEventListener("click", realizarFetch);

const url = "https://reqres.in/api/users/2";

function realizarFetch (){
    fetch(url, {
        headers:{
            'x-api-key' : 'reqres-free-v1'
        }
    })
        .then( resp => resp.json())
        .then( respJson => realizarFetch2(respJson))
        .catch( e => console.log("error: " + e));
}

const url2= "https://reqres.in/api/users";

function realizarFetch2(miusuario) {
    const usuario = {
        nombre: miusuario.data.first_name,
        apellido: miusuario.data.last_name
    };

    fetch(url2, {
        method: "POST",
        headers:{
            'x-api-key' : 'reqres-free-v1',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
        .then( resp => resp.json())
        .then( respJson => console.log(respJson))
        .catch( e => console.log("error: " + e));
}
