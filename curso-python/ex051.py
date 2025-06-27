a1 = int(input("Primeiro termo: "))
r = int(input("razão: "))
decimo = a1 + (10 - 1) * r

for c in range(a1,decimo,r):
    print(f'{c}', end="->")