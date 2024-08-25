// Función para encriptar el texto
function encryptText(text) {
    let encryptedText = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            encryptedText += String.fromCharCode(((char.charCodeAt(0) - 97 + 1) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            encryptedText += String.fromCharCode(((char.charCodeAt(0) - 65 + 1) % 26) + 65);
        } else {
            encryptedText += char; // Dejar caracteres que no son letras sin cambios
        }
    }
    return encryptedText;
}

// Función para desencriptar el texto
function decryptText(text) {
    let decryptedText = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            decryptedText += String.fromCharCode(((char.charCodeAt(0) - 97 - 1 + 26) % 26) + 97);
        } else if (char >= 'A' && char <= 'Z') {
            decryptedText += String.fromCharCode(((char.charCodeAt(0) - 65 - 1 + 26) % 26) + 65);
        } else {
            decryptedText += char; // Dejar caracteres que no son letras sin cambios
        }
    }
    return decryptedText;
}

// Manejar el clic en el botón de encriptar
document.getElementById('encrypt-btn').addEventListener('click', function() {
    let inputText = document.querySelector('textarea').value;
    let encryptedText = encryptText(inputText);
    document.querySelector('textarea').value = ''; // Limpiar el área de texto
    updateMessageDisplay(encryptedText);
});

// Manejar el clic en el botón de desencriptar
document.getElementById('decrypt-btn').addEventListener('click', function() {
    let inputText = document.querySelector('textarea').value;
    let decryptedText = decryptText(inputText);
    document.querySelector('textarea').value = ''; // Limpiar el área de texto
    updateMessageDisplay(decryptedText);
});

// Actualizar la visualización del mensaje y agregar botón de copiar
function updateMessageDisplay(text) {
    const messageDisplay = document.querySelector('.container2');
    messageDisplay.innerHTML = ''; // Limpiar contenido previo

    if (text.trim() === '') {
        messageDisplay.innerHTML = `
            <img src="img/img1.jpg" alt="Ningún mensaje fue encontrado">
            <p class="titulo-container"><b>Ningún mensaje fue encontrado</b></p>
            <p>Ingresa el texto que desees encriptar o desencriptar.</p>
        `;
    } else {
        const textElement = document.createElement('p');
        textElement.textContent = text;
        const copyButton = document.createElement('button');
        copyButton.textContent = 'Copiar';
        copyButton.addEventListener('click', function() {
            copyToClipboard(text);
        });
        messageDisplay.appendChild(textElement);
        messageDisplay.appendChild(copyButton);
    }
}

// Función para copiar el texto encriptado al portapapeles
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
