let prompt = require('prompt-sync')();
let Num = parseFloat(prompt("Digite um número de 1 a 5: "));

switch (Num) {
    case 1: 
        console.log("one");
        break;
    case 2:
        console.log("two");
        break;
    case 3:
        console.log("three");
        break;
    case 4: 
        console.log("Four");
        break;

    case 5:
        console.log("Five");
        break;

         default:
        console.log("Número inválido. Por favor, escolha um número entre 1 e 5.");

        break;
}