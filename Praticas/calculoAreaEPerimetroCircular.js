//Calculo de Area e perimetro de sala Circular
// Solicita o raio do círculo ao usuário
function area(raio){
    PI = 3.14;
    return areaCirculo =  PI * raio * raio;
}
// Calcula o perímetro do círculo
function perimetro(raio){
    PI = 3.14;
    return perimetroCirculo = 2 * PI * raio;
}
//Exibir na tela
function exibirNaTela(areaCirculo, perimetroCirculo){
    alert(`Circulo com ${areaCirculo}m² e ${perimetroCirculo}m`);
}
// exemplo de uso
const raio = 3; // em metros
const areaCirculo = area(raio);
const perimetroCirculo = perimetro(raio);
exibirNaTela(areaCirculo, perimetroCirculo);