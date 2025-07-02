let prompt = require('prompt-sync')();
let precoCusto = parseFloat(prompt("Digite o preço de custo do produto:"));
let percentual = parseFloat(prompt("Digite o percentual de acréscimo (%):"));


let valorVenda = precoCusto + (precoCusto * percentual / 100);

console.log("O valor de venda do produto é: R$ " + valorVenda.toFixed(2));