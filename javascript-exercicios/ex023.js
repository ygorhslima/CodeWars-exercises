const prompt = require("prompt-sync")();

let n = Number(prompt("digite um número entre 0 e 9999: "))


let unidade = n % 10 
let dezena = Math.floor(n / 10) % 10
let centena = Math.floor(n / 100) % 10
let milhar = Math.floor(n / 1000) % 10

console.log(`Unidade: ${unidade}`)
console.log(`Dezena: ${dezena}`)
console.log(`Centena: ${centena}`)
console.log(`Milhar: ${milhar}`)