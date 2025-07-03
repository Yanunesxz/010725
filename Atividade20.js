
let prompt = require('prompt-sync')();
let anoCarro = prompt('Digite o ano do carro: ');
let preco = parseFloat(prompt('Digite o preço do carro: '));
anoCarro = parseInt(anoCarro);
let precoFinal;
if (anoCarro <= 2000) {
    precoFinal = preco * 0.12; 
} else if (anoCarro >= 2001 && anoCarro <= 2025) {
    precoFinal = preco * 0.07; 
} else {
    console.log('Ano inválido. Desconto não aplicado.');
    return;
}

if (precoFinal < 0) {
    console.log('O preço final não pode ser negativo.');
    return;
}

console.log(`O preço final do carro é: R$ ${precoFinal.toFixed(2)}`);