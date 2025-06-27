const prompt = require("prompt-sync")()

let a = Number(prompt("1° número: "))
let b = Number(prompt("2° número: "))

if (a > b) {
    console.log(`${a} é maior do que ${b}`)
}else if(b > a) {
    console.log(`${b} é maior do que ${a}`)
}else if(a == b){
    console.log(`${a} é igual a ${b}`)
}