let prompt = require('prompt-sync')();
let contador = 0;
for (let i = 1; i <= 75; i++) {
    let entrada = prompt('Digite a ${i}º idade:');
    let idade = Number(entrada);
    if (idade >= 18) {
        console.log(`Pessoa ' ${i}:' maior de idade`);
    } else {
        console.log(`Pessoa ' ${i}:' menor de idade`);
    }
}

