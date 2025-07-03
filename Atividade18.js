let prompt = require('prompt-sync')();
let contador = 0;

for (let i = 1; i <= 75; i++) {
    let entrada = prompt(`Digite a idade da ${i}ª pessoa: `);
    let idade = Number(entrada);

    if (isNaN(idade)) {
        console.log("Entrada inválida! Você deve digitar apenas números.");
        break; 
    }

    if (idade >= 18) {
        console.log(`Pessoa ${i}: maior de idade`);
    } else {
        console.log(`Pessoa ${i}: menor de idade`);
    }
}
