// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Arreglo para almacenar los nombres de los amigos
let amigos = [];

function validarNombre(nombre) {
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return false;
    }

    if (nombre.length > 30) {
        alert("El nombre no puede tener más de 30 caracteres.");
        return false;
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener caracteres especiales o números.");
        return false;
    }

    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return false;
    }

    return true; 
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); 
    listaAmigos.innerHTML = ""; // Limpiar la lista

    amigos.forEach((amigo) => {
        const nuevoAmigo = document.createElement('li'); 
        nuevoAmigo.textContent = amigo; 
        nuevoAmigo.classList.add('list-item'); 
        listaAmigos.appendChild(nuevoAmigo); 
    });
}

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar el nombre 
    if (!validarNombre(nombre)) {
        return; 
    }

    amigos.push(nombre); // Se agrega el nombre al arreglo
    actualizarListaAmigos(); // Actualizar el DOM

    input.value = '';

    alert("Amigo agregado correctamente.");
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Eventos para los botones
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});