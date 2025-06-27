soma = 0
cont = 0
while True: 
    n = int(input("Digite um valor (999 para parar): "))
    if n == 999:
        print("saindo...")
        break
    soma += n
    cont += 1

print(f"a soma dos {cont} valores foi {soma}")
    