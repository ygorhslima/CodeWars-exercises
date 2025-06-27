print("="*50)
print("BANCO CEV".center(50))
print("="*50)

cedulas = [100,50,20,10,5,2,1]
while True:
    saque = int(input("qual valor você quer sacar?: R$"))
    if saque < 1:
        print("ERRO! Digite um valor válido")
    
    for valor in cedulas:
        quantidade = saque // valor
        saque = saque - (quantidade * valor)
        if quantidade > 0:
            print(f"total de {quantidade} cédula(s) de R${valor}")
    break