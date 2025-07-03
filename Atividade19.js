let prompt = require('prompt-sync')();
let contador = 0;



for (let i = 1; i <= 56; i++) {
  let sexo = prompt(`Digite o sexo da ${i}ª pessoa (M/F): `).toUpperCase();
  if (sexo === 'M' || sexo === 'F') {
    contador++;
    if (sexo === 'M') {
      console.log(`Pessoa ${i}: Masculino`);
    } else {
      console.log(`Pessoa ${i}: Feminino`);
    }
  } else {
    console.log(`Pessoa ${i}: Sexo inválido`);
  }
}