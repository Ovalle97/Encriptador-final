// Función para encriptar el texto
function encriptarTexto(text) {
    let textoEncriptado = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            textoEncriptado += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            textoEncriptado += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
        } else {
            textoEncriptado += char; // Se agregan los caracteres que no son letras sin cambios
        }
    }
    return textoEncriptado;
}

// Función para desencriptar el texto
function descencriptarTexto(text) {
    let textoDesencriptado = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            textoDesencriptado += String.fromCharCode(((char.charCodeAt(0) - 97 - 1 + 26) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            textoDesencriptado += String.fromCharCode(((char.charCodeAt(0) - 65 - 1 + 26) % 26) + 65);
        } else {
            textoDesencriptado += char; // Dejar caracteres que no son letras sin cambios
        }
    }
    return textoDesencriptado;
}

// Manejar el clic en el botón de encriptar
document.getElementById('cifrar-boton').addEventListener('click', function () {
    let inputTexto = document.querySelector('textarea').value;
    let textoEncriptado = encriptarTexto(inputTexto);
    document.querySelector('textarea').value = ''; // Limpiar el área de texto
    actualizarContainer2(textoEncriptado);
});

// Manejar el clic en el botón de desencriptar
document.getElementById('descifrar-boton').addEventListener('click', function () {
    let inputTexto = document.querySelector('textarea').value;
    let textoDescencriptado = descencriptarTexto(inputTexto);
    document.querySelector('textarea').value = ''; // Limpiar el área de texto
    actualizarContainer2(textoDescencriptado);
});

// Actualizar la visualización del mensaje y agregar botón de copiar
function actualizarContainer2(text) {
    const container2 = document.querySelector('.container2');
    container2.innerHTML = ''; // Limpiar contenido previo

    if (text.trim() === '') {
        container2.innerHTML = `
            <img class="imagen-mensaje" src="img/Muñeco.png" alt="Ningún mensaje fue encontrado">
            <section class="mensaje-container">
                <h1 class="titulo"><b>Ningún mensaje fue encontrado</b></h1>
                <p class="parrafo">Ingresa el texto que desees encriptar o desencriptar.</p>
            </section>
        `;
    } else {
        container2.innerHTML = `
                <p class="parrafoResultado">${text}</p>
                <button class="boton" id="copiar-boton">Copiar</button>
        `;
        document.getElementById('copiar-boton').addEventListener('click', function () {
            copiarTexto(text);
        });
    }
}

// Función para copiar el texto encriptado al portapapeles
function copiarTexto(text) {
    navigator.clipboard.writeText(text);
}
