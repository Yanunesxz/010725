let prompt = require('prompt-sync')(); 
let valorDeposito = parseFloat(prompt('Digite o valor do depósito: '));
let rendimentoMensal = valorDeposito * 0.70;
let valorTotal = valorDeposito + rendimentoMensal; 
console.log("O valor do depósito é: R$ " + valorTotal.toFixed(2));
