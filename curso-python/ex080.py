lista = []

for c in range(0,5):
    n = int(input(f"digite o {c}°valor: "))

    if c == 0 or n > lista[-1]:
        lista.append(n)
        print("adicionado ao final da lista...")
    else:
        pos = 0
        while pos < len(lista):
            if n <= lista[pos]:
                lista.insert(pos, n)
                break
            pos += 1
print(f"os valores digitados em ordem foram {lista}")