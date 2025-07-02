/**
 * 
 * Complete a solução para que retorne verdadeiro se o primeiro argumento (string) passado terminar com o segundo argumento (também uma string).

Exemplos:

solution('abc', 'bc') // retorna verdadeiro
solution('abc', 'd') // retorna falso
 */

const prompt = require("prompt-sync")()
const solution = (str, ending) =>{
    return `${str.endsWith(ending)}`
}

let f1 = prompt("digite uma frase completa: ")
let f2 = prompt("quais letras ele termina?: ")

console.log(solution(f1,f2))
