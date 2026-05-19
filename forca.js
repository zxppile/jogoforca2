let palavras = [

    {
        nome:"NARUTO",
        dica:"Ninja da Vila da Folha"
    },

    {
        nome:"BATMAN",
        dica:"Heroi milionário de Gotham"
    },

    {
        nome:"SUPERMAN",
        dica:"Heroi de Krypton"
    },

    {
        nome:"HOMEMARANHA",
        dica:"Heroi que solta teias"
    },

    {
        nome:"PICAPAU",
        dica:"Passaro famoso por sua risada"
    },

    {
        nome:"BOBESPONJA",
        dica:"Mora em uma casa de abacaxi"
    },

    {
        nome:"GOKU",
        dica:"Saiyajin muito poderoso"
    },

    {
        nome:"SHREK",
        dica:"Ogro verde dos filmes"
    }

];

let palavra = "";

let exibicao = [];

let erros = 0;

function iniciar(){

    let sorteio = palavras[
        Math.floor(Math.random() * palavras.length)
    ];

    palavra = sorteio.nome;

    exibicao = [];

    erros = 0;

    document.getElementById("forca").src =

    "imagens/forca1.png";

    for(let i = 0; i < palavra.length; i++){

        exibicao.push("_");
    }

    mostrarPalavra();

    criarTeclado();

    // DICA

    document.getElementById("dica").innerHTML =

    "DICA: " + sorteio.dica;

    // TENTATIVAS

    document.getElementById("tentativas").innerHTML =

    "Tentativas restantes: 6";

    document.getElementById("resultado").innerHTML = "";
}

function mostrarPalavra(){

    document.getElementById("palavra").innerHTML =

    exibicao.join(" ");
}

function criarTeclado(){

    let teclado = document.getElementById("teclado");

    teclado.innerHTML = "";

    let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for(let i = 0; i < letras.length; i++){

        let botao = document.createElement("button");

        botao.innerHTML = letras[i];

        botao.onclick = function(){

            jogar(letras[i]);

            botao.disabled = true;
        };

        teclado.appendChild(botao);
    }
}

function jogar(letra){

    let acertou = false;

    for(let i = 0; i < palavra.length; i++){

        if(palavra[i] == letra){

            exibicao[i] = letra;

            acertou = true;
        }
    }

    // ERROU

    if(acertou == false){

        erros++;

        document.getElementById("forca").src =

        "imagens/forca" + (erros + 1) + ".png";

        // ATUALIZA TENTATIVAS

        document.getElementById("tentativas").innerHTML =

        "Tentativas restantes: " + (6 - erros);
    }

    mostrarPalavra();

    verificarFim();
}

function verificarFim(){

    // VITORIA

    if(!exibicao.includes("_")){

        document.getElementById("resultado").innerHTML =

        "VOCE VENCEU!";
    }

    // DERROTA

    if(erros == 6){

        document.getElementById("resultado").innerHTML =

        "VOCE PERDEU! PALAVRA: " + palavra;
    }
}

function reiniciar(){

    iniciar();
}

iniciar();