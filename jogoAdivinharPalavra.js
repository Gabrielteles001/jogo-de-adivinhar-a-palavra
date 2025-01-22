/*
Jogo de Adivinhar palavra (O jogador tenta adivinhar uma palavra escolhida aleatoriamente 
letra por letra. Similar ao jogo da forca, mas sem o desenho.)
*/

let entrada = require("readline-sync");

let palavraSecreta = entrada.question("Digite uma palavra: ").replace(" ", "-").toLowerCase();

let palavraOculta = [];
let tentativas = 6;
let letraTentadas = [];


for (let i = 0; i < palavraSecreta.length; i++) {
    palavraOculta[i] = "_";
}
let palavraFormatada = palavraOculta.join(" ");

console.clear();
while (tentativas > 0) {
    console.log(`\nTamanho da Palavra: ${palavraFormatada}`);
    console.log("Tentativas: ", tentativas);
    console.log("Letras tentadas: ", letraTentadas);

    let letra = entrada.question("Digite uma letra: ").toLowerCase();

    let letraRepetida = false;
    for (let i = 0; i < letraTentadas.length; i++){
        if (letraTentadas[i] == letra){
            letraRepetida = true;
            break;
        }
        
    }
    console.clear();
    let letraCorreta = false;

    for (let i = 0; i <palavraSecreta.length; i++){
        if (palavraSecreta[i] == letra){
            palavraOculta[i] = letra;
            letraCorreta = true;
        }
    }
    palavraFormatada = palavraOculta.join(" ");


    if (letraCorreta == true && letraRepetida == true) {
        console.log("\nVocê já tentou essa letra. Tente outra!");
        tentativas = tentativas - 1;

    } else if (letraCorreta == true){
        console.log("\nVocê acertou a letra.");
        letraTentadas.push(letra);

    } else {
        if (letraRepetida == false){
            letraTentadas.push(letra);
        }
        console.log("Você não acertou a letra.");
        tentativas = tentativas - 1;

    }

    let palavraCompleta = true;
    for (let i = 0; i < palavraOculta.length; i++){
        if (palavraOculta[i] == "_"){
            palavraCompleta = false;
            break;
        }
    }
    if (palavraCompleta == true) {
        console.log(`Parabéns você advinhou a palavra: ${palavraSecreta}`);
        break;
    } 
}

if (tentativas == 0){
    console.log(`Que pena! Você perdeu. A palavra era ${palavraSecreta}`);
}

