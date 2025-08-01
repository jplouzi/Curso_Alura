let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);

function algoritmoMaiorMenor(num1, num2) {
    //"Declare uma variável chamada maior. Se num1 for maior que num2, atribua o valor de num1 a maior. Caso contrário, atribua o valor de num2 a maior."
    let maior = num1 > num2 ? num1 : num2;
    return maior;
}
console.log(numeroAleatorio1);
console.log(numeroAleatorio2);
console.log(algoritmoMaiorMenor(numeroAleatorio1, numeroAleatorio2));