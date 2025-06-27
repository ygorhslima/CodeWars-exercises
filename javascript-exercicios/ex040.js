const prompt = require("prompt-sync")()
let n1 = Number(prompt("primeira nota: "))
let n2 = Number(prompt("segunda nota: "))
let media = (n1+n2) / 2
console.log(`você tirou as notas ${n1} e ${n2} e sua média foi ${media.toFixed(2)}`)

if (media < 5){
    console.log("reprovado")
}else if ((media >= 5.0) && (media < 7.0)){
    console.log("recuperação")
}else{
    console.log("aprovado")
}