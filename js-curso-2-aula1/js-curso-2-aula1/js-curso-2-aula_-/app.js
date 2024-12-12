// selecionar a parte que quer manipular no html ou seja linha 22 h1 e nudar oq ela esta escrevendo na tela

//.. let titulo = document.querySelector('h1');
//.. titulo.innerHTML = 'Jogo do nº secreto do Leozera';

// selecionar a propriedade 'p' e mudar oq esta sendo escreto, para isso tem q puxar essa variavel e colocar a tag dela q no caso sempre aparece antes q agora seria o (<p)
//.. let paragrafo = document.querySelector('p');
//alterar o conteudo desse paragfrago
//.. paragrafo.innerHTML = 'Escolha um número entre 1 a 10';


//escrever em  menos linhas criando a funcao e chamando ela depois

//listas

let listaDeNumerosSorteados = []
let numeroLimite = 10

let numeroSecreto = gerarNumeroAleatorio();
let numeroTentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //Inseriando uma voz para ler os textos da tela, função deve ser colocada dentro do html antes, rate muda a velocidade de leitura
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', {rate:1.2});
}
function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do nº secreto do Leozera');
    exibirTextoNaTela('p','Escolha um número entre 1 a 10');
}
mensagemInicial();

//mesmo nome q esta no html, linha 27 para poder usar do html para o java
// function trecho do codigo responsavel por uma determinada açao, funcao e um nome q esta no html tendo coerencia com oq esta sendo feita e seu nome
function verificarChute() {
    //pegar a imput q esta escrito no html usando value final para guardar na variavel somente o numero quando o usuario digitar
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = numeroTentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o numero secreto com ${numeroTentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        //reiniciar o jogo pelo botão novo jogo, chamando ele no html pelo ID
        document.getElementById('reiniciar').removeAttribute('disabled');
        } else{           
        if (chute > numeroSecreto){
            exibirTextoNaTela('p','O número secreto é menor');
        }else{
            exibirTextoNaTela('p','O numero secreto é maior');
        }
        numeroTentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
   let numeroEscolhido =  parseInt(Math.random() *numeroLimite + 1);
   // length é o tamanho da lista
   let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados=[];
    }

   //Usar includes para saber se o numero esta na lista
   if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        // Se o nuemro escolhido aleatoriamente ja foi usado, ele verifica no includes e return chamando a função novamente para ela gerar outro numero
        return gerarNumeroAleatorio();
   }else{
    // Adicionar o numero na lista, o push adiciona o numero na lista, isso no JS
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
   }
}

//funçao sem nada dentro dos parametros significa q nao vai receber nenhum parametro
function limparCampo(){
    chute = document.querySelector('input');
    chute.value = ' ';
}
// essa funçao já funciona pois no html esta sendo habilitada la em cima, com isso ela vai somente definir os parametros para voltar do zero quando o botao for clicado
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    numeroTentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
//usar abre e fecha parentese significar q esta falando q é uma função tanto no html quanto no java
