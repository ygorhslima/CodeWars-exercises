/**
 *
 * Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
Example:

n= 5, m=5: 25
n=-5, m=5:  0

Waiting for translations and Feedback! Thanks!

 */
/*
* Seus colegas pediram que você copiasse uma folha de papel para eles. Você sabe que há 'n' colegas e a folha tem 'm' páginas.

Sua tarefa é calcular quantas páginas em branco você precisa. Se n < 0 ou m < 0, retorne 0.
Exemplo:

n = 5, m = 5: 25
n = -5, m = 5: 0

Aguardando traduções e feedback! Obrigado!*/
function paperwork(n, m) {
    if (n < 0 || m < 0) {
        return 0;
    }
    else {
        return n * m;
    }
}
let p1 = paperwork(5, 5);
console.log(p1);
