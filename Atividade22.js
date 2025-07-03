let prompt = require('prompt-sync')();
let precoCustoTotal = 0;
let precoVendaTotal = 0;

for (let i = 1; i <= 40; i++) {
  let precoCusto = parseFloat(prompt(`Produto ${i} - Digite o preço de custo:`));
  let precoVenda = parseFloat(prompt(`Produto ${i} - Digite o preço de venda:`));

  precoCustoTotal += precoCusto;
  precoVendaTotal += precoVenda;

  if (precoVenda > precoCusto) {
    console.log(`Produto ${i}: Lucro`);
  } else if (precoVenda < precoCusto) {
    console.log(`Produto ${i}: Prejuízo`);
  } else {
    console.log(`Produto ${i}: Empate`);
  }
}

let mediaCusto = precoCustoTotal / 40;
let mediaVenda = precoVendaTotal / 40;

console.log(`\nMédia do preço de custo: R$ ${mediaCusto.toFixed(2)}`);
console.log(`Média do preço de venda: R$ ${mediaVenda.toFixed(2)}`);

