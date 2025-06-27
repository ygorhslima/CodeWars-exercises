let n_id = 0
let s = 0
for(let c = 1; c < 501; c+=2){
    if(c%3==0){
        s+=c
        n_id+=1
    }
}
console.log(`a soma de todos os ${n_id} valores identificados entre 1 e 500 é: ${s}`)