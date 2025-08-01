let nome = 'Joab Pereira Oliveira de Almeida Louzi';

function exibirTextoNaTela(texto) {
    let campo = document.querySelector("h1");
    campo.innerHTML = texto;
}

exibirTextoNaTela(nome);