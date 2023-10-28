
//Array que guarda as posições dos elementos X ou O;
var jogo=[];
//Array que atualiza a visualização do jogo;
var tabuleiro=[];
//Jogador
var quemJoga=0; //0 = jogador 1 = CPU;
//Verificação básica
var verifica;
var jogando = true;
var nivel = 1;
var jogadaCPU=1;
var quemComeca=1;

// Jogada da CPU
function cpuJoga() {
    if(jogando) {
        var i,j;
        //Nível 1 = Random
        if(nivel==1) {
            do {
                i = Math.round(Math.random()*2);
                j = Math.round(Math.random()*2);
            } while(jogo[i][j]!="");
            jogo[i][j] = "O"
            atualizaTabuleiro();
        }
        verifica = verificaVitoria();
        if(verifica!="") {
            alert(verifica + " venceu")
            jogando = false;
        }
        quemJoga = 0;
    }  
}

function verificaVitoria() {
    var i,j;
    // i == Linhas
    for(i = 0; i < 3; i++){
        if((jogo[i][0] == jogo[i][1]) && (jogo[i][1] == jogo [i][2])){
            return jogo[i][0];
        }
    }
    // j == Colunas
    for(j = 0; j < 3; j++){
        if((jogo[0][j] == jogo[1][j]) && (jogo[1][j] == jogo [2][j])){
            return jogo[0][j];
        }
    }

    // Diagonal
        //primeira diagonal
        if((jogo[0][0] == jogo[1][1]) && (jogo[1][1] == jogo [2][2])){
            return jogo[0][0];
        }
        //segunda diagonal
        if((jogo[0][2] == jogo[1][1]) && (jogo[1][1] == jogo [2][0])){
            return jogo[0][2];
        }
        return "";
}

// Função para realiar as jogadas
function jogar(p) {
    if((jogando == true) && (quemJoga == 0)) {
        switch(p) {
            case 1:
                if(jogo[0][0] == ""){
                    jogo[0][0] = "X"; 
                }
            break;
            case 2:
                if(jogo[0][1] == ""){
                    jogo[0][1] = "X"; 
                }
            break;
            case 3:
                if(jogo[0][2] == ""){
                    jogo[0][2] = "X"; 
                }
            break;
            case 4:
                if(jogo[1][0] == ""){
                    jogo[1][0] = "X"; 
                }
            break;
            case 5:
                if(jogo[1][1] == ""){
                    jogo[1][1] = "X"; 
                }
            break;
            case 6:
                if(jogo[1][2] == ""){
                    jogo[1][2] = "X";
                }
            break;
            case 7:
                if(jogo[2][0] == ""){
                    jogo[2][0] = "X"; 
                }
            break;
            case 8:
                if(jogo[2][1] == ""){
                    jogo[2][1] = "X";  
                }
            break;
            default:
                if(jogo[2][2] == ""){
                    jogo[2][2] = "X"; 
                }
            break;
        }
        atualizaTabuleiro();
        verifica = verificaVitoria();
            if(verifica!="") {
            alert(verifica + " venceu")
            jogando = false;
            }
        quemJoga=1;
        cpuJoga();
    }
}

function atualizaTabuleiro() {
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++) {
            if(jogo[i][j]=="X") {
                tabuleiro[i][j].innerHTML="X";
                tabuleiro[i][j].style.cursor="default";
            }
            else if(jogo[i][j]=="O") {
                tabuleiro[i][j].innerHTML="O";
                tabuleiro[i][j].style.cursor="default";
            }
            else{
                tabuleiro[i][j].innerHTML="";
                tabuleiro[i][j].style.cursor="pointer";
            }
        }
    }
}

//função que inicializa o jogo
function inicia() {
    jogando=true;
    jogadaCPU=1;
    //inicia uma matriz com valor vazio.
    jogo=[["","",""], ["","",""], ["","",""]];
    tabuleiro=[
        [document.getElementById("p1"), document.getElementById("p2"), document.getElementById("p3")],
        [document.getElementById("p4"),document.getElementById("p5"),document.getElementById("p6"),],
        [document.getElementById("p7"),document.getElementById("p8"),document.getElementById("p9")]
    ];
    atualizaTabuleiro();
    if(quemComeca == 1) {
        quemComeca = 0;
        quemJoga = quemComeca;
        document.getElementById("comeca").innerHTML="Quem comeca: Jogador";
    } else {
        quemComeca = 1;
        quemJoga = quemComeca;
        cpuJoga();
        document.getElementById("comeca").innerHTML="Quem comeca: Computador"
    }

}

window.addEventListener("load", inicia);
