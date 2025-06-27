/**# refaça o desafio 51, lendo o primeiro termo e a razão de uma PA, mostrando os 10 primeiros termos da progressão usando a estrutura while */

const prompt = require("prompt-sync")()
let primeiro = Number(prompt("Primeiro termo: "))
let razao = Number(prompt("Razão: "))
let termo = primeiro

let cont = 1
while (cont <= 10){
    console.log(`${termo} ->`)
    termo += razao
    cont += 1
}