const prompt = require("prompt-sync")()

let soma_valores = 0
let cont = 0

let num = Number(prompt("digite um valor [999 para parar]: "))
while(num != 999){
    soma_valores += num
    cont += 1
    num = Number(prompt("digite um valor [999 para parar]: "))
}
console.log(`você digitou ${cont} números e a soma entre eles foi ${soma_valores}`)