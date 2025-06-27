const prompt = require("prompt-sync")();

// leia duas notas
let nome = prompt("digite o nome do aluno: ");
let n1 = Number.parseFloat(prompt(`digite a 1°nota do aluno ${nome}: `));
let n2 = Number.parseFloat(prompt(`digite a 2°nota do aluno ${nome}: `));
// calcule a média
let media = (n1 + n2) / 2;
console.log(`=======${nome}=========`);
console.log(`nota1: ${n1}`);
console.log(`nota2: ${n2}`);
console.log(`media: ${media}`);
