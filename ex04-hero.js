/*Um herói está a caminho do castelo para completar sua missão. No entanto, ele foi informado de que o castelo está cercado por dois dragões poderosos! Cada dragão precisa de 2 balas para ser derrotado, e nosso herói não tem ideia de quantas balas deve carregar. Supondo que ele consiga um número específico de balas e avance para lutar contra outro número específico de dragões, ele sobreviverá?*/
// Return true if yes, false otherwise :)

function hero(bullets, dragons){
    return bullets >= dragons * 2
}


console.log(hero(10, 5))
console.log(hero(2,6))