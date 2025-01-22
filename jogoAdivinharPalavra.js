/*
Jogo de Adivinhar palavra (O jogador tenta adivinhar uma palavra escolhida aleatoriamente 
letra por letra. Similar ao jogo da forca, mas sem o desenho.)
*/

let entrada = require("readline-sync");  // Importa o módulo para capturar a entrada do usuário via terminal.
// Solicita ao jogador 1 que insira a palavra secreta e a formata.
let palavraSecreta = entrada.question("Digite uma palavra: ").replace(" ", "-").toLowerCase();

let palavraOculta = []; // Armazena a palavra oculta com traços ('_') representando as letras.
let tentativas = 6; // Define o número inicial de tentativas.
let letraTentadas = [];  // Armazena as letras já tentadas para evitar repetições.

// Preenche a palavra oculta com traços.
for (let i = 0; i < palavraSecreta.length; i++) {
    palavraOculta[i] = "_";
}
let palavraFormatada = palavraOculta.join(" "); // Formata a palavra oculta como uma string com traços separados por espaço.

console.clear(); // Limpa o console para iniciar o jogo, evitando que o segundo jogador veja o histórico e saiba a palavra.
while (tentativas > 0) { // O jogo continua enquanto o jogador tiver tentativas disponíveis.
    console.log(`\nTamanho da Palavra: ${palavraFormatada}`); // Exibe o estado atual da palavra oculta.
    console.log("Tentativas: ", tentativas); // Mostra o número de tentativas restantes.
    console.log("Letras tentadas: ", letraTentadas); // Lista as letras já tentadas.

    let letra = entrada.question("Digite uma letra: ").toLowerCase(); // Solicita uma letra ao jogador.
    
    // Verifica se a letra já foi tentada.
    let letraRepetida = false;
    for (let i = 0; i < letraTentadas.length; i++){
        if (letraTentadas[i] == letra){
            letraRepetida = true;
            break;
        }
        
    }
    console.clear(); // Limpa o console após a entrada do jogador.
    let letraCorreta = false; // Variável para rastrear se a letra faz parte da palavra secreta.

    // Verifica se a letra faz parte da palavra secreta e substitui os traços pela letra correta.
    for (let i = 0; i < palavraSecreta.length; i++){
        if (palavraSecreta[i] == letra){
            palavraOculta[i] = letra;
            letraCorreta = true;
        }
    }
    
    palavraFormatada = palavraOculta.join(" "); // Atualiza a palavra oculta formatada.

    // Avalia o resultado da tentativa do jogador.
    if (letraCorreta == true && letraRepetida == true) {
        console.log("\nVocê já tentou essa letra. Tente outra!");
        tentativas = tentativas - 1; // Penaliza o jogador por tentar uma letra repedita decrementando suas tentativas.

    } else if (letraCorreta == true){
        console.log("\nVocê acertou a letra.");
        letraTentadas.push(letra); // Adiciona a letra correta às tentativas realizadas.

    } else {
        if (letraRepetida == false){
            letraTentadas.push(letra); // Adiciona a letra incorreta às tentativas realizadas.
        }
        console.log("Você não acertou a letra.");
        tentativas = tentativas - 1; // Decrementa o número de tentativas.

    }

    // Verifica se o jogador completou a palavra.
    let palavraCompleta = true;
    for (let i = 0; i < palavraOculta.length; i++){
        if (palavraOculta[i] == "_"){
            palavraCompleta = false;
            break;
        }
    }
    if (palavraCompleta == true) {
        console.log(`Parabéns você advinhou a palavra: ${palavraSecreta}`); // Mensagem de vitória.
        break;
    } 
}

if (tentativas == 0){ // Mensagem de derrota quando as tentativas se esgotam.
    console.log(`Que pena! Você perdeu. A palavra era ${palavraSecreta}`);
}


