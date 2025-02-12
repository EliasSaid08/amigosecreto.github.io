// Arreglo para almacenar los nombres de los amigos
let amigos = [];

// Función para validar el nombre
function validarNombre(nombre) {
    // Validar que el campo no esté vacío
    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return false;
    }

    // Validar longitud del nombre
    if (nombre.length > 30) {
        alert("El nombre no puede tener más de 30 caracteres.");
        return false;
    }

    if (nombre.length < 3) {
        alert("El nombre debe tener al menos 3 caracteres.");
        return false;
    }

    // Validar que no contenga caracteres especiales (solo letras y espacios)
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    if (!regex.test(nombre)) {
        alert("El nombre no puede contener caracteres especiales o números.");
        return false;
    }

    // Validar que el nombre no esté duplicado
    if (amigos.includes(nombre)) {
        alert("Este nombre ya está en la lista.");
        return false;
    }

    return true; // Si pasa todas las validaciones
}

// Función para actualizar la lista de amigos en el DOM
function actualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos'); // Obtener el elemento de la lista
    listaAmigos.innerHTML = ""; // Limpiar la lista existente

    // Iterar sobre el arreglo de amigos y agregar cada nombre como un <li>
    amigos.forEach((amigo) => {
        const nuevoAmigo = document.createElement('li'); // Crear un nuevo elemento de lista
        nuevoAmigo.textContent = amigo; // Asignar el nombre del amigo al elemento
        nuevoAmigo.classList.add('list-item'); // Agregar una clase para estilos (opcional)
        listaAmigos.appendChild(nuevoAmigo); // Agregar el elemento a la lista
    });
}

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    // Validar el nombre antes de agregarlo
    if (!validarNombre(nombre)) {
        return; // Si la validación falla, no se agrega el nombre
    }

    amigos.push(nombre); // Agregar el nombre al arreglo
    actualizarListaAmigos(); // Actualizar la lista en el DOM

    // Limpiar el campo de entrada
    input.value = '';

    // Mostrar mensaje de éxito
    alert("Amigo agregado correctamente.");
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Verificar si hay nombres en la lista
    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    // Seleccionar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li class="result-item">El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}

// Event listeners para los botones
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.button-add').addEventListener('click', agregarAmigo);
    document.querySelector('.button-draw').addEventListener('click', sortearAmigo);
});