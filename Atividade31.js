let prompt = require('prompt-sync')();
let a = parseFloat(prompt('Digite o primeiro valor: '));
let b = parseFloat(prompt('Digite o segundo valor: '));
let c = parseFloat(prompt('Digite o terceiro valor: '));


let valores = [a, b, c];


valores.sort(function(x, y) {
  return x - y;
});


console.log("Ordem crescente:", valores[0], valores[1], valores[2]);

