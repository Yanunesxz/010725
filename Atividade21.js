let prompt = require('prompt-sync')();
let dadosNomes = prompt('Digite seu nome: ');
let dadosIdade = prompt('Digite sua idade: ');  
let dadosSaude = prompt('Digite seu estado de saúde: ');

if (dadosIdade < 18) {
    console.log('Você Nao pode servir ao exército, pois é menor de idade.');
}else if (dadosIdade >= 18 && dadosIdade <= 60) {
    console.log('Você pode servir ao exército.');
}else if (dadosIdade > 60) {
    console.log('Você não pode servir ao exército, pois é maior de 60 anos.');
    console.log('Você não pode servir ao exército, pois é maior de 60 anos.');
}

switch (dadosSaude.toLowerCase()) {
        
    case 'boa':
        console.log('Pode servir ao exército.');
        break;
    case 'regular':
        console.log('Pode servir ao exército com restrições.');
        break;
    case 'ruim':
        console.log('Não pode servir ao exército.');
        break;
    default:
        console.log('Estado de saúde desconhecido.');
        break;
}