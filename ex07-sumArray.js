/**
 * 
 * Tarefa

Somar todos os números em um array (cq.list), exceto o maior e o menor elemento (por valor, não por índice!).

O maior ou o menor elemento, respectivamente, é um único elemento em cada aresta, mesmo que haja mais de um com o mesmo valor.

Observe a validação de entrada.
Exemplo

{ 6, 2, 1, 8, 10 } => 16
{ 1, 1, 11, 2, 3 } => 6

Validação de entrada

Se um valor vazio (nulo, Nenhum, Nada, nulo, etc.) for fornecido em vez de um array, ou se o array fornecido for uma lista vazia ou uma lista com apenas 1 elemento, retorne 0.
 */

function sumArray(array) {
    
    if(array === null || array == undefined || array.length < 2){
        return 0
    }

    let maior = array[0]
    let menor = array[0]
    
    for (const element of array){
        if(element > maior){
            maior = element
        }if(element < menor){
            menor = element
        }
    }

    let tempArray = [...array]
    
    const indexMaior = tempArray.indexOf(maior)
    if(indexMaior > -1){
        tempArray.splice(indexMaior, 1)
    }

    const indexMenor = tempArray.indexOf(menor)
    if(indexMenor > -1){
        tempArray.splice(indexMenor,1)
    }

    let sum = 0
    for (const num of tempArray){
        sum += num
    }
    return sum
}

let array1 = [6, 2, 1, 8, 10]
let array2 = [1, 1, 11, 2, 3]
console.log(sumArray(array1))
console.log(sumArray(array2))
console.log(sumArray())