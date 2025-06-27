const prompt = require("prompt-sync")();


let n = Number(prompt("quanto dinheiro você tem na carteira: R$"));
let cotacao_dolar = 5.68;
let dolar = n / cotacao_dolar;

console.log(`o valor de R$${n} em dólar é US$${dolar.toFixed(2)}`)
