// Calculando o IMC
const nome = 'Cássio'
const sexo = 'M'
const idade = 25
const altura = 1.75
const peso = 92
const contribuicao = 40
// Formula para calcular o IMC
const imc = peso / (altura * altura)
// Baseado no valor obtido através desse cálculo exiba as seguintes mensagens:
// SE o IMC maior ou igual a 30: Cássio você está acima do peso;
// SE o IMC menor que 29.9: Cássio você não está acima do peso;
if (imc >= 30){
    console.log(`${nome} seu IMC é ${imc}, você está acima do peso`)
}else {
    console.log(`${nome} seu IMC é ${imc}, estão você não está acima do peso`)
}

// Cálculo de aposentadoria:
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
// SE a pessoa estiver aposentada: Cássio, você pode se aposentar!;
// SE a pessoa NÃO estiver aposentada: Cássio, você ainda não pode se aposentar!;
const aposenta = idade + contribuicao

if(sexo == 'M'){
    if(aposenta >= 95){
        console.log(`${nome} você esta aposentado`)
    }else {
        console.log(`${nome} você ainda não está aposentado`)
    }
}else if(sexo == 'F' && aposenta >= 85){
        console.log(`${nome} você esta aposentada`)
    }else{
        console.log(`${nome} você ainda não está aposentada`)
    }

