window.cipher = {
  encode : (numero, textoUsuario) =>{
    let resultado = "";
    numero = parseInt(numero);
      for (let i = 0; i < textoUsuario.length; i++) { // El for recorrera el string de acuerdo a la longitud de la cadena
        let codigoAscii = textoUsuario.charCodeAt(i); // Número de letra en codigo Ascii
        if (codigoAscii >= 65 && codigoAscii <=90){ // Letras mayusuculas en codigo Ascii
          let formula = (codigoAscii - 65 + numero) % 26 + 65; // Fórmula para cifrar
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Nuevo número de letra en codigo Ascii
          resultado = resultado + nuevoCodigoAscii;
        }  else if (codigoAscii >=97 && codigoAscii <=122){ // Letras minusculas en codigo Ascii
          let formula = (codigoAscii - 97 + numero) % 26 + 97;
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Nuevo número de letra en codigo Ascii
          resultado = resultado + nuevoCodigoAscii;
        } else { 
          resultado = resultado + textoUsuario[i];
        }
           
        }
      return resultado;
    },

  decode : (numero, textoUsuario) =>{
    let resultado = "";
    numero = parseInt(numero);
      for (let i = 0; i < textoUsuario.length; i++) { // El for recorrera el string de acuerdo a la longitud de la cadena
        let codigoAscii = textoUsuario.charCodeAt(i); // Número de letra en ASCII
        if (codigoAscii >= 65 && codigoAscii <=90){ // Letras mayusculas en codigo Ascii
          let formula = (codigoAscii - 65 - numero + 52) % 26 + 65; // Fórmula para descifrar
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Nuevo número de letra en codigo Ascii
          resultado = resultado + nuevoCodigoAscii;
        } else if (codigoAscii >=97 && codigoAscii <=122){ // Letras minusculas en codigo Ascii
          let formula = (codigoAscii - 97 - numero + 52) % 26 + 97; // Fórmula para descifrar
          let nuevoCodigoAscii = (String.fromCharCode(formula)); // Nuevo número de letra en codigo Ascii
          resultado = resultado + nuevoCodigoAscii;
        } else{
          resultado = resultado + textoUsuario[i];
        }
          
        }
     return resultado;
    }
  };
