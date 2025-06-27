/**
 * Exercício 50: Desenvolva um programa que leia seis números inteiros e mostre a soma apenas daqueles que forem pares. Se o valor digitado for ímpar, desconsidere-o.
 */
const prompt = require("prompt-sync")()
let soma=0
let cont=0
for (let c=1; c<7; c++){
    let n = Number(prompt(`${c}°numero: `))
    if(n%2==0){
        soma+=n
        cont+=1
    }
}
console.log(`você informou ${cont} valores pares digitados e a soma foi ${soma}`)
