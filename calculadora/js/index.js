let pantalla, botones;

document.addEventListener("DOMContentLoaded", function(){
    pantalla = document.querySelector("#pantalla");

    botones = document.querySelector(".botones");

    botones.addEventListener("click", escribeEnPantalla);
});

function escribeEnPantalla(e){
    if(e.target.tagName != "BUTTON"){
        return;
    }
    seleccionaBoton(e.target.innerHTML);
}

function seleccionaBoton(botonPulsado){
    console.log(botonPulsado);
    
}