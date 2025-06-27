pessoas = {
    'Nome':'Gustavo',
    'Sexo':'M',
    'Idade':22
}
pessoas['Nome'] = 'Leandro'
pessoas['peso'] = 98.5

print(f"O {pessoas['Nome']} tem {pessoas['Idade']} anos")
print(pessoas.keys())
print(pessoas.values())
print(pessoas.items())

print('-='*50)
for k in pessoas.keys():
    print(k)

print('-='*50)
for v in pessoas.values():
    print(v)

# del pessoas['Sexo'] para apagar

print('-='*50)
for k,v in pessoas.items():
    print(f'{k} = {v}')
print('-='*50)
