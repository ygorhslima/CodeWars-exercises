console.log("-=".repeat(25))
console.log("LISTAGEM DE PRODUTOS".padStart(32))
console.log("-=".repeat(25))


let produtos = [
    "Lápis",1.75,
    "Borracha",2.00,
    "Caderno",15.90,
    "Estojo",25.00,
    "Tranferidor",4.20,
    "Compasso",9.99,
    "Mochila",120.32,
    "Canetas",22.30,
    "Livros",34.90
]

for (let i = 0; i < produtos.length; i+=2){
    const nome = produtos[i]
    const preco = produtos[i+1]

    console.log(`${nome.padEnd(40, '.')} R$ ${preco.toFixed(2).padStart(7)}`)
}