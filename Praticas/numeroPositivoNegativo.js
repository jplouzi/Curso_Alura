//codigo que determina se um anumero e positivo ou negativo
let numero = parseInt(prompt('Digite um número: '));

if (numero > 0) {
    alert('O número é positivo');
}else if (numero < 0) {
    alert('O número é negativo');
}else {
    alert('O número é zero');
}