let prompt = require('prompt-sync')();

let dPercorrida = parseFloat(prompt('Digite a distância em metros:) '));
let cPercorrida = parseFloat(prompt('Digite o consumo do combustível em km/l:) '));

console.log("o consumo medio da distancia a ser percorrida é: " + (dPercorrida / cPercorrida).toFixed(2) + " litros");
console.log("o consumo medio da distancia a ser percorrida é: " + (dPercorrida / 1000 / cPercorrida).toFixed(2) + " litros");


