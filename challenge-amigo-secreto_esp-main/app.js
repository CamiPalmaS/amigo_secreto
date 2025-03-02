// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let mensajeError = document.getElementById("mensajeError");

function mostrarError(mensaje) {
    mensajeError.innerHTML = mensaje;
}

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value.trim();
    let patronTexto = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;
    mensajeError.innerHTML = "";

    console.log(amigo);

    //validaciones
    if (amigo === ""){
        return mostrarError("El campo nombre no puede estar vacio.");
    }
    else if (!patronTexto.test(amigo)){
        return mostrarError("Solo puedes utilizar letras para los nombres.");
    }
    //
    else if (amigos.includes(amigo)){
        return mostrarError(`El nombre ${amigo} ya existe.`);
    } else {
        amigos.push(amigo);
        console.log(amigos);
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

