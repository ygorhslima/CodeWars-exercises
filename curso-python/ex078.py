# leia 5 valores numéricos e guarde-os em uma lista
lista = []

for c in range(5):
    lista.append(int(input(f"Digite um valor para a posição {c}: ")))

# verificar os valores maiores e menores
maior = lista[0]
menor = lista[0]

# descobrir maior e menor
for valor in lista:
    if valor > maior:
        maior = valor
    if valor < menor:
        menor = valor

print("-="*50)
print(f"\nVocê digitou: {lista}")
print(f"o maior valor digitado foi {maior} nas posições ",end='')
for i,v in enumerate(lista):
    if v == maior:
        print(f"{i}... ",end=' ')

print()
print(f"o menor valor digitado foi {menor} nas posições ",end='')
for i,v in enumerate(lista):
    if v == menor:
        print(f"{i}... ", end=' ')

