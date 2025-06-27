const prompt = require("prompt-sync")()
let resp = "S"
let media = 0
let soma = 0
let quant = 0
let maior = 0
let menor = 0

while (resp == "S"){
    let n = parseInt(prompt("digite um valor: "))
    quant += 1
    soma += n

    if (quant == 1){
        maior = menor = n
    }else{
        if(n > maior){
            maior = n
        }if (n < menor){
            menor = n
        }
    }

    resp = prompt("quer continuar [S/N]: ").trim().toUpperCase()
}

media = soma / quant
console.log(`você digitou ${quant} valores a média foi ${media}`)
console.log(`o maior valor foi ${maior} e o menor foi ${menor}`)