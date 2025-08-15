//Programa que verifica se a palavra ou frase e um palimdromo.

function verificaPalindromo(string) {
    if (!string) return "string inexistente";
//Split separa a string em um array
//reverse inverte as possições desse array
//join junta o array em uma nova string
// === verifica estritamente se e igual a string original
    return string.split("").reverse().join("") === string;
}

console.log(verificaPalindromo("ovo")); // true
console.log(verificaPalindromo("gato")); // false