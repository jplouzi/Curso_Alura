//função que verifica se a pessoa é maior de idade
function verificaMaioridade(idade) {
    if (typeof idade !== 'number' || idade < 0) {
        return "Idade inválida";
    }
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}
//exemplo de uso
console.log(verificaMaioridade(20)); // Maior de idade
console.log(verificaMaioridade(16)); // Menor de idade