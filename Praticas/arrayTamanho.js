//função que recebe um array e retorna seu tamanho
function obterTamanhoArray(arr) {
    if (!Array.isArray(arr)) {
        throw new Error('O valor fornecido não é um array válido.');
    }
    return arr.length;
}
//exemplo de uso
const meuArray = [10, 20, 30, 40, 50];
const tamanho = obterTamanhoArray(meuArray);
console.log(`O tamanho do array é: ${tamanho}`); // O tamanho do array é: 5 