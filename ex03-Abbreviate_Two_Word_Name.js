/**
 * Escreva uma função para converter um nome em iniciais. Este kata aceita estritamente duas palavras com um espaço entre elas.

A saída deve ser duas letras maiúsculas com um ponto separando-as.

Deve ficar assim:

Sam Harris => S.H

patrick feeney => P.F
 */

function abbrevName(name){
    name.split('')
    
    let nome = 'ygor henrique'
    let palavras = nome.split(' ')
    const iniciais = palavras[0][0].toUpperCase() + '.' + palavras[1][0].toUpperCase()
    return iniciais
}


console.log(abbrevName('ygor henrique'))