const prompt = require('prompt-sync')();

let sexo = prompt("Digite seu sexo [M/F]: ").trim().toUpperCase();

while (sexo !== 'M' && sexo !== 'F') {
    sexo = prompt("Dados inválidos! Por favor, digite seu sexo [M/F]: ").trim().toUpperCase();
}

console.log(`Sexo ${sexo} foi registrado com sucesso.`);
