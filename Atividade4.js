let prompt = require('prompt-sync')();

let nome = prompt('Digite o nome do vendedor: ');
let salariofixo = parseFloat(prompt('Digite o salário fixo do vendedor: '));
let totalvendas = parseFloat(prompt('Digite o valor total de vendas do vendedor: '));
let comissao = totalvendas * 0.15;
let salariofinal = salariofixo + comissao;

console.log('O vendedor ' + nome + ' tem um salario fixo de R$ ' + salariofixo.toFixed(2) + ' e uma comissão de R$ ' + comissao.toFixed(2) + '. O salario final do vendedor é de R$ ' + salariofinal.toFixed(2) + '.');
