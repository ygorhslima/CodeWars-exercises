pessoas = [
    "joao",10,
    "Maria",22,
    "José",40,
    "Ygor",19,
    "Mariana",25
]
valores = [1,2,3,4,132,521,141]

valores.append(100)
valores.insert(4, 1000)
valores.sort()

print(valores)

if 5 in valores:
    valores.remove(5)
else:
    print("não achei o número 5")

pessoas.append("Gabriela")
pessoas.append(20)
print(pessoas)

from random import randint

valores2 = list(range(0,30))


for i, v in enumerate(valores2):
    print(f"{v} na posição {i}")
print("cheguei ao final da lista")

valores3 = list()
for cont in range(0,5):
    valores3.append(int(input("digite um valor: ")))

for c, v in enumerate(valores3):
    print(f"na posição {c} encontrei o valor {v}")
