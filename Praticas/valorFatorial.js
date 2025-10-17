//calculo de fatorial

function fatorial(numero){
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;

}
//exemplo de uso
console.log(fatorial(5)); // 120
console.log(fatorial(0)); // 1  