/**
 * # Escreva um programa que leia um número n inteiro qualquer e mosta na tela os n primeiros elementos de uma sequência de fibonacci
# 0 -> 1 -> 1 -> 2 -> 3 -> 5 -> 8
 */
const prompt = require("prompt-sync")()
let n = Number(prompt("digite um valor: "))
let a = 0
let b = 1
let proximo = 0
let cont = 0
while (cont < n){
    console.log(`${a} ->`)
    proximo = a + b
    a = b
    b = proximo
    cont += 1
}
console.log("fim")