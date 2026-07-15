const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let galhos = [];
const maxNivel = Math.random() * 3 + 5 ;
let nivel  = 0;
let galhosRevelados = 0;
let x = 512;
let y = 850;
let comprimento = 80 + Math.random() * 60;
//angulo do ramo inicial da arvore


//let anguloGraus = 225 + Math.random() * 90; // -> caso queira ramdomizar 
let anguloGraus = 270;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


/*
x -> x inicial
y -> y inicial
comprimento -> comprimento do primeiro ramo
anguloGraus -> angulo do primeiro ramo
nivel -> nivel atual (sempre comeca em 0)
maX nivel -> maximo de niveis que a flor pode ter 
*/
function gerarGalhos(x, y, comprimento, anguloGraus, nivel, maxNivel){
    if(nivel > maxNivel) return;

    const anguloRad = anguloGraus * Math.PI / 180;

    const novoX = x + comprimento * Math.cos(anguloRad);
    const novoY = y + comprimento * Math.sin(anguloRad);

    galhos.push({x1: x, y1: y, x2: novoX, y2: novoY})

    if (nivel === maxNivel) return;
    //os angulos vao variar entre 270 (ou original) +- 40 graus
    const anguloEsquerda = anguloGraus - Math.random() * 40;
    const anguloDireita = anguloGraus + Math.random() * 40;

    //cada ramo se divide em 2 ou 3
    const numFilhos =  2 + Math.floor(Math.random() * 2 )
    const abertura = 30 + Math.random() * 50;
                                    
    for(let i = 0; i < numFilhos; i++){
        const anguloBase = anguloGraus - abertura/2 + (abertura / (numFilhos - 1)) * i;
        const tremor = (Math.random() - 0.5) * 10;
        const anguloFilho = anguloBase + tremor;
        gerarGalhos(novoX, novoY, comprimento * (0.5 + Math.random() * 0.3), anguloFilho, nivel + 1, maxNivel)
    }
    /*
    gerarGalhos(novoX, novoY, comprimento*( 0.5 + Math.random() * 0.3), anguloDireita, nivel + 1, maxNivel);
    gerarGalhos(novoX, novoY, comprimento*( 0.5 + Math.random() * 0.3 ), anguloEsquerda, nivel + 1, maxNivel);
    */
}

function desenharGalhos(){
    for(let i = 0; i < galhos.length && i < galhosRevelados; i++){
        ctx.beginPath();
        ctx.strokeStyle = 'white'
        ctx.lineWidth = 1;
        ctx.moveTo(galhos[i].x1, galhos[i].y1);
        ctx.lineTo(galhos[i].x2, galhos[i].y2);
        ctx.stroke();
    }
}
gerarGalhos(x, y, comprimento, anguloGraus, nivel, maxNivel );
galhosRevelados = galhos.length;
desenharGalhos();