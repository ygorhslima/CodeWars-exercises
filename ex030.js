/**
 * 
 * Color Ghost
 * 
Crie uma classe Ghost

Objetos Ghost são instanciados sem argumentos.

Objetos Ghost recebem um atributo de cor aleatório: "branco", "amarelo", "roxo" ou "vermelho" quando instanciados.


 */
class Ghost {
    constructor() {
        const colors = ["white", "yellow", "purple", "red"];
        const randomIndex = Math.floor(Math.random() * colors.length);
        this.color = colors[randomIndex];
    }
}


let ghost = new Ghost()
console.log(ghost.color) 