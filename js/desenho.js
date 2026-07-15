function desenharGalhos(){
    for(let i = 0; i < galhos.length && i < galhosRevelados; i++){
        ctx.beginPath();
        ctx.strokeStyle = '#88c56a'
        ctx.lineWidth = Math.max(0.4, galhos[i].comprimento * 0.06);
        ctx.moveTo(galhos[i].x1, galhos[i].y1);
        ctx.lineTo(galhos[i].x2, galhos[i].y2);
        ctx.stroke();
    }
}


/*desenha um circulo em cima de cada coordenada na ponta dos ramos finais, o circulo esta estatico por enquanto,
mas futuramente pretendo deixar ele em tamanhos aleatorios ou proporcionais ao tamanho da espessura do ramo

*/
function desenharMiolos(){
    for(let i = 0; i < pontasFinais.length && i < pontasFinaisReveladas; i++){
        ctx.beginPath();
        ctx.fillStyle = 'yellow'
        ctx.arc(pontasFinais[i].x, pontasFinais[i].y, pontasFinais[i].raio, 0, 2 * Math.PI)
        ctx.fill();
    }
}