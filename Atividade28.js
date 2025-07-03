let prompt = require('prompt-sync')();
let totalFuncionarios = 584;
let aumentoTotal = 0;

let salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo:"));

for (let i = 1; i <= totalFuncionarios; i++) {
  let nome = prompt(`Digite o nome do ${i}º funcionário:`);
  let salario = parseFloat(prompt(`Digite o salário atual de ${nome}:`));

  let numSalariosMinimos = salario / salarioMinimo;
  let percentualReajuste = 0;

  if (numSalariosMinimos < 3) {
    percentualReajuste = 0.50;
  } else if (numSalariosMinimos <= 10) {
    percentualReajuste = 0.20;
  } else if (numSalariosMinimos <= 20) {
    percentualReajuste = 0.15;
  } else {
    percentualReajuste = 0.10;
  }

  let reajuste = salario * percentualReajuste;
  let novoSalario = salario + reajuste;
  aumentoTotal += reajuste;

  console.log(`Funcionário: ${nome}`);
  console.log(`Reajuste: R$ ${reajuste.toFixed(2)}`);
  console.log(`Novo salário: R$ ${novoSalario.toFixed(2)}`);
  console.log('-----------------------------');
}

console.log(`Aumento total na folha de pagamento: R$ ${aumentoTotal.toFixed(2)}`);