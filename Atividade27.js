let prompt = require('prompt-sync')();
let precoInicial = parseFloat(prompt('Digite o preço inicial do carro: '));
let combustivel = prompt('Digite o tipo de combustível (A para álcool, G para gasolina, D para diesel): ').toUpperCase();

switch (combustivel) {
    case 'A':
       console.log(`O preço final do carro é: R$ ${(precoInicial - (precoInicial * 0.25)).toFixed(2)}`);
       console.log('O desconto para alcool é de: ' + (precoInicial * 0.25).toFixed(2));
        break;
    case 'G':
        console.log(`O preço final do carro é: R$ ${(precoInicial - (precoInicial * 0.21)).toFixed(2)}`);
        console.log('O desconto para gasolina é de: ' + (precoInicial * 0.21).toFixed(2));
        break;
    case 'D':
        console.log(`O preço final do carro é: R$ ${(precoInicial - (precoInicial * 0.14)).toFixed(2)}`);
        console.log('O desconto para diesel é de: ' + (precoInicial * 0.14).toFixed(2));
        break;
    default:
        console.log('Tipo de combustível inválido.');
}


