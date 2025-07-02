let prompt = require('prompt-sync')(); 
let contador = 0;

for (let i = 1; i <= 80; i++) {
    let entrada = prompt(`Digite o ${i}º número:`); 
    let numero = Number(entrada);

    if (numero >= 10 && numero <= 150) {
        contador++;
    }
}

console.log(`Quantidade de números no intervalo entre 10 e 150: ${contador}`);