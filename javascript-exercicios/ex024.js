const prompt = require("prompt-sync")();

let cidade = prompt("digite um nome de uma cidade: ").trim().toLowerCase()
let verificar_nome = cidade.split(' ')[0] === 'santo'
console.log(`a cidade começa com santo?: ${verificar_nome}`)