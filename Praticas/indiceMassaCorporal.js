//funçao para calculo de massa corporal
function calcularIMC(peso, altura) {
    return peso / (altura * altura);
}
//exemplo de uso
const peso = 70; // em kg
const altura = 1.75; // em metros
const imc = calcularIMC(peso, altura);
console.log(`O IMC é: ${imc.toFixed(2)}`); // O IMC é: 22.86