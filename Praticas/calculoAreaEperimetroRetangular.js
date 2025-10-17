//calculo da Area e Perimetro de umas sala retangular

function calcularArea(base, altura) {
    return Area = base * altura;
}

function calcularPerimetro(base, altura) {
    return Perimetro = 2 * (base + altura);
}

// Exibir na Tela 

function exibirNaTela(Area, Perimetro) {
    alert (`Sala com ${Area}m² e ${Perimetro}m`);
}

// exemplo de uso
const base = 5; // em metros
const altura = 4; // em metros  
const Area = calcularArea(base, altura);
const Perimetro = calcularPerimetro(base, altura);
exibirNaTela(Area, Perimetro);