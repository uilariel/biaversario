let particulasNuvem = [];
const numParticulasNuvem = 150;

let gotas = []
let chovendo = false;

let progressoRegagem = 0;


//povoa o array de particular de nuvem com objetos que determinam onde cada circulo vai
//ficar e o tamanho deles
function inicializarNuvem(){
    for(let i = 0; i < numParticulasNuvem; i++){

       

        particulasNuvem.push({
            posX: (Math.random() - 0.5) * 200,
            posY: (Math.random() - 0.5) * 50,
            raio: 8 + Math.random() * 10
        });
    }

}

//
function desenharNuvem(){
    for(let i = 0; i < particulasNuvem.length; i++){

        //atalho
        const particulas = particulasNuvem[i];

        //variavel pra fazer as particulas de nuvem oscilarem levemente no eixo x e y
        //usamos a data atual como parametro pra causar randomizacao + indice i atual
        const tremorX = Math.sin(Date.now() * 0.001 + i ) * 2;
        const tremorY = Math.cos(Date.now() * 0.0015 + i ) * 2;

        //desenha uma nuvem de cor branca 
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.arc(mouseX + particulas.posX + tremorX, mouseY + particulas.posY + tremorY, particulas.raio, 0, 2 * Math.PI);
        ctx.fill();
    }
}


//povoa o array de gotas 
function criarGota(){
    gotas.push({
        x: mouseX + (Math.random() - 0.5) * 200,
        y: mouseY,
        vy: 0,
    })
}

//determina a posicao atual e velocidade das gotas
//VY representa o quao rapido a posicao das gotas vai diminuir no eixo Y.
//determinamos a posicao Y da gota como o vy
function atualizarGotas(){
    for(let i = gotas.length - 1; i >= 0; i--){
        const gota = gotas[i];
        gota.vy += 0.25;
        gota.y += gota.vy;

        //remove a gota do array, consequentemente, da tela
         if(gota.y > canvas.height){
        gotas.splice(i, 1);
    }
    }

   
}


/*FUNCAO RESPONSAVEL POR DESENHAR AS GOTAS
->PRIMEIRO DESENHA UMA LINHA QUE DESCE A TELA SENDO CONTROLADA PELO VY DA GOTA
->DENHAMOS UM CIRCULO NA PONTA DESSA LINHA PRA SER MEIO QUE A CABECA DA GOTA.

*/ 
function desenharGotas(){
    ctx.filter = 'blur(2px)';
    for(let i = 0; i < gotas.length; i++){
        const gota = gotas[i];

        ctx.beginPath();
        ctx.strokeStyle = 'rgb(19, 128, 183)';
        ctx.lineWidth = 5;
        ctx.moveTo(gota.x, gota.y - gota.vy * 2);
        ctx.lineTo(gota.x, gota.y);
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = 'rgb(19, 128, 183)'
        ctx.arc(gota.x, gota.y, 7, 0, 2 * Math.PI)
        ctx.fill();
    }

    ctx.filter = 'none'
}
