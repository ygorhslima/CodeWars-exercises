/**
 * 
 * 
 * Escreva uma função que receba um array de números e retorne a soma deles. Os números podem ser negativos ou não inteiros. Se o array não contiver nenhum número, você deverá retornar 0.

Exemplos
Entrada: [1, 5,2, 4, 0, -1]
Saída: 9,2

Entrada: []
Saída: 0

Entrada: [-2,398]
Saída: -2,398

Suposições
Você pode assumir que recebeu apenas números.
Você não pode assumir o tamanho do array.
Você pode assumir que recebeu um array e, se o array estiver vazio, retornar 0.
O que estamos testando
Estamos testando laços básicos e operações matemáticas. Isto é para iniciantes que estão aprendendo laços e operações matemáticas.
Usuários avançados podem achar isso extremamente fácil e podem facilmente escrever em uma linha.
 */

function sum (numbers){
    return numbers.reduce((total, quant)=>total+quant,0)
}

console.log(sum([10,20,-40]))