let A = parseFloat(prompt('Digite o primeiro número: ')); 
let B = parseFloat(prompt('Digite o segundo número: ')); 
let C = '/'; 
switch (C) {
  case '+':
    console.log(`${A} + ${B} = ${A + B}`);
    break;
  case '-':
    console.log(`${A} - ${B} = ${A - B}`);
    break;
  case '*':
    console.log(`${A} * ${B} = ${A * B}`);
    break;
  case '/':
    if (B !== 0) {
      console.log(`${A} / ${B} = ${A / B}`);
    } else {
      console.log("Erro: divisão por zero.");
    }
    break;
  default:
    console.log("Operador não definido. Use +, -, * ou /.");

}