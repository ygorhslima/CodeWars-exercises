function soma(...valores){
    let soma = 0
    for(const element of valores){
        soma += element
    }
    return soma
}

console.log(soma(5,5))