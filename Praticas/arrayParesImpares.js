//função que recebe um array de numeros e retorna a soma dos numeros pares e impares separadamente
function arrayParesImpares(arr) {
    let somaPares = 0;
    let somaImpares = 0;
    for (let num of arr) {
        if (num % 2 === 0) {
            somaPares += num;
        } else {
            somaImpares += num;
        }
    }
    return [somaPares, somaImpares];
}
//exemplo de uso
const numeros = [1, 2, 3, 4, 5, 6];
const [somaPares, somaImpares] = arrayParesImpares(numeros);
console.log(somaPares); // 12
console.log(somaImpares); // 9