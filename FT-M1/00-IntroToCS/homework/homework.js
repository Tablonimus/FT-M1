'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var resultado = 0;

  for (let i = 0; i < num.length; i++) {
     resultado += +num[i] * 2 ** (num.length - 1 - i);
  }
  return resultado;
}

function DecimalABinario(num) {
  // tu codigo aca
 return num.toString(2);
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}