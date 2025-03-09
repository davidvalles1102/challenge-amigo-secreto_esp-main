// Inicializar el array para almacenar los nombres de los amigos
let listaDeAmigos = [];

// Función para agregar amigos a la lista
function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo"); // Capturar el valor del campo de entrada
    const nombre = inputAmigo.value.trim();

    // Validar entrada para que no esté vacía
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    // Actualizar el array de amigos
    listaDeAmigos.push(nombre);

    // Visualizar el nombre en la lista
    const listaAmigos = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nombre;
    listaAmigos.appendChild(li);

    // Limpiar el campo de entrada
    inputAmigo.value = "";
}

// Función para sortear un amigo aleatoriamente
function sortearAmigo() {
    // Validar que haya amigos disponibles en la lista
    if (listaDeAmigos.length === 0) {
        alert("La lista está vacía. Por favor, agrega al menos un nombre.");
        return;
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre sorteado
    const nombreSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>${nombreSorteado}</li>`;
}
