/*Crie uma função que retorne um array de inteiros de n a 1, onde n>0.

Exemplo: n=5 --> [5,4,3,2,1]*/

const reverseSeq = (n) => {
    let array = []
    for (let i=n; i > 0; i--){
        array.push(i)
    }    
    return array;
};

console.log(reverseSeq(100))