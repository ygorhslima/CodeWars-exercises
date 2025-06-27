# crie uma tupla preenchida com os 20 primeiros colocados da tabela do campeonato brasileiro de futebol, na ordem de colocação
# depois mostre
#B) os últimos 4 colocados da tabela

#C) uma lista com os times em ordem alfabética

#D) em que posição na tabela está o time da chapecoense

times = (
    'Flamengo',
    'Cruzeiro',
    'Bragantino',
    'Palmeiras',
    'Fluminense',
    'Botafogo',
    'Bahia',
    'Mirassol',
    'Atlético-MG',
    'Ceará SC',
    'Corinthians',
    'Grêmio',
    'São Paulo',
    'Internacional',
    'Vasco da Gama',
    'EC Vitória',
    'Fortaleza',
    'Santos',
    'Juventude',
    'Sport Recife'
)

print("-="*40)
print("times do campeonato brasileiro: ")
print("-="*40)

for i, time in enumerate(times):
    print(f"{i+1}° - {time}")
print("-="*40)


print("A) 5 primeiros colocados: ")
for i in range(0,5):
    print(f"{i+1}° - {times[i]}")
print("-="*40)


print("B) os últimos 4 colocados da tabela")
ponto_partida_indice = len(times) - 4
for i,time in enumerate(times[-4:]):
    print(f"{ponto_partida_indice + i + 1}° - {time}")


print("-="*40)
print("C) uma lista com os times em ordem alfabética")
times_ordenados = sorted(times)
for time in times_ordenados:
    print(time)


print("-="*40)
print("posição de chapecoense na tabela: ",end="")
if "Chapecoense" in times:
    pos_chapecoense = times.index("Chapecoense") + 1
    print(f"time da Chapecoense está na {pos_chapecoense} posição")
else:
    print("time Chapecoense não está na tabela")