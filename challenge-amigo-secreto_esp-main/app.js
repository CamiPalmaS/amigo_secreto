// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    let mensajeError = document.getElementById("mensajeError");
    mensajeError.innerHTML = "";
    console.log(amigo);

    if (amigos.includes(amigo)){
        mensajeError.innerHTML = `El nombre ${amigo} ya existe.`;
    } else {
        amigos.push(amigo);
        console.log(amigos);
        mostrarAmigos();
        return amigo;
    }
}

function mostrarAmigos(){
    let seccionLista = document.getElementById("listaAmigos");
    seccionLista.innerHTML ="";

    amigos.forEach((amigo) => {
        const elemento = document.createElement("li");
        elemento.innerHTML =`~ ${amigo} ~`;

        seccionLista.appendChild(elemento);
    });
}