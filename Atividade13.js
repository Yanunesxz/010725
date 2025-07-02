let prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Digite um número: "));
if (numero > 10) {
    console.log("O número é maior que 10.");
} else if (numero < 10) {
    console.log("O número é menor que 10.");
}