/*
Muito simples: dado um número (inteiro/decimal/ambos, dependendo do idioma), encontre seu oposto (inverso aditivo).

Exemplos:

1: -1
14: -14
-34: 34
*/

function opposite(number) {
    return `${number}: ${-number}`
}

console.log(opposite(1))
console.log(opposite(14))
console.log(opposite(34))