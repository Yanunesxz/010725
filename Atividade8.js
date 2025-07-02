let prompt = require('prompt-sync')();
let dolar = parseFloat(prompt('Digite a quantidade de dólares: '));
let cotacao = parseFloat(prompt('Digite a cotação do dólar: '));
let real = dolar * cotacao;
console.log("O valor do dólar em reais é: R$ " + real);




