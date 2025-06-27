const prompt = require("prompt-sync")();

let n = Number(prompt("Digite um número: "));
let dobro = n * 2;
let triplo = n * 3;
let raiz_quadrada = n ** (1 / 2);

console.log(`O valor digitado foi ${n} e o seu dobro é ${dobro}`);
console.log(`Seu triplo é ${triplo}`);
console.log(`E a raiz quadrada desse valor é ${raiz_quadrada}`);
