/*Rock Paper Scissors

Vamos jogar! Você tem que devolver qual jogador ganhou! Em caso de retorno de empate Draw!.

Exemplos(Entrada1, Entrada2 --> Saída):

"scissors", "paper" --> "Player 1 won!"
"scissors", "rock" --> "Player 2 won!"
"paper", "paper" --> "Draw!"

*/

const rps = (p1, p2) => {
    const rules = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock'
    }

    if (p1 === p2){
        return 'Draw!'
    }else if (rules[p1] == p2){
        return 'Player 1 won!'
    }else{
        return 'Player 2 won!'
    }
};  

console.log(rps('scissors','paper'))
console.log(rps('scissors','rock'))
console.log(rps('paper','paper'))
console.log(rps('scissors','scissors'))
console.log(rps('rock','rock'))
