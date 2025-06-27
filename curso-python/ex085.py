pares = []
impares = []

for c in range(0,7):
    n = int(input(f"digite o {c+1}°valor: "))

    if n % 2 == 0:
        pares.append(n)
        pares.sort()
    elif n % 2 == 1:
        impares.append(n)
        impares.sort()

print(f"os valores pares digitados foi {pares}")
print(f"os valores ímpares digitados foi {impares}")