//função que verifica se um elemento esta presente em um array
function verificaArray(arr, elemento) {
    return arr.includes(elemento);
}
//exemplo de uso
const meuArray = [1, 2, 3, 4, 5];
console.log(verificaArray(meuArray, 3)); // true
console.log(verificaArray(meuArray, 6)); // false