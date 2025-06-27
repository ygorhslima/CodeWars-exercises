aluno = {}

aluno['nome'] = input("Nome: ")
aluno['media'] = float(input(f"Média de {aluno['nome']}: "))
print('-='*50)

if aluno['media'] >= 6:
    aluno['situação'] = 'Aprovado'
elif aluno['media'] > 5 and aluno['media'] < 6:
    aluno['situação'] = 'Recuperação'
else:
    aluno['situação'] = 'Reprovado'

for k,v in aluno.items():
    print(f"- {k} é igual a {v}")
