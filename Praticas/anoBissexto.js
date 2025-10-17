//função que verifica se um ano é bissexto
function ehAnoBissexto(ano) {
    // Um ano é bissexto se for divisível por 4
    // Mas não é bissexto se for divisível por 100
    // A menos que seja divisível por 400
    if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

// Testando a função
console.log(ehAnoBissexto(2020)); // true
console.log(ehAnoBissexto(1900)); // false
console.log(ehAnoBissexto(2000)); // true
console.log(ehAnoBissexto(2021)); // false