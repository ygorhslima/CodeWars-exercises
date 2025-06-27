const prompt = require("prompt-sync")()

let peso = Number(prompt("qual é seu peso (KG): "))
let altura = Number(prompt("qual é sua altura (m): "))

let IMC = peso / (altura ** 2)
console.log(`seu IMC foi ${IMC.toFixed(1)}`)

if (IMC < 18.5){
    console.log("você está abaixo do peso")
}else if((IMC >= 18.5) && (IMC < 25)){
    console.log("você está no peso ideal")
}else if((IMC >= 25) && (IMC < 30)){
    console.log("você está em sobrepeso")
}else if((IMC >= 30) && (IMC < 40)){
    console.log("você está em obesidade")
}else{
    console.log("você está em obesidade mórbida")
}