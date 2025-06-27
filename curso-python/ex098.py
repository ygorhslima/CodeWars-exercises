from time import sleep
# faca um programa que tenha uma função chamada contador(),
# que receba três parâmetro: inicio, fim e passo e realize a contagem
# seu programa tem que realizar três contagens através da função criada
#  A) De 1 até 10, de 1 em 1
#  B) De 10 até 0, de 2 em 2
#  C) Uma contagem personalizada
def l():
    print("-="*30)

def contador(inicio, fim, passo):
    # verificação de erro no começo: 
    # convertendo o passo 0 para 1 rapidamente para não ter erro
    if passo == 0:
        passo = 1
    # convertendo o valor para negativo automaticamente caso contagem seja invertido
    if inicio > fim and passo > 0:
        passo = -passo
    
    l()
    print(f'contagem de {inicio} até {fim} pulando de {passo} em {passo}')
    sleep(0.2)
    if inicio < fim:
        for c in range(inicio,fim+1,passo):
            sleep(0.2)
            print(f'{c}',end='   ', flush=True) 
        print()
        l()
    elif inicio > fim:
        for c in range(inicio, fim - 1, passo):
            sleep(0.2)
            print(f'{c}',end='   ', flush=True)
        print()
        l()

def contagemPersonalizada():
    l()
    print("agora é sua vez de personalizar contagem")
    l()
    i = int(input("Início: "))
    f = int(input("Fim: "))
    p = int(input("Passo: "))
    contador(i,f,p)


contador(0,10,1)
contador(10,0,2)
contagemPersonalizada()