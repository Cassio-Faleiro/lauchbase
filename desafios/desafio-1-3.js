//Usuários e tecnologias
//Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array), por exemplo:

const usuarios = [
    { nome: 'Cássio', tecnologias: ['HTML', 'CSS']},
    { nome: 'Fernandinho', tecnologias: ['JavaScript', 'CSS']},
    { nome: 'Maicon', tecnologias: ['HTML', 'Node.js']}
]

for (let i = 0; i < usuarios.length; i++){
    console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(', ')}`)
}
//outra forma para fazer o FOR 
// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
// }

//Busca por tecnologia
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.
// Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
function checaSeUsuarioUsaCSS(usuarios) {
    for (let tecnologia of usuarios.tecnologias) {
        if (tecnologia == 'CSS') return true
    }
    return false
}

//Imprime na tela os usuarios que utiliza do CSS
for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

    if(usuarioTrabalhaComCSS) {
        console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
    }
}