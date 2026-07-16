
//ceu gradiente que comeca azul claro em cima e termina azul escuro em baixo
function desenharCeu(){
    const ceu = ctx.createLinearGradient(0, 0 ,0, canvas.height);
    ceu.addColorStop(0, 'rgba(173, 205, 220, 0.93)')
    ceu.addColorStop(1, 'rgba(16, 164, 175, 0.93)')
    ctx.fillStyle = ceu;
    ctx.fillRect(0, 0,canvas.clientWidth, canvas.height)

}

//grama vibecodada pq to sem saco
function desenharGrama(){
    const alturaGrama = canvas.height * 0.22;

    ctx.beginPath();
    ctx.fillStyle = '#5a9e4a';
    ctx.moveTo(0, canvas.height - alturaGrama);
    ctx.quadraticCurveTo(canvas.width / 2, canvas.height - alturaGrama - 20, canvas.width, canvas.height - alturaGrama);
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.fill();
}

//sol simples so uma bola
function desenharSol(){
        ctx.beginPath();
        ctx.fillStyle = '#dfcb4b'
        ctx.arc(900, 200, 100, 0, 2 * Math.PI)
        ctx.fill();
}