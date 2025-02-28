// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    console.log(amigo);

    if (amigos.includes(amigo)){
        document.getElementById("mensajeError").innerHTML = "El nombre ingresado ya existe.";
    } else {
        amigos.push(amigo);
        console.log(amigos);
        return amigo;
    }
}