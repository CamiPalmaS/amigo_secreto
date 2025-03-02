// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let mensajeError = document.getElementById("mensajeError");

function mostrarError(mensaje) {
    mensajeError.innerHTML = mensaje;
}

function agregarAmigo() {
    let input = document.getElementById("amigo")
    let amigo = input.value.trim().toLowerCase();
    let patronTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    mensajeError.innerHTML = "";

    console.log(amigo);

    //validaciones
    if (amigo === ""){
        return mostrarError("El campo nombre no puede estar vacio.");
    }
    else if (!patronTexto.test(amigo)){
        input.value = "";
        return mostrarError("Solo puedes utilizar letras para los nombres.");
    }
    else if (amigos.includes(amigo)){
        input.value = "";
        return mostrarError(`El nombre ${amigo} ya existe.`);
    } else {
        amigos.push(amigo);
        console.log(amigos);
        input.value = "";
        mostrarAmigos();
        mostrarError("")
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

function sortearAmigo(){
    let resultadoSorteo = document.getElementById("resultado");
    if (amigos.length === 0){
        return mostrarError("La lista de amigos está vacía. Agrega a tus amigos para realizar el sorteo.");
    } else {
        let indiceRandom = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceRandom];
        console.log(amigoSorteado);
        return resultadoSorteo.innerHTML = amigoSorteado;
    }
}