lanche = ('Hamburguer','Suco','Pizza','Pudim','Refrigerante',"Pão com queijo","Coxinha","Batata Frita")

# método 1 - usando o range
for c in range(0,len(lanche)):
    print(f"eu vou comer {lanche[c]}")


print("-=="*20)

# método 2 - mostra só dado
for comida in lanche:
    print(f"eu vou comer {comida}")

print("-=="*20)

# método 3 - mostra dado e posição
for pos, comida in enumerate(lanche):
    print(f"eu vou comer {comida} na posição {pos}")