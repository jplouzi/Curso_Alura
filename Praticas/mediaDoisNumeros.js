//função que calcula a media de dois numeros, interropendo a execução se algum dos numeros nao for valido
function calcularMedia(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Ambos os valores devem ser números válidos.');
    }
    return (num1 + num2) / 2;
}