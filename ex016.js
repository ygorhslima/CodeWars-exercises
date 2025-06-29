/*
Crie uma função que retorne a soma dos dois menores números positivos, dado um array com no mínimo 4 inteiros positivos. Nenhum número flutuante ou inteiro não positivo será passado.

Por exemplo, quando um array é passado como [19, 5, 42, 2, 77], a saída deve ser 7.

[10, 343445353, 3453445, 3453545353453] deve retornar 3453455.
*/

function sumTwoSmallestNumbers(numbers) {
    for (let num of numbers){
        if (num <= 0){
            return "Apenas valores positivos são permitidos"
        }
    }

    numbers.sort((a,b)=>a-b)
    return numbers[0] + numbers[1]
}

let array1 = [19,5,42,2,77];
let array2 = [10, 343445353, 3453445, 3453545353453]

console.log(sumTwoSmallestNumbers(array1))
console.log(sumTwoSmallestNumbers(array2))
