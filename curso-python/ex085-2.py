num = [[],[]]

for c in range(0,7):
    valor = int(input(f"digite o {c+1}° valor: "))
    if valor % 2 == 0:
        num[0].append(valor)
        num[0].sort()
    elif valor % 2 == 1:
        num[1].append(valor)
        num[1].sort()


print(f"os valores pares digitados foi {num[0]}")
print(f"os valores ímpares digitados foi {num[1]}")