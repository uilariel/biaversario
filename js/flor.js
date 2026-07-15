let galhos = [];
let galhosRevelados = 0;



//VAR UTEIS PARA OS GALHOS
const maxNivel = Math.random() * 3 + 5; //entre 5 e 8 niveis totais
let nivel  = 0; //nivel inicial sempre comeca em 0
let x = 512; //posicao x e y inicial, ainda vou alterar
let y = 850; 
let comprimento = 80 + Math.random() * 60; //comprimento do primeiro ramo sempre entre 80 e 140
//let anguloGraus = 225 + Math.random() * 90; // -> caso queira ramdomizar 
let anguloGraus = 270; //angulo do primeiro ramo, pensando se vale a pena randomizar isso ou nao

/*
===========================
ESSA FUNCAO EH RESPONSAVEL POR GERAR OS GALHOS DA ARVORE, ETAPAS:

SE O NIVEL ATUAL FOR MAIOR QUE O MAXIMO, ELA FINALIZA, SE FOR IGUAL TAMBEM.
1 => TRANSFORMAMOS O ANGULO INICIAL PARA RADIANOS
2 => DETERMINAMOS O PONTO FINAL DA LINHA QUE DESENHAMOS POR MEIO DA FUNCAO SENO E COSSENO
3 => ARMAZENAMOS ESSAS 2 COORDENADAS EM UM ARRAY DE OBJETOS
4 => DETERMINAMOS O NUMERO DE FILHOS QUE O PROXIMO RAMO VAI TER 
5 => DETERMINAMOS O ANGULO DE ABERTURA DESSES RAMOS QUE VAO NASCER.
6 => RODAMOS UM LOOP QUE CALCULAR AS INFORMACOES DOS NOVOS GALHOS
*/
function gerarGalhos(x, y, comprimento, anguloGraus, nivel, maxNivel){
    if(nivel > maxNivel) return;

    const anguloRad = anguloGraus * Math.PI / 180;

    const novoX = x + comprimento * Math.cos(anguloRad);
    const novoY = y + comprimento * Math.sin(anguloRad);

    galhos.push({x1: x, y1: y, x2: novoX, y2: novoY})

    if (nivel === maxNivel) return;

    //cada ramo se divide em 2 ou 3
    const numFilhos =  2 + Math.floor(Math.random() * 2 );

    //angulo de abertura dos ramos das flores entre 30 e 80 graus 
    const abertura = 30 + Math.random() * 50;
                                    
    for(let i = 0; i < numFilhos; i++){
        const anguloBase = anguloGraus - abertura/2 + (abertura / (numFilhos - 1)) * i;
        //pega um valor aleatorio entre 15 e -15 pra somar ao angulo do filho pra n ficar tao uniforme 
        const tremor = (Math.random() - 0.5) * 30;
        const anguloFilho = anguloBase + tremor;
        //chama a funcao recursivamente 
        gerarGalhos(novoX, novoY, comprimento * (0.5 + Math.random() * 0.3), anguloFilho, nivel + 1, maxNivel)
    }
}