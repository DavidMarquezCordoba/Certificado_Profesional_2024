let mikey;
function pideCursos() {
    const url = `servicios/api-cursos.php?key=${mikey}`;
    fetch(url)
    .then(response => response.json())
    .then(cursos => {
        console.log(cursos);
        padre.innerHTML = "";
        if(cursos.length == 0){
            const nocursos = document.createElement("h2");
            nocursos.id = "no-cursos";
            nocursos.textContent = "NO SE HAN ENCONTRADO CURSOS";
            padre.appendChild(nocursos);
        } else {
            if(document.querySelector("#no-cursos")){
                document.querySelector("#no-cursos").remove();
            }
            cursos.forEach(curso => { 
                const micurso = document.createElement("img");
                micurso.classList.add(curso.clase);
                micurso.src = `../img/cursos/${curso.imagen}.png`;
                micurso.alt = curso.alt;
                padre.appendChild(micurso);
            });
        }
    })
}

async function pideCursosAsync() {
    const url = `servicios/api-cursos.php?key=${mikey}`;
    response = await fetch(url);
    cursos = await response.json();
    console.log(cursos);
    padre.innerHTML = "";
    if(cursos.length == 0){
        const nocursos = document.createElement("h2");
        nocursos.id = "no-cursos";
        nocursos.textContent = "NO SE HAN ENCONTRADO CURSOS";
        padre.appendChild(nocursos);
    } else {
        if(document.querySelector("#no-cursos")){
            document.querySelector("#no-cursos").remove();
        }
        cursos.forEach(curso => { 
            const micurso = document.createElement("img");
            micurso.classList.add(curso.clase);
            micurso.src = `../img/cursos/${curso.imagen}.png`;
            micurso.alt = curso.alt;
            padre.appendChild(micurso);
        });
    }

}

document.addEventListener("DOMContentLoaded", () => {
    mikey = document.querySelector("#mikey").value;
    pideCursosAsync();
});