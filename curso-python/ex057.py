#faça um programa que leia o sexo de uma pessoa, mas śo aceite os valores "M" ou "F"
sexo = str(input("digite seu sexo [M/F]: ")).strip().upper()[0]
while sexo not in 'MmFf':
    # Caso esteja errado. peça a digitação novamente até ter um valor correto
    sexo = str(input("Dados inválidos! por favor digite seu sexo: ")).strip().upper()[0]
print(f"sexo {sexo} foi registrado com sucesso.")