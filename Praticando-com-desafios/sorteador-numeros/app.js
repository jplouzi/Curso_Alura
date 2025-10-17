 // Função para sortear números únicos dentro de um intervalo
 function sortear(){
    let quantidade = parseInt(document.getElementById("quantidade").value);
    let de = parseInt(document.getElementById("de").value);
    let ate = parseInt(document.getElementById("ate").value);  
    // Array para armazenar os números sorteados
    let sorteados = [];
    let numero;
// Validações de entrada
    if (isNaN(quantidade) || quantidade <= 0) {
        alert('Por favor, insira uma quantidade válida de números a serem sorteados.');
        return;
    }
    if (isNaN(de) || isNaN(ate) || de > ate) {
        alert('Por favor, insira um intervalo válido.');
        return;
    }
    if (de >= ate) {
        alert('Campo "Do número" deve ser inferior ao campo "Até o número". Verifique!');
        return;
    }
// Validação para garantir que a quantidade solicitada não exceda o intervalo disponível
    if (quantidade > (ate - de + 1)) {
        alert('A quantidade de números solicitada é maior que o intervalo disponível. Verifique!');
        return;
    }
// Sorteia números únicos
    for(let i = 0; i < quantidade; i++){
        numero = sortearNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)){
            numero = sortearNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);

    }

    console.log (sorteados);
// Exibe os números sorteados na tela
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();

}
// Função para gerar um número aleatório entre min e max (inclusive)
function sortearNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Função para alterar o status do botão de reiniciar
function alterarStatusBotao(){
    let botaoReiniciar = document.getElementById("btn-reiniciar");
    
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")){
        botaoReiniciar.classList.remove("container__botao-desabilitado");
        botaoReiniciar.classList.add("container__botao");

    }else{
        botaoReiniciar.classList.remove("container__botao");
        botaoReiniciar.classList.add("container__botao-desabilitado");

    }
}
// Função para reiniciar os campos e o resultado
function reiniciar(){
    document.getElementById("quantidade").value = '';
    document.getElementById("de").value = '';
    document.getElementById("ate").value = '';
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';

    alterarStatusBotao();
}
