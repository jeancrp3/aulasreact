let preco = 1000

let totalAPagar = null;
let prestacao = null;

let quantidadeParc = 5
//se alterar essa quantidade de parcelas, altera resultado, de acordo como está na fórunla
//3x 10% no total
//5x 20% no total


if(quantidadeParc == 3) {

    totalAPagar = preco * 1.1
    prestacao = totalAPagar / quantidadeParc

} else if(quantidadeParc == 5) {

    totalAPagar = preco * 1.2
    prestacao = totalAPagar / quantidadeParc

} else {
    alert('Defina em 3x  ou 5x')
}

alert(`
    Valor Inicial do produto: ${preco}
    Valor parcela: ${prestacao}
    Numero Parcelas: ${quantidadeParc}
    Total: ${totalAPagar}
`)