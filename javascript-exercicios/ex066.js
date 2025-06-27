const prompt = require("prompt-sync")();

let soma = 0
let cont = 0

while (true){
    let n = Number(prompt("digite um valor (999 para parar): "))
    if (n == 999){
        console.log("saindo...")
        break
    }
    soma += n
    cont += 1
}
console.log(`a soma dos ${cont} valores foi ${soma}`)