tupla = (
    int(input("Digite um número: ")),
    int(input("Digite outro número: ")),
    int(input("digite mais um número: ")),
    int(input("digite o último número: "))
)

print(f"você digitou os valores: {tupla}")
print(f"O valor 9 apareceu {tupla.count(9)} vez(es)")

if 3 in tupla:
    print(f"O valor 3 apareceu na {tupla.index(3)+1}°a posição")
else:
    print("o valor 3 não foi digitado")


pares = [valor for valor in tupla if valor % 2 == 0]
print(f"os valores pares digitados foram {pares}")