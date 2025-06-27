# Faça um programa que leia nome e peso de várias pessoas guardando tudo em uma lista. no final mostre
lista = []
pessoa = []

while True:
    nome = str(input("Nome: "))
    peso = float(input("Peso: "))
    
    pessoa.append(nome)
    pessoa.append(peso)
    lista.append(pessoa[:])
    pessoa.clear()

    resp = ' '
    while resp not in 'SsNn':
        resp = input("quer continuar? [S/N]: ").strip().upper()
    
    if resp == 'N':
        break

tot_peso_maior = lista[0][1]
tot_peso_menor = lista[0][1]
for pesos in lista:
    if pesos[1] > tot_peso_maior:
        tot_peso_maior = pesos[1]
    if pesos[1] < tot_peso_menor:
        tot_peso_menor = pesos[1]

print('-='*30)
print("RESUMO DO CADASTRO".center(60))
print('-='*30)

# atualização extra: criando uma tabela dos dados para vizualização
for p in lista:
    print(f"nome: {p[0]:.<40} peso: {p[1]:7.2f}kg")

# quantas pessoas foram cadastrados
print(f"ao todo foram {len(lista)} pessoas cadastradas")

# uma listagem com as pessoas mais pesadas
print(f"o maior peso foi de {tot_peso_maior}Kg. Peso de ",end='')

for pessoa in lista:
    if pessoa[1] == tot_peso_maior:
        print(f"[{pessoa[0]}] ")

# uma listagem com as pessoas mais leves 
print(f"e o menor peso foi de {tot_peso_menor}Kg. Peso de ", end='')
for pessoa in lista:
    if pessoa[1] == tot_peso_menor:
        print(f"[{pessoa[0]}]")