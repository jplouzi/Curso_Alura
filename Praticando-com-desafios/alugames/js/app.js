// Cria um objeto para armazenar a contagem de aluguéis de cada jogo.
let contagemAlugueis = {};

function alterarStatus(id) {
    // Seleciona o elemento do jogo clicado pelo seu ID.
    // A template string `game-${id}` cria o ID dinamicamente (ex: "game-1").
    let gameClicado = document.getElementById(`game-${id}`);
    // Seleciona a imagem, o botão e o nome dentro do elemento do jogo.
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');
    let nomeJogo = gameClicado.querySelector('.dashboard__item__name').textContent;

    // Verifica se o botão tem a classe que indica que o jogo está alugado.
    if (botao.classList.contains('dashboard__item__button--return')) {
        // Adiciona a confirmação antes de devolver.
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nomeJogo}?`)) {
            botao.classList.remove('dashboard__item__button--return');
            imagem.classList.remove('dashboard__item__img--rented');
            botao.textContent = 'Alugar';
        }
    } else {
        // Adiciona a confirmação antes de alugar.
        if (confirm(`Você tem certeza que deseja alugar o jogo ${nomeJogo}?`)) {
            botao.classList.add('dashboard__item__button--return');
            imagem.classList.add('dashboard__item__img--rented');
            botao.textContent = 'Devolver';

            // Inicializa o contador para este jogo se ainda não existir.
            if (!contagemAlugueis[id]) {
                contagemAlugueis[id] = 0;
            }
            // Incrementa a contagem de aluguéis para o jogo específico.
            contagemAlugueis[id]++;
            console.log(`O jogo ${nomeJogo} foi alugado ${contagemAlugueis[id]} vez(es).`);
        }
    }
}