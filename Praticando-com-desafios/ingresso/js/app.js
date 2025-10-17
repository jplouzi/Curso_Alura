// Função para comprar ingressos
function comprar(){
    let tipo =  document.getElementById("tipo-ingresso");
    let quantidade = parseInt(document.getElementById("qtd").value);
// Verifica o tipo de ingresso selecionado e chama a função correspondente
    if(tipo.value == "pista"){
        comprarPista(quantidade);
    }else if (tipo.value == "superior"){
        comprarSuperior(quantidade);
    }else{
        comprarInferior(quantidade);
    }    
    
    
}
// Verifica se a quantidade é válida
  if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }
// Funções para cada tipo de ingresso
function comprarPista(quantidade){
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    // Verifica se a quantidade disponível é suficiente
    if(quantidade > qtdPista){
        alert("Quantidade Indisponivel para Pista");
    }else{
        qtdPista = qtdPista - quantidade;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com sucesso!");
    }

}
// Função para comprar ingressos do tipo Superior
function comprarSuperior(quantidade){
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    // Verifica se a quantidade disponível é suficiente
    if(quantidade > qtdSuperior){
        alert("Quantidade Indisponivel para Superior");
    }else{
        qtdSuperior = qtdSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso!");
    }

}
// Função para comprar ingressos do tipo Inferior
function comprarInferior(quantidade){
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    // Verifica se a quantidade disponível é suficiente
    if(quantidade > qtdInferior){
        alert("Quantidade Indisponivel para Inferior");
    }else{
        qtdInferior = qtdInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso!");
    }

}