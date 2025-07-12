/**
 * Nesta tarefa simples, você recebe um número e precisa torná-lo negativo. Mas talvez o número já seja negativo?

Exemplos
Observações
O número pode já ser negativo; nesse caso, nenhuma alteração é necessária.
Zero (0) não é verificado para nenhum sinal específico. Zeros negativos não fazem sentido matemático.
 * 
 */
function makeNegative(num){
    return num > 0 ? -num : num
}

console.log(makeNegative(1)); // return -1
console.log(makeNegative(-5)); // return -5
console.log(makeNegative(0)); // return 0
console.log(makeNegative(0.12)); // return -0,12
