///6. Tem-se um conjunto de dados contendo a altura  de 15 pessoas. Faça um programa que calcule e escreva:

///a maior e a menor altura do grupo;
///a média de altura;
///o número de pessoas com mais de 1.81 de altura.

let alturas = [1.8,1.75,1.9,1.65,1.69,1.73,1.85,1.95,2.03,1.99,1.77,1.83,1.81,1.78,2.01]

alert(alturas.length)

let maiorAltura = 0;
let menorAltura = 3;
let total = 0;
let qtAltos = 0;

//pro for abaixo, depois de digitar for, digita ctrl+barra e seleciona o for loop
for (let i = 0; i < alturas.length; i++) {
    const element = alturas[i];
    
    if(element > maiorAltura) {
        maiorAltura = element
    }
    
    if(element < menorAltura) {
        menorAltura = element
    }
    if(element > 1.81) {
        qtAltos = qtAltos + 1 
    }
    total += element
}

let media = total / alturas.length
alert(`
    A maior altura é  ${maiorAltura}, 
    A menor altura é ${menorAltura}
    Número de Pessoas com mais de 1.81: ${qtAltos}
    `)


//soma (alturas) / 15

//let media = soma / 15

//alert (media)