// Construção e impressão de objetos
// Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa.

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    ceo: "Diego Rocketseat",
    endereco:{
        rua: "Rua Guilherme Gembala",
        bairro:"Xangrila",
        numero: 260
    },
}

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua} número ${empresa.endereco.numero}, bairro ${empresa.endereco.bairro}.\nE é administrado pelo CEO ${empresa.ceo}.\nO ponto de referencia da empresa é a sua cor ${empresa.cor}.\nRocketseat tem como foco a ${empresa.foco}!`)

//Vetores e objetos:

// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

// Um programador pode trabalhar com várias tecnologias, por isso armazene essas tecnologias em um array.

// As tecnologias também devem ser objetos contendo nome e especialidade, use as tecnologias abaixo:

const nomeProgramador = "Cássio"
const idade = 25
const objeto = [ 
    {
        linguagem: "C++", especialidade: "Descktop"
    },
    {
        linguagem: "Python", especialidade: "Data Science"
    },
    {
        linguagem: "JavaScript", especialidade: "Web/Mobile"
    }
]

console.log(`O ${nomeProgramador} tem ${idade} anos e usa a tecnologia ${objeto[2].linguagem} com espesaliadade em 
${objeto[2].especialidade}`)