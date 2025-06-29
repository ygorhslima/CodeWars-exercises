/**
 * Desta vez, sem história, sem teoria. Os exemplos abaixo mostram como escrever a função accum:
Exemplos:

accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"

O parâmetro de accum é uma string que inclui apenas letras de a..z e A..Z.
 */

function accum(s='') {
    let char = s.split('')
    
    let config = char.map((l,i)=>{
        return l.toUpperCase() + l.toLowerCase().repeat(i)
    }).join('-')

    return config;
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));
