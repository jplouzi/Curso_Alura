//algoritmo que verifica se o numero é positivo, negativo ou zero
let numero = prompt('Digite um numero:');

if (numero > 0) {
    alert('O numero ' + numero + ' e positivo!');
}
else if (numero < 0) {
    alert('O numero ' + numero + ' e negativo!');
}
else if (numero == 0) {
    alert('O numero ' + numero + ' e zero!');
}
else {
    alert('Entrada invalida! Por favor, digite um numero valido.');
}