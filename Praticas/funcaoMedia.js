let numeroAleatorio1 = parseInt(Math.random() * 10 + 1);
let numeroAleatorio2 = parseInt(Math.random() * 10 + 1);
let numeroAleatorio3 = parseInt(Math.random() * 10 + 1);

function algoritmoMedia(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3;
    return media;
}

console.log(numeroAleatorio1);
console.log(numeroAleatorio2);
console.log(numeroAleatorio3);
console.log(algoritmoMedia(numeroAleatorio1, numeroAleatorio2, numeroAleatorio3));