let prompt = require('prompt-sync')();
let NumA = parseFloat(prompt('Digite o primeiro número: '));
let NumB = parseFloat(prompt('Digite o segundo número: '));

if (NumA > NumB) {
    console.log("O primeiro número é maior que o segundo.");
} else if (NumA < NumB) {
    console.log("O primeiro número é menor que o segundo.");
} else {
    console.log("Os números são iguais.");
}