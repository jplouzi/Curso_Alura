function alterarStatus(id){
    // Seleciona o elemento do jogo clicado pelo seu ID.
    // A template string `game-${id}` cria o ID dinamicamente (ex: "game-1").
    let gameClicado = document.getElementById(`game-${id}`);

    // Seleciona a imagem e o botão dentro do elemento do jogo.
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Verifica se o botão tem a classe que indica que o jogo está alugado.
    if (botao.classList.contains('dashboard__item__button--return')) {
        botao.classList.remove('dashboard__item__button--return');
        imagem.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagem.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
    }
}