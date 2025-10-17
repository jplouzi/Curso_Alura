// Codigo que determina aprovação ou reprovação.
let nota = 9;
function verificarAprovacao(nota) {
// Verifica se a nota é maior ou igual a 7 para aprovação
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}
}

verificarAprovacao(nota);