/**
 * 
Dado um número aleatório não negativo, você deve retornar os dígitos desse número dentro de uma matriz em ordem inversa.
Exemplo (Entrada => Saída):

35231 => [1,3,2,5,3]
0 => [0]
 */

function digitize(n) {
    return String(n).split('').reverse().map(Number)
}

console.log(digitize(35231))