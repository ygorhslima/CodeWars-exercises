const prompt = require("prompt-sync")();

let largura = Number(prompt("largura(m): "));
let altura = Number(prompt("altura(m): "));
let area = largura * altura
let tinta = area / 2

console.log(`
a parede tem tamanho ${largura}x${altura}m 
e sua área é ${area}m²,
é preciso ${tinta}L de tinta para pinta-la
`);

