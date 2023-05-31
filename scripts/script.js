const input = document.querySelector("#input-box");
const output = document.querySelector("#output-box");
const copy = document.querySelector("#copyButton");
copy.style.display = "none"

function scrolltoEnd(){
    let access = document.getElementById("end");
    access.scrollIntoView({behavior: "smooth"}, true);
    }

function textValidator(){
    let inputText = document.querySelector("#input-box").value;
    let validate = inputText.match(/^[a-z ñ]*$/);

    if(!validate || validate === 0) {
        alert(" ( ＾◡＾)っ  Solo letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function encryptButton() {
    if (!textValidator()) {
        const encryptedText = encrypt(input.value)
        output.value = encryptedText
        input.value = "";
        // parte para desaparecer la imagen del fondo cuando se genera el desencriptado
        output.style.backgroundImage = "none"
        copy.style.display = "block"
    }
    
}

function encrypt(stringEncrypt) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringEncrypt = stringEncrypt.toLowerCase()

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringEncrypt.includes(matrixCode[i][0])) {
            stringEncrypt = stringEncrypt.replaceAll(matrixCode[i][0], matrixCode[i][1])
        }
    }
    return stringEncrypt
}

function dencryptButton() {
    const dencryptedText = decrypt(input.value)
    output.value = dencryptedText
    input.value = "";
    output.style.backgroundImage = "none"
    copy.style.display = "block"
}

function decrypt(stringDecrypt) {
    let matrixCode = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"],];
    stringDecrypt = stringDecrypt.toLowerCase()

    for(let i = 0; i < matrixCode.length; i++) {
        if(stringDecrypt.includes(matrixCode[i][1])) {
            stringDecrypt = stringDecrypt.replaceAll(matrixCode[i][1], matrixCode[i][0])
        }
    }
    return stringDecrypt
}

function copyButton() {
    output.select();
    navigator.clipboard.writeText(output.value)
    output.value = "";
    copy.style.display = "none"
    alert("( > ᴗ < ) Texto Copiado")
}
