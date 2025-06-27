palavras = ['aprender','programar','linguagem','python',
            'curso','gratis','estudar','praticar','trabalhar',
            'mercado','programador','futuro']

for (const p of palavras){
    let vogais = ''
    for(const letra of p){
        if('aeiou'.includes(letra.toLowerCase())){
            vogais += letra + ' '
        }
    }
    console.log(`\nNa palavra ${p.toUpperCase()} temos: ${vogais}`)
}