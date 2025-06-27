const prompt = require("prompt-sync")()

console.log("---------------------------------------------------")
console.log("               LOJA SUPER BARATAO                  ")
console.log("---------------------------------------------------")

let total = 0 
let produtosAcimaDe1000 = 0
let produtoMaisBarato = 0
let precoMaisBarato = 0
let contador_produtos = 0

while(true){
    let nome_produto = prompt("nome do produto: ")
    let preco_produto = Number(prompt("preço do produto: R$"))

    contador_produtos += 1
    total += preco_produto

    if (preco_produto > 1000){
        produtosAcimaDe1000 += 1
    }

    if ((contador_produtos == 1) || (preco_produto < precoMaisBarato)){
        precoMaisBarato = preco_produto
        produtoMaisBarato = nome_produto
    }

    let resp = prompt("quer continuar [S/N]: ").trim().toUpperCase()
    if (resp == "N"){
        console.log("fim do programa")
        break
    }
}

console.log(`o total da compra foi R$${total.toFixed(2)} `)
console.log(`temos ${produtosAcimaDe1000} produtos custando mais de R$1000`)
console.log(`o produto mais barato foi ${produtoMaisBarato} que custa R$${precoMaisBarato.toFixed(2)}`)