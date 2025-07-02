let prompt = require('prompt-sync')();
let valorProduto = parseFloat(prompt('Digite o valor do produto: '));

let prestacao = parseFloat(prompt('Digite quantas prestações: '));
let valorPrestacao = valorProduto / prestacao;

if (prestacao < 1 || prestacao > 5) 
    console.log("O valor da prestação é: R$ " + valorPrestacao.toFixed(2));
else {
    console.log("O número de prestações deve ser entre 1 e 5.");        
}

