window.cipher = {
  encode : (numero, textoUsuario) =>{
    let resultado = "";
    numero = parseInt(numero);
    console.log(typeof  numero)
      for (let i = 0; i < textoUsuario.length; i++) { // El for recorrera el texto del usuario
        let codigoAscii = textoUsuario.charCodeAt(i); // Número de letra en ASCII
          let formula = (codigoAscii - 65 + numero) % 26 + 65; // Fórmula
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Obtener el valor de la letra cifrada en ASCII
          resultado = resultado + nuevoCodigoAscii;
        }
      return resultado;
    },

  decode : (numero, textoUsuario) =>{
    let resultado = "";
    numero = parseInt(numero);
      for (let i = 0; i < textoUsuario.length; i++) { // El for recorrera el texto del usuario
        let codigoAscii = textoUsuario.charCodeAt(i); // Número de letra en ASCII
          let formula = (codigoAscii + 65 - numero) % 26 + 65; // Fórmula
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Obtener el valor de la letra cifrada en ASCII
          resultado = resultado + nuevoCodigoAscii;
        }
     return resultado;
    }
  };
