//Recebe o valor em dolar e converte em reais

function converterDolarParaReal(dolar){
    let reais = 4.80 * dolar;
    return reais;

}

console.log(`Valor em reais: ${converterDolarParaReal(100)}`);