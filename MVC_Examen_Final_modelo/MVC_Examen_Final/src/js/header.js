let mikey;

document.addEventListener("DOMContentLoaded", function() {
    const menuHamburguesa = document.querySelector(".boton-menu");
    const enlacesNavegacion = document.querySelector(".enlaces-menu");

    menuHamburguesa.addEventListener("click", function(){
        enlacesNavegacion.classList.toggle("ver");
    });

    mikey = document.querySelector("#key").value;
    console.log('MVC examen final del curso');
    console.log(mikey);
    
});