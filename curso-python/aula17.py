teste = list()
teste.append("gustavo")
teste.append(40)

galera = list()
galera.append(teste[:])

teste[0] = "Maria"
teste[1] = 22

galera.append(teste[:])

print(galera)


print('-='*50)

pessoas = [
    ['joão', 19],
    ['Ana',33],
    ['Joaquim',32],
    ['Maria',45]
] 

for p in pessoas:
    print(f'{p[0]} tem {p[1]} anos')

print('-='*60)


pessoas2 = []
dado = []

totmaior = totmenor = 0

for c in range(0,3):
    dado.append(str(input("Nome: ")))
    dado.append(int(input("Idade: ")))
    pessoas2.append(dado[:])
    dado.clear()

for p in pessoas2:
    if p[1] >= 21:
        print(f"{p[0]} é maior de idade")
        totmaior += 1
    else:
        print(f"{p[0]} é menor de idade")
        totmenor += 1

print(f'temos {totmaior} maiores e {totmenor} menores de idade')