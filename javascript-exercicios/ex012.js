const prompt = require("prompt-sync")();

let preco = Number(prompt("qual o preço do produto?: "));

let desconto = preco * (5/100);
let novo_preco = preco - desconto;

console.log(`
o preço anterior é de R$${preco} 
e o seu novo preço com 5% de desconto é de R$${novo_preco}`);