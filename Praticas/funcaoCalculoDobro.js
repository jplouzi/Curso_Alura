//codigo que calcula o dobro de um número aleatório entre 1 e 10
let numeroAleatorio = parseInt(Math.random() * 10 + 1);

function calculoDobro(numero) {
    return numero * 2;
}

console.log(calculoDobro(numeroAleatorio));