console.log("Lojas guanabara")
const prompt = require("prompt-sync")()
let preco = Number(prompt("preço das compras: R$"))

console.log("formas de pagamento")
console.log("[1] à vista dinheiro/cartão")
console.log("[2] à vista cartão")
console.log("[3] 2x no cartão")
console.log("[4] 3x ou mais no cartão")

let opcao = Number(prompt("Opção: "))
let total = 0
let parcela = 0

if (opcao == 1){
    total = preco - (preco * 10/100)
}else if(opcao == 2){
    total = preco - (preco * 5/100)
}else if(opcao == 3){
    total = preco
    parcela = total / 2
    console.log(`sua compra será parcelada em 2x de R$${parcela}`)
}else if(opcao == 4){
    total = preco + (preco * 20 / 100)
    let totparc = Number(prompt("quantas parcelas?: "))
    parcela = total / totparc
    console.log(`sua compra será parcelada em ${totparc}x de R$${parcela.toFixed(2)} com JUROS`)
}else{
    console.log("OPÇÃO INVÁLIDA DE PAGAMENTO")
    total = 0
}

console.log(`sua compra de R$${preco.toFixed(2)} vai custar R$${total.toFixed(2)} no final`)