
/*Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obtemos 3, 5, 6 e 9. A soma desses múltiplos é 23.

Conclua a solução de forma que ela retorne a soma de todos os múltiplos de 3 ou 5 abaixo do número passado.

Além disso, se o número for negativo, retorne 0.

Observação: se o número for múltiplo de 3 e 5, conte-o apenas uma vez.*/

function solution(number){
    if (number < 0){
        return 0
    } 

    let sum = 0
    let i = 0
    while (i < number){
        if(i%3 === 0 || i%5 === 0){
            sum+=i
        }
        i++
    }
    return sum
}

console.log(solution(10))