function alerta(mitexto){
    document.querySelector("#alerta-texto").textContent = mitexto;
    document.querySelector("#alerta").showPopover();
} 

function mensaje(mitexto, url = ''){
    document.querySelector("#mensaje-texto").textContent = mitexto;
    document.querySelector("#mensaje").classList.add("entra", "ver");
    setTimeout(() => {
        document.querySelector("#mensaje").classList.remove("entra");
        document.querySelector("#mensaje").classList.add("sale");
        setTimeout(() => {
            document.querySelector("#mensaje").classList.remove("ver", "sale");
            if(url != ""){
                location.href = url;
            }
        }, 450);
    }, 2550);
} 
