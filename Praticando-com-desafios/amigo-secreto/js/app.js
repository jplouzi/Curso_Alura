// Array para armazenar os nomes dos amigos
let amigos = [];
// Função para adicionar um amigo à lista
function adicionar() {
    // Obtém o valor do campo de entrada
    let nomeAmigoInput = document.getElementById("nome-amigo");
    let nomeAmigo = nomeAmigoInput.value.trim();

    // Valida se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido!");
        nomeAmigoInput.focus();
        return;
    }

    // Valida se a entrada é um número
    if (!isNaN(nomeAmigo) && nomeAmigo !== "") {
        alert("Por favor, não insira apenas números como nome.");
        return;
    }

    // Valida se o amigo já foi adicionado
    if (amigos.map(amigo => amigo.toLowerCase()).includes(nomeAmigo.toLowerCase())) {
        alert("Este amigo já foi adicionado!");
        return;
    }

    amigos.push(nomeAmigo);
    atualizarListaAmigos();
    nomeAmigoInput.value = "";
    nomeAmigoInput.focus();
}

function sortear() {
    // Verifica se há pelo menos quatro amigos na lista
    if (amigos.length < 4) {
        alert("Adicione pelo menos quatro amigos para realizar o sorteio!");
        return;
    }
  
    // Embaralha a lista de amigos
    embaralha(amigos);
    // Exibe a lista de sorteio
    let sorteio = document.getElementById("lista-sorteio");
    for (let i = 0; i < amigos.length; i++) {
       
        if (i === amigos.length - 1) {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " → " + amigos[0] + "<br>";
        }else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + " → " + amigos[i+1] + "<br>";
    }
}
}
// Função para remover amigo adicionado
function remover() {
    let nomeAmigoInput = document.getElementById("nome-amigo");
    if (nomeAmigoInput.value.trim() === "") {
        alert("Por favor, insira o nome do amigo que deseja remover.");
        nomeAmigoInput.focus();
        return;
    }
    let nomeAmigo = nomeAmigoInput.value.trim();
    let indice = amigos.findIndex(amigo => amigo.toLowerCase() === nomeAmigo.toLowerCase());
    if (indice !== -1) {
        amigos.splice(indice, 1);
        atualizarListaAmigos();
        alert(`Amigo "${nomeAmigo}" removido com sucesso!`);
    } else {
        alert(`Amigo "${nomeAmigo}" não encontrado na lista.`);
    }
    nomeAmigoInput.value = "";
    nomeAmigoInput.focus();

}
// Função para reiniciar o sorteio
function reiniciar() {
    amigos = [];
    document.getElementById("lista-amigos").textContent = "";
    document.getElementById("lista-sorteio").innerHTML = "";
}
// Atualiza a exibição da lista de amigos
function atualizarListaAmigos() {
    let lista = document.getElementById("lista-amigos");
    lista.textContent = amigos.join(', ');
}

// Função para embaralhar a lista de amigos usando o algoritmo Fisher-Yates  
 function embaralha(lista) {

    for (let indice = lista.length; indice; indice--) {

        const indiceAleatorio = Math.floor(Math.random() * indice);

        // atribuição via destructuring
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}
