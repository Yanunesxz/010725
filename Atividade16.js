let prompt = require('prompt-sync')();

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let nota3 = parseFloat(prompt("Digite a terceira nota: "));

let media = (nota1 + nota2 + nota3) / 3;

console.log("A média das notas é: " + media.toFixed(2));

let situacao;
if (media >= 7) {
    situacao = "Aprovado";

} else if (media < 7 && media > 5) {
    situacao = "Recuperação";
} else {
    situacao = "Reprovado";
}

console.log("Situação do aluno: " + situacao);
console.log("Média final: " + media.toFixed(2));
