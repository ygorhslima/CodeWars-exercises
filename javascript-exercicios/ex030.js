const prompt = require("prompt-sync")();
let n = Number(prompt("digite um valor: "))
if (n%2==0){
    console.log(`${n} é par`)
}else{
    console.log(`${n} é ímpar`)
}