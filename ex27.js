/*

Escreva um programa que encontre a soma de todos os números de 1 a num (ambos inclusive). O número será sempre um inteiro positivo maior que 0. Sua função precisa retornar apenas o resultado. O que está entre parênteses no exemplo abaixo é como você chega a esse resultado e não faz parte dele. Veja os testes de exemplo.

Por exemplo (Entrada -> Saída):

2 -> 3 (1 + 2)
8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
*/

var summation = function (num) {
    let sum = 0;
    for (let i=1; i <= num; i++){
        sum+=i;
    }
    return sum;
}

let n1 = 2;
let n2 = 8;
console.log(`${n1} -> ${summation(n1)}`)
console.log(`${n2} -> ${summation(n2)}`);
