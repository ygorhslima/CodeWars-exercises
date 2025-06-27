valores = []
for i in range(0,4):
    n = int(input(f"digite o {i+1} valor: "))
    valores.append(n)

tupla = tuple(valores)

print(f"você digitou os valores: {tupla}")
print(f"O valor 9 apareceu {tupla.count(9)} vez(es)")

if 3 in tupla:
    print(f"O valor 3 apareceu na {tupla.index(3)+1}°a posição")
else:
    print("o valor 3 não foi digitado")

par = 0
for valor in tupla:
    if valor % 2 == 0:
        par += 1


print(f"os valores pares digitados foram {par}")