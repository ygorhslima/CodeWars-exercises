const prompt = require("prompt-sync")();

const vel = parseFloat(prompt("Velocidade do carro (km/h): "));

if (vel > 80) {
    const excesso = vel - 80;
    const multa = excesso * 7;
    console.log("Você foi multado!");
    console.log(`A sua multa vai custar R$${multa.toFixed(2)}`);
} else {
    console.log("Você está na velocidade correta. Continue assim!");
}
