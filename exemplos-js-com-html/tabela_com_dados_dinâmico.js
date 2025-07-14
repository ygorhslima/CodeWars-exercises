const body = document.body
const head = document.head

const estiloCSS = `
    table {
            width: 80%;
            border-collapse: collapse;
            margin: 20px 0;
            font-family: Arial, sans-serif;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        div {
            margin: 10px;
        }

        th {
            background-color: #f2f2f2;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        tr:hover {
            background-color: #f1f1f1;
        }
`



// criando a tag style para adicionar o conteúdo do estiloCSS
const tagStyle = document.createElement("style")
tagStyle.textContent = estiloCSS
// adicionando a tagStyle no head
head.appendChild(tagStyle)


// criando a tabela
const table = document.createElement("table")
const thead = document.createElement("thead")
const tbody = document.createElement("tbody")

body.appendChild(table)
table.appendChild(thead)
table.appendChild(tbody)

const tableRow1 = document.createElement("tr")
const tableHead1 = document.createElement("th")
const tableHead2 = document.createElement("th")

thead.appendChild(tableRow1)
tableRow1.appendChild(tableHead1)
tableRow1.appendChild(tableHead2)
    
tableHead1.textContent = `nome`
tableHead2.textContent = `idade`


        
function AdicionarDado(){
    const txt_nome = document.getElementById("txt_nome")
    const txt_idade = document.getElementById("txt_idade")
    const nome = String(txt_nome.value).trim()
    const idade = Number.parseInt(txt_idade.value)

    if (txt_nome.value.trim() === "") {
        alert("Por favor, digite um nome.");
        txt_nome.focus();
        return;
    }

    if(isNaN(idade) || idade <= 0){
        alert("por favor, digite uma idade válida (número maior que zero).")
        txt_idade.focus()
        return 
    }

    adicionarLinhaNaTabela(nome, idade)

    txt_nome.value = ""
    txt_idade.value = ""
    txt_nome.focus()
}


function adicionarLinhaNaTabela(nome,idade){
    const newRow = document.createElement("tr")
    const cellNome = document.createElement("td")
    const cellIdade = document.createElement("td")

    cellNome.textContent = nome
    cellIdade.textContent = idade

    newRow.appendChild(cellNome)
    newRow.appendChild(cellIdade)

    tbody.appendChild(newRow)
    
}