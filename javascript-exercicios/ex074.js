const prompt = require("prompt-sync")()

function randint(){
    return  Math.floor(Math.random()*10) + 1
}

let numeros = [
    randint(),randint(),
    randint(),randint(),
    randint(),
]

console.log(`os valores sorteados foram: `,numeros.join(' '))

let maior = Math.max(...numeros)
let menor = Math.min(...numeros)
console.log(`o maior valor digitado foi ${maior}`)
console.log(`o menor valor digitado foi ${menor}`)