let prompt = require('prompt-sync')();
let nome = prompt("Digite o nome do funcionario: ");
let idade = parseInt(prompt("Digite a idade do funcionário: "));
let sexo = prompt("Digite o sexo do funcionário (M/F): ").toUpperCase();
let salariofixo = parseFloat(prompt("Digite o salário fixo do funcionário: "));
 switch (sexo) {
        case 'M':
            if (idade >=30)
                console.log('O fucionario ' + nome + ' recebera ' + (salariofixo + 100).toFixed(2) + ' reais');
            else
                console.log('O fucionario ' + nome + ' recebera ' + (salariofixo + 50).toFixed(2) + ' reais');
            break;
        case 'F':
            if (idade >=30)
                console.log('O fucionario ' + nome + ' recebera ' + (salariofixo + 200).toFixed(2) + ' reais');
            else
                console.log('O fucionario ' + nome + ' recebera ' + (salariofixo + 80).toFixed(2) + ' reais');
            break;
}