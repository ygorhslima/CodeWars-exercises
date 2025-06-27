const prompt = require("prompt-sync")();

let n1 = Number(prompt("1°numero: "))
let n2 = Number(prompt("2°numero: "))
let n3 = Number(prompt("3°numero: "))

let maior = n1
let menor = n2

if (n2 > maior){
    maior = n2
}
if (n3 > maior){
    maior = n3
}
if(n2 < menor){
    menor = n2
}
if(n3 < menor){
    menor = n3
}
console.log(`o número maior é ${maior}`)
console.log(`o número menor é ${menor}`)