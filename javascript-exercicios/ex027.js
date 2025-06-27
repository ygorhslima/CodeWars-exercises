const prompt = require("prompt-sync")();

const nome = prompt("Digite seu nome completo: ").trim();
const partes = nome.split(" ");

console.log(`Primeiro = ${partes[0]}`);
console.log(`Último = ${partes[partes.length - 1]}`);
