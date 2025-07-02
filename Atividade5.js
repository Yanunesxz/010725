let prompt = require('prompt-sync')();

let nome = prompt("Digite o nome do aluno:");

let notas = [];
let soma = 0;
let nota;


for (let i = 1; i <= 3; i++) {
  nota = parseFloat(prompt(`Digite a nota ${i}:`));
  notas.push(nota);
  soma += nota;
}


let media = soma / 3;


console.log("Aluno:", nome);
console.log("Média:", media.toFixed(2));