const prompt = require("prompt-sync")()


let times = [
    'Flamengo',
    'Cruzeiro',
    'Bragantino',
    'Palmeiras',
    'Fluminense',
    'Botafogo',
    'Bahia',
    'Mirassol',
    'Atlético-MG',
    'Ceará SC',
    'Corinthians',
    'Grêmio',
    'São Paulo',
    'Internacional',
    'Vasco da Gama',
    'EC Vitória',
    'Fortaleza',
    'Santos',
    'Juventude',
    'Sport Recife',
]

console.log("-=".repeat(40))
console.log("times do campeonato brasileiro")
console.log("-=".repeat(40))


for (let i=0; i < times.length; i++){
    console.log(`${i+1}° - ${times[i]}`)
}


console.log("-=".repeat(40))
const ultimos4 = times.slice(-4);
for (let i = 0; i < ultimos4.length; i++) {
    console.log(`${times.length - 3 + i}° - ${ultimos4[i]}`);
}

console.log("-=".repeat(40))
const times_ordenados = [...times].sort() 
for (const times of times_ordenados){
    console.log(times)
}

const chapeco = times.indexOf("Chapecoense")
if (chapeco !== -1){
    console.log(`time da chapecoense está na ${chapeco} posicão`)
}else{
    console.log(`time da chapecoense não está na tabela`)
}