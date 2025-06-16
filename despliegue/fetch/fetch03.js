const boton = document.querySelector("#boton");
boton.textContent = "Realizar Fetch";
boton.addEventListener("click", realizarFetch);

const url = "img/logoe.jpg";

function realizarFetch (){
    fetch(url)
        .then( resp => resp.clone().blob())
        .then( miImagen => {
            const miurl = URL.createObjectURL(miImagen);
            document.querySelector("img").src = miurl;
            console.log(miurl);
            
        })
        .catch( e => console.log("error: " + e));
}