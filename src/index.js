let numero = document.getElementById("numero"); // Traer el valor de numero offset
let textoUsuario = document.getElementById("texto"); // Traer el valor de texto
const resultado = document.getElementById("resultado"); // Traer la caja de texto resultado
const botonCifrar = document.getElementById("Codificar"); // Traer el botón cifrar
const botonDescifrar = document.getElementById("Decodificar");
const inicio = document.getElementById("inicio")
const limpiar = document.getElementById("limpiar");

const botonLimpiar =()=>{
    location.href = "index.html"
}
limpiar.addEventListener("click", botonLimpiar)


const botonInicio =()=> {
    location.href = "inicio.html";
}
inicio.addEventListener("click", botonInicio);



botonCifrar.addEventListener("click", ()=>{
    let textoUsuarioM = textoUsuario.value;
    resultado.value = (window.cipher.encode(numero.value, textoUsuarioM));
    /*console.log(window.cipher.encode(numero.value, textoUsuarioM));*/
}); 

botonDescifrar.addEventListener("click", ()=>{
    let textoUsuarioM = textoUsuario.value;
    resultado.value = (window.cipher.decode(numero.value, textoUsuarioM));
    /*console.log(window.cipher.encode(numero.value, textoUsuarioM));*/
});
