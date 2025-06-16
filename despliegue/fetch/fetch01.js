const boton = document.querySelector("#boton");
boton.textContent = "Realizar Fetch";
boton.addEventListener("click", realizarFetch);

const url = "https://reqres.in/api/users";

function realizarFetch (){
    fetch(url, {
        headers:{
            'x-api-key' : 'reqres-free-v1'
        }
    })
        .then( resp => resp.json())
        .then( respJson => console.log(respJson))
        .catch( e => console.log("error: " + e));
}