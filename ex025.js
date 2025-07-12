
/*

Neste kata, espera-se que você recupere uma senha espalhada em uma grade (m x n) (você receberá instruções de todas as partes da senha na matriz)


O array conterá partes da senha a ser recuperada. Você receberá instruções sobre como obter todas as partes. Sua posição inicial no array será o caractere "x".

Veja como o array se parece:

[
["p", "x", "m"],

["a", "$", "$"],

["k", "i", "t"]

]


As direções fornecidas consistiriam em [esquerda, direita, cima, baixo] e [esquerdaT, direitaT, cimaT, baixoT]. A primeira seria usada para se mover pela grade, 

enquanto a segunda seria usada quando você tivesse uma senha para aquela direção. (Por exemplo, se você estiver em uma posição e o movimento a ser feito for esquerdaT, significa que há uma senha à sua esquerda, então pegue o valor e mova para lá.)

Portanto, no exemplo do array 2D acima, você receberá as direções ["esquerdaT", "baixoT", "direitaT", "direitaT"], resultando na palavra "pa$$".

Lembre-se de que sua posição inicial é o caractere "x".

Então, você escreve a função getPassword(grid, directions) que usa as instruções para obter uma senha na grade.

Outro exemplo.

grid = [

["a", "x", "c"],

["g", "l", "t"],

["o", "v", "e"]

];

directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]getPassword(grid, directions) // => "lovet"

Mais uma vez, sua posição inicial é o caractere "x", então, a partir da posição de "x", você segue as instruções fornecidas e obtém todas as peças da grade.

*/

function getPassword(grid=[], directions=[]) {
    let currentRow = -1
    let currentCol = -1
    let password = ""

    // 1. Encontrar a posição inicial 'x'
    // Itera sobre a grade para localizar o caractere 'x'.
    // Uma vez encontrado, armazena suas coordenadas e interrompe a busca.

    for (let row = 0; row < grid.length; row++){
        for (let column = 0; column < grid.length; column++){
            if(grid[row][column] == 'x'.toLowerCase()){
                currentRow = row
                currentCol = column
                break
            }
        }
        if (currentRow !== -1) {
            break; 
        }    
    }

    // Se 'x' não for encontrado, retorna uma string vazia ou lança um erro.
    // Para este kata, assumimos que 'x' sempre estará presente.
    if(currentRow === -1){
        console.log("o X não foi encontrado")
        return ""
    }

    // criando um objeto para as movimentações

    let moves = {
        'left': {col: -1, row: 0},
        'right': {col: 1, row: 0},
        'up': {col: 0, row: -1},
        'down': {col: 0, row: 1},
    }

    for (const direction of directions){
        let nextRow = currentRow
        let nextCol = currentCol

        const isTakeDirection = direction.endsWith('T'); // verifica se a direção vai envolver coleta de string
        const baseDirection = isTakeDirection ? direction.slice(0,-1): direction
        const offSet = moves[baseDirection]
        
        if(offSet){
            nextRow += offSet.row
            nextCol += offSet.col
        }else{
            console.warn(`direção desconhecida: ${direction}`)
            continue;
        }

        if (isTakeDirection){
            password += grid[nextRow][nextCol]
        }

        currentRow = nextRow
        currentCol = nextCol

    }
    return password
}

let grid = [
  ["a", "x", "c"],
  ["g", "l", "t"],
  ["o", "v", "e"]
];

let directions = ["downT", "down", "leftT", "rightT", "rightT", "upT"]

console.log(getPassword(grid, directions)) // => "lovet"


let grid2 = [
    ['1','2','3'],
    ['4','x','5'],
    ['6','7','8'],
]


const directions2 = ["leftT", "upT", "right", "downT", "rightT"];
console.log(`Senha 4: "${getPassword(grid2, directions2)}"`); // Saída esperada: "4196"