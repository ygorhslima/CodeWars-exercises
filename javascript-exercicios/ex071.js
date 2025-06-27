const prompt = require("prompt-sync")()

console.log("--------------------------------------")
console.log("              BANCO CEV               ")
console.log("--------------------------------------")

let cedulas = [100,50,20,10,5,2,1]

while(true){
    let saque = Number.parseInt(prompt("qual valor você quer sacar?: R$"))
    if (saque < 1){
        console.log("ERRO! Digite um valor válido")
    }

    for (let valor of cedulas){
        let quantidade = Math.floor(saque / valor)
        saque = saque - (quantidade * valor)
        if(quantidade > 0){
            console.log(`total de  ${quantidade} cédula(s) de R$${valor}`)
        }
    }
    break
}