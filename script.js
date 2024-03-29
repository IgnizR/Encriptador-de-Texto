const inputMensaje = document.querySelector("#mensaje");
const inputResultado = document.querySelector("#resultado");

const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");
const btnEscuchar = document.querySelector("#escuchar");

function mostrar(){
    document.getElementById('ocultar').style.display = 'block';
    document.getElementById('search').style.display = 'none';
    document.getElementById('texto').style.display = 'none';
    document.getElementById('copia').style.display = 'block';
}

function minusculas (e){
    e.value = e.value.toLowerCase();
}

function encriptar(){
    var mensaje = inputMensaje.value;
    var mensajeEncriptado = mensaje.replaceAll("e", "enter").replaceAll("i", "imes").replaceAll("o", "ober").replaceAll("a", "ai").replaceAll("u", "ufat");
    inputResultado.value = mensajeEncriptado.toLowerCase();
}

function desencriptar(){
    var mensajeEncriptado = inputMensaje.value;
    var mensaje = mensajeEncriptado.replaceAll("enter", "e").replaceAll("imes", "i").replaceAll("ober", "o").replaceAll("ai", "a").replaceAll("ufat", "u");
    inputResultado.value = mensaje;
}

function copiar(){
    var mensajeEncriptado = inputResultado.value;
    navigator.clipboard.writeText(mensajeEncriptado);
    inputMensaje.value = "";
    inputMensaje.focus();
}

function escuchar(){
    var mensajeEncriptado = inputResultado.value;
    let msg = new SpeechSynthesisUtterance();
    msg.text = mensajeEncriptado;
    msg.lang = "es-Es";
    window.speechSynthesis.speak(msg);
}

function ambasFunciones(){
    mostrar();
    encriptar();
}

function funcionSecundaria(){
    mostrar();
    desencriptar();
}

btnEncriptar.onclick = ambasFunciones;

btnDesencriptar.onclick = funcionSecundaria;

btnCopiar.onclick = copiar;

btnEscuchar.onclick = escuchar;

