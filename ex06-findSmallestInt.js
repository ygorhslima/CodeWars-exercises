/**
    * Retorna o menor e o maior número de uma lista de inteiros.
    *
    * Pode ser chamada de duas formas:
    * 1. Passando múltiplos números: findSmallestInt(10, 20, 30)
    * 2. Passando um array de números: findSmallestInt([10, 20, 30])
    *
    * @param {...number|number[]} args - Números individuais ou um único array de números.
    * @returns {{menor: number, maior: number} | string} Um objeto com os valores mínimo e máximo,
    * ou uma mensagem de erro se nenhum valor for passado.
    *
    * @example
    * findSmallestInt(3, 5, 1, 7) // { menor: 1, maior: 7 }
    *
    * @example
    * findSmallestInt([8, 2, 10]) // { menor: 2, maior: 10 }
    *
    * @example
    * findSmallestInt() // 'value not started'
*/
function findSmallestInt(...args) {
    let arr;
    
    // Se passou um único argumento e ele for uma array
    if (args.length === 1 && Array.isArray(args[0])){
        arr = args[0]
    }else{
        arr = args
    }

    if (arr.length === 0){
        return 'value not started'
    }
    
    // encontrar o menor valor e o maior valor
    let menor = arr[0]
    let maior = arr[0]

    for (const element of arr){
        if (element < menor){
            menor = element
        }
        if (element > maior){
            maior = element
        }
    }

    return {menor, maior}
}

let array4 = [10,20,30]

console.log(findSmallestInt(array4))
console.log(findSmallestInt(10,20,30,50,60,70,90))