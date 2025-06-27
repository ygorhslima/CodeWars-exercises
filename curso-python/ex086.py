matriz = [
    #coluna 0 # coluna 1 #coluna 2
    [0,0,0], # linha 0 
    [0,0,0], # linha 1
    [0,0,0]  # linha 2
]

for linha in range(0,3):
    for coluna in range(0,3):
        matriz[linha][coluna] = int(input(f"Digite um valor para [{linha},{coluna}]: "))

for linha in matriz:
    for valor in linha:
        print(f"[ {valor} ] ", end='')
    print()