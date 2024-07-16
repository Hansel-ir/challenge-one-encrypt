let btnEncriptar = document.querySelector("#btn-encriptar");

btnEncriptar.addEventListener("click", function () {

    let textInput = document.querySelector("#input-txt").value;
    if (validarTexto(textInput) == false) {
        let encript = encriptar(textInput);
        let resultado = document.querySelector('#msg');
        resultado.value = encript;
    } else {
        textInput = "";
    }

})

const reglas = { "e": "enter", "i": "imes", "a": "ai", "o": "ober", "u": "ufat" };

function encriptar(textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(obj, reglas[obj]);
        textoIngresado = Encriptado;
    }
    return (Encriptado);
}

function validarTexto(texto) {

    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòù']/g;
    let mayusculas = /[A-Z]/g;
    let vacio = "";

    if (texto.match(mayusculas) || texto.match(caracteres)) {
        alert("No se permiten caracteres especiales ni mayusculas");
        return true;
    } else if (texto == vacio) {
        alert("Ingrese un mensaje para encriptar");
        return true;
    } else {
        return false;
    }
}

let btnCopiar = document.querySelector("#btn-copy");

btnCopiar.addEventListener("click", function () {
    let copiado = document.querySelector("#msg").value;
    navigator.clipboard.writeText(copiado);
    document.querySelector("#input-txt").value = "";

})

let btnDesencriptar = document.querySelector("#btn-desencriptar");

btnDesencriptar.addEventListener("click",function(){
    let textoIngresado = document.querySelector("#input-txt").value;
    let desencriptado = desencriptar(textoIngresado);

    let resultado = document.querySelector("#msg");
    resultado.value = desencriptado;
})

function desencriptar (textoIngresado) {
    let Encriptado = "";
    for (const obj in reglas) {
        Encriptado = textoIngresado.replaceAll(reglas[obj],obj);
        textoIngresado = Encriptado;        
    }
    return (Encriptado);
}