/**
 * Escreva um algoritmo que pegue uma matriz e mova todos os zeros para o final, preservando a ordem dos outros elementos.
 **/

function moveZeros(arr=[]) {
    let newArray = [] // cria uma nova array separando o que é 0 e o que não é 0
    let c = 0 //contador de zeros
    // se o elemento for diferente de 0, será jogado para a nova array
    // caso contrário, se o elemento for igual a zero, acrescente quantos zeros restaram
    arr.filter(element => element !== 0 ? newArray.push(element) : c++)
    // esse for vai iterar os zeros até o limite do contador (c) que vai dizer quantos zeros vão caber
    for(let i=0; i < c; i++){
        newArray.push(0) // adicionando os zeros no final da lista
    }
    return newArray
}
console.log(moveZeros([false,1,0,1,2,0,1,0,0,0,0,0,3,"a"]))
