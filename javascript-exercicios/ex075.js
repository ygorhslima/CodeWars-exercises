const prompt = require("prompt-sync")()
let valores = []
for (let i=0; i < 4; i++){
    let n = parseInt(prompt(`digite o ${i+1}° valor: `))
    valores.push(n)
}

console.log(`você digitou os valores: [${valores}]`)
quant9 = valores.filter(valor => valor == 9).length

console.log(`o valor 9 apareceu ${quant9} vezes`)

const localizarPos3 = valores.indexOf(3)
if (localizarPos3 != -1){
    console.log(`o valor 3 apareceu na ${localizarPos3 + 1}° posição`)
}

let par = 0
for (let v of valores){
    if (v % 2 == 0){
        par += 1
    }
}

console.log(`o(s) valor(es) par(es) digitado(s) foi ${par} valor(es)`)