cont = 0
lista = []

while True:
    n = int(input("digite um valor: "))
    lista.append(n)
    
    cont += 1

    resp = ' '
    while resp not in 'SNsn':
        resp = input("quer continuar [S/N]: ").strip().upper()
        
    if resp == 'N':
        print("saindo do programa...")
        break

lista.sort(reverse=True)

print(f"você digitou {cont} elementos")
print(f"os valores em ordem decrescente são {lista}")
print("o valor 5 faz parte da lista" if 5 in lista else "o valor 5  não faz parte da lista")