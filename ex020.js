
/*Retorna o número (contagem) de vogais na string fornecida.
Consideraremos a, e, i, o, u como vogais para este Kata (as não y).
A string de entrada consistirá apenas de letras minúsculas e/ou espaços.*/

const prompt = require("prompt-sync")()

function getCount(str='') {
    let s = str.toLowerCase().trim()
    let vowels = ['a','e','i','o','u']
   
    let cont=0
    for (let letra of s){
        // se em vogais estiver incluído alguma letra de letras será contado
        if(vowels.includes(letra)){
            cont+=1
        }
    }
    return `você digitou ${cont} vogais`
}


let frases = prompt("Digite qualquer coisa: ")
console.log(getCount(frases))