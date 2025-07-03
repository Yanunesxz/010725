let prompt = require('prompt-sync')();
let numero = parseFloat(prompt("Digite um número: "));

switch (true) {
    case (numero < 25):
        console.log("O número é menor que 25.");
        break;
    case (numero > 80):
        console.log("O número é maior que 80.");
        break;
    case (numero ===40):
        console.log("O número é igual a 40.");
        break;
        default:
            console.log("Número fora dos intervalos.");
}