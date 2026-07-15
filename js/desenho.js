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