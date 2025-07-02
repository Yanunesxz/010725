let prompt = require('prompt-sync')(); 
let precoDefabrcacao = parseFloat(prompt("Digite o preço de fabricação do produto: ")); 
let percentualDistribuidor = precoDefabrcacao * 0.28; 
let percentualImpostos = precoDefabrcacao * 0.45;
let precoFinal = precoDefabrcacao + percentualDistribuidor + percentualImpostos;
console.log("O preço final do produto é: R$ " + precoFinal.toFixed(2));
