//Programa que faz a ordenaçao de numeros em ordem crescente

function ordenaNumeros(array) {
    //
    return array.sort((a, b) => a - b);
}

console.log(ordenaNumeros([3, 6, 1, 2, 7]));