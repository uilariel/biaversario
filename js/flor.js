let galhos = [];
let galhosRevelados = 0;

let pontasFinais = [];
let pontasFinaisReveladas = 0;

let bordaMiolo = [];
let petalasReveladas = []

let petalas = [];



//possiveis cores de petalas
const coresPossiveis = [
    { nome: 'vermelho', hueMin: 355, hueMax: 375, sat: 65, lum: 65 },
    { nome: 'rosa', hueMin: 330, hueMax: 350, sat: 70, lum: 80 },
    { nome: 'roxo', hueMin: 270, hueMax: 290, sat: 55, lum: 70 },
    { nome: 'azul-lavanda', hueMin: 245, hueMax: 260, sat: 45, lum: 78 },
    { nome: 'branco', hueMin: 0, hueMax: 360, sat: 10, lum: 95 },
    { nome: 'pessego', hueMin: 20, hueMax: 35, sat: 75, lum: 80 },
    { nome: 'lilas', hueMin: 280, hueMax: 300, sat: 40, lum: 82 },
];



//VAR UTEIS PARA OS GALHOS
const maxNivel = Math.floor(Math.random() * 2 + 5); //entre 5 e 9 niveis totais
let nivel  = 0; //nivel inicial sempre comeca em 0
let x = 512; //posicao x e y inicial, ainda vou alterar
let y = 900; 
let comprimento = 80 + Math.random() * 60; //comprimento do primeiro ramo sempre entre 80 e 140
let anguloGraus = 250 + Math.random() * 40; // -> caso queira ramdomizar 
//let anguloGraus = 270; //angulo do primeiro ramo, pensando se vale a pena randomizar isso ou nao

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

    //determinando a curvatura
    const curvatura = 0.05 + Math.random() * 0.2;

    galhos.push({x1: x, y1: y, x2: novoX, y2: novoY, comprimento: comprimento, curvatura: curvatura})

    if (nivel === maxNivel){
        //capturando a posicao x e y dos ramos do ultimo nivel
        pontasFinais.push({x: novoX, y: novoY, raio: 4})  
        return
    };

    //cada ramo se divide em 2 ou 3
    const numFilhos =  2 + Math.floor(Math.random() * 2 );

    //angulo de abertura dos ramos das flores entre 30 e 80 graus 
    const abertura = 50 + Math.random() * 50;
                                    
    for(let i = 0; i < numFilhos; i++){
        const anguloBase = anguloGraus - abertura/2 + (abertura / (numFilhos - 1)) * i;
        //pega um valor aleatorio entre 15 e -15 pra somar ao angulo do filho pra n ficar tao uniforme 
        const tremor = (Math.random() - 0.5) * 30;
        const anguloFilho = anguloBase + tremor;
        //chama a funcao recursivamente 
        gerarGalhos(novoX, novoY, comprimento * (0.5 + Math.random() * 0.3), anguloFilho, nivel + 1, maxNivel)
    }
}


//essa bomba gera as petalas, tem q mudar o nome
//bordaMiolo eh pra ser o vetor que guarda a informacao de onde comeca a circunferencia do circulo (linha que delimita o fim dele)
function gerarBordasMiolo(){
   const comprimentoPetala = 20;

   const paleta = coresPossiveis[Math.floor(Math.random() * coresPossiveis.length)];
    
  for (let i = 0; i < pontasFinais.length; i++){
    const miolo = pontasFinais[i];
    const numPetalas = 4 + Math.floor(Math.random() * 4);
    const corBase = 320 + Math.random() * 40;

    for(let j = 0; j < numPetalas; j++){
        const angulo = j * 137.5;
        const anguloRad = angulo * Math.PI / 180;

        const baseX = miolo.x + miolo.raio * Math.cos(anguloRad);
        const baseY = miolo.y + miolo.raio * Math.sin(anguloRad);

        const pontaX = miolo.x + (miolo.raio + comprimentoPetala) * Math.cos(anguloRad)
        const pontaY = miolo.y + (miolo.raio + comprimentoPetala) * Math.sin(anguloRad)

        const cor = corBase + (Math.random() - 0.5) * 8;
        const saturacao = paleta.sat + (Math.random() - 0.5) * 10;
        const luminosidade = paleta.lum + (Math.random() - 0.5) * 8;

        bordaMiolo.push({x1 : baseX, y1: baseY, x2: pontaX, y2: pontaY, angulo: angulo, cor: cor, saturacao: saturacao, luminosidade: luminosidade})
    }
  }
}

