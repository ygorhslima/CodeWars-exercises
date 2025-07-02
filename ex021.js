/*Em uma cidade pequena, 
a população é p0 = 1000 no início do ano. 
A população aumenta regularmente em 2% ao ano e, além disso, 50 novos habitantes por ano passam a residir na cidade.

Quantos anos a cidade precisa para ter uma população maior ou igual a p = 1200 habitantes?

Ao final do primeiro ano, haverá:

Ao final do segundo ano, haverá:
1070 + 1070 * 0,02 + 50 => 1141 habitantes (**número de habitantes é um número inteiro**)

Ao final do terceiro ano, haverá:
1141 + 1141 * 0,02 + 50 => 1213

Serão necessários 3 anos inteiros.

Parâmetros fornecidos de forma mais geral:

p0, percent, aug (habitantes que entram ou saem a cada ano), p (população que deve ser igual ou superior a)

A função nb_year deve retornar n o número de anos inteiros necessários para obter uma população maior ou igual a p.
aug é um inteiro, percent é um número flutuante positivo ou nulo, p0 e p são inteiros positivos (> 0)

Exemplos:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10

Observação:

Não se esqueça de converter o parâmetro percent como uma porcentagem no corpo da sua função: se o parâmetro percent for 2, você deverá convertê-lo para 0,02.

Não há frações de pessoas. No final de cada ano, a contagem da população é um número inteiro: 252,8 pessoas arredondadas para baixo para 252 pessoas.*/

function nbYear(p0=0, percent=0, aug=0, p=0) {
    let years = 0

    while(p0 < p){
        p0 += Math.floor(p0 * (percent/100) + aug)
        console.log(p0)
        years += 1; 
    }

    return years

}

console.log(nbYear(1000, 2, 50, 1200))