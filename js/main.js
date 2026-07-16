
/*gerarGalhos(x, y, comprimento, anguloGraus, nivel, maxNivel);
galhosRevelados = galhos.length;
pontasFinaisReveladas = pontasFinais.length;
desenharGalhos();
console.log("pontasFinais:", pontasFinais);
console.log("pontasFinaisReveladas:", pontasFinaisReveladas);
desenharMiolos();
gerarBordasMiolo()
desenharPetalas();
console.log("borda miolo", bordaMiolo)

inicializarNuvem();
desenharNuvem();*/

gerarGalhos(x, y, comprimento, anguloGraus, nivel, maxNivel);
gerarBordasMiolo();
inicializarNuvem();

let contadorFrames = 0;

//loop de animacao
function loop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    desenharCeu();
    desenharGrama();
    desenharSol();
    if(chovendo){
        contadorFrames++;
        if(contadorFrames % 5 === 0){
            criarGota();
        }
    }
    atualizarGotas();
    desenharGalhos();
    desenharMiolos();
    desenharPetalas();
    desenharGotas();
    desenharNuvem();

    requestAnimationFrame(loop);
}

requestAnimationFrame(loop);