let miKey;

document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguesa = document.querySelector(".boton-menu");
    const enlacesNavegacion = document.querySelector(".enlaces-menu");

    menuHamburguesa.addEventListener("click", function(){
        enlacesNavegacion.classList.toggle("ver");
    });

    miKey = document.querySelector("#key").value;
});