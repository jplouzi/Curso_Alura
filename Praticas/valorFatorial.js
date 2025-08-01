//calculo de fatorial

function fatorial(numero){
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;

}