lista = []
while True:
    n = int(input("digite um número: "))
    lista.append(n)

    resp  = ' '
    while resp not in 'SsNn':
        resp = input("quer continuar [S/N]: ").strip().upper()
    
    if resp == 'N':
        break

par = []
impar = []
for i in lista:
    if i % 2 == 0:
        par.append(i)
    elif i % 2 == 1:
        impar.append(i)

print(f"a lista completa é {lista}")
print(f"a lista de pares é {par}")
print(f"a lista de ímpares é {impar}")