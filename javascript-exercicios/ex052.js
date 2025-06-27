const prompt = require("prompt-sync")()
let num = Number(prompt("digite um número: "))
let tot = 0
for (let c=1; c<num; c++)
{
    if (num % c == 0){
        tot += 1
    }
}
console.log(`o número ${num} foi dividido ${tot} vezes`)
if(tot==2){
    console.log("por isso que é primo")
}else{
    console.log("por isso que não é primo")
}