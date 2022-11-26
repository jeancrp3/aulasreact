///7. Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: 
///ótimo: 3
////bom: 2 
////regular: 1

///8. Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

///a média das idades das pessoas que responderam ótimo;
///a quantidade de pessoas que responderam regular;
///a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

let pesquisas = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]

let idades = [10,20,30,40,50,10,20,30,40,50,10,20,30,40,50]

let totalOtimo = 0

let qtdOtimo = 0

let qtdRegular = 0

let qtdBom = 0

//para verificar se os 2 arrays têm o mesmo  nro de itens
//alert(pesquisas.length)
//alert(idades.length)

//esse de baixo para saber que o item 0 do array de cima é a que respondeu o item 0 da array de baixo
for (let i = 0; i < pesquisas.length; i++) {
    const pesquisa = pesquisas[i];
    const idade = idades[i];

    if (pesquisa == 3) {
        totalOtimo += idade
        qtdOtimo++
    }
    if(pesquisa == 1) {
        qtdRegular++
    }
    if(pesquisa == 2){
        qtdBom++
    }
}

mediaOtimo = totalOtimo / qtdOtimo

alert(`
    a média das pessoas que responderam ótimo: ${mediaOtimo}
    a média das pessoas que responderam regular: ${qtdRegular}
    a média das pessoas que responderam bom: ${qdtBom}
    porcentagem das pessoas que responderam bom ${qtdBom * 100 / pesquisas.length}
`)