
/*# até 9 anos: Mirim
if idade <= 9:
    print("atleta mirim")
# até 14 anos: infantil
elif idade <= 14:
    print("atleta infantil")
# até 19 anos: Junior
elif idade <= 19:
    print("atleta Junior")
# até 20 anos: senior
elif idade <= 20:
    print("atleta Senior")
# acima: master
else:
    print("atleta master")

*/
const prompt = require("prompt-sync")()
let ano_nascimento = Number(prompt("qual o seu ano de nascimento?: "))
let ano_atual = new Date().getFullYear()
let idade = ano_atual - ano_nascimento

if (idade <= 9){
    console.log("atleta mirim")
}else if (idade <= 14){
    console.log("atleta infantil")
}else if (idade <= 19){
    console.log("atleta Junior")
}else if (idade <= 20){
    console.log("atleta senior")
}else{
    console.log("atleta master")
}