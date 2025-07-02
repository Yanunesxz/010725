let prompt = require('prompt-sync')(); 
let num1    = parseFloat(prompt('Digite o primeiro número: '));
let num2    = parseFloat(prompt('Digite o segundo número: '));

let soma = num1 + num2;
let subtracao = num1 - num2;    
let multiplicacao = num1 * num2;
let divisao = num1 / num2;

console.log("O resultado da soma é: " + soma);
console.log("O resultado da subtração é: " + subtracao);
console.log("O resultado da multiplicação é: " + multiplicacao);
console.log("O resultado da divisão é: " + divisao);
