function desenharGalhos(){

    for(let i = 0; i < galhos.length; i++){

       
        const meioX = (galhos[i].x1 + galhos[i].x2) / 2 + (galhos[i].y1 - galhos[i].y2) * galhos[i].curvatura
        const meioY = (galhos[i].y1 + galhos[i].y2) / 2 - (galhos[i].x1 - galhos[i].x2) * galhos[i].curvatura

        ctx.beginPath();
        ctx.strokeStyle = '#88c56a'
        ctx.lineWidth = Math.max(0.4, galhos[i].comprimento * 0.06);
        ctx.moveTo(galhos[i].x1, galhos[i].y1);
        ctx.quadraticCurveTo(meioX, meioY, galhos[i].x2, galhos[i].y2);
        ctx.stroke();
    }
}


/*desenha um circulo em cima de cada coordenada na ponta dos ramos finais, o circulo esta estatico por enquanto,
mas futuramente pretendo deixar ele em tamanhos aleatorios ou proporcionais ao tamanho da espessura do ramo

*/
function desenharMiolos(){
    for(let i = 0; i < pontasFinais.length; i++){
        ctx.beginPath();
        ctx.fillStyle = '#c7ae11'
        ctx.arc(pontasFinais[i].x, pontasFinais[i].y, pontasFinais[i].raio, 0, 2 * Math.PI)
        ctx.fill();
    }
}

function desenharPetalas(){

    //determinar as possiveis cores 
    for(let i = 0; i < bordaMiolo.length; i++){
        //p -> petala
        const p = bordaMiolo[i];
        const anguloPerpRad = (p.angulo + 90) * Math.PI / 180;

        const posicao = 0.3;
        const posX = p.x1 + (p.x2 - p.x1) * posicao;
        const posY = p.y1 + (p.y2 - p.y1) * posicao;

        //STANDS FOR LARGURA PETALA
        const LP = 5 + Math.random() * 4;

        const larguraEsquerda = LP * (0.8 + Math.random() * 0.4);
        const larguraDireita = LP * (0.8 + Math.random() * 0.4 );

        const controle1X = posX + larguraEsquerda * Math.cos(anguloPerpRad);
        const controle1Y = posY + larguraEsquerda * Math.sin(anguloPerpRad);
        const controle2X = posX - larguraDireita * Math.cos(anguloPerpRad);
        const controle2Y = posY - larguraDireita * Math.sin(anguloPerpRad);

        ctx.beginPath();
        ctx.fillStyle = `hsl(${p.cor}, ${p.saturacao}%, ${p.luminosidade}%)`;
        ctx.moveTo(p.x1, p.y1);
        ctx.quadraticCurveTo(controle1X, controle1Y, p.x2, p.y2);
        ctx.quadraticCurveTo(controle2X, controle2Y, p.x1, p.y1);
        ctx.fill();

    }
}