let prompt = require('prompt-sync')();
let N = parseInt(prompt("Quantos números você deseja digitar?"));

for (let i = 1; i <= N; i++) {
  let numero = parseFloat(prompt(`Digite o ${i}º número:`));

  if (numero > 0) {
    console.log(`${numero} é positivo`);
  } else if (numero < 0) {
    console.log(`${numero} é negativo`);
  } else {
    console.log(`${numero} é zero`);
  }
}