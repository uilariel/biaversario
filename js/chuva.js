let particulasNuvem = [];
const numParticulasNuvem = 30;

let gotas = []
let chovendo = false;



function inicializarNuvem(){
    for(let i = 0; i < numParticulasNuvem; i++){

       

        particulasNuvem.push({
            posX: (Math.random() - 0.5) * 60,
            posY: (Math.random() - 0.5) * 25,
            raio: 8 + Math.random() * 10
        });
    }

}

function desenharNuvem(){
    for(let i = 0; i < particulasNuvem.length; i++){

        const particulas = particulasNuvem[i];

        const tremorX = Math.sin(Date.now() * 0.001 + i ) * 2;
        const tremorY = Math.cos(Date.now() * 0.0015 + i ) * 2;

        ctx.beginPath();
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        ctx.arc(mouseX + particulas.posX + tremorX, mouseY + particulas.posY + tremorY, particulas.raio, 0, 2 * Math.PI);
        ctx.fill();
    }
}


function criarGota(){
    gotas.push({
        x: mouseX + (Math.random() - 0.5) * 50,
        y: mouseY,
        vy: 0,
    })
}

function atualizarGotas(){
    for(let i = gotas.length - 1; i >= 0; i--){
        const gota = gotas[i];
        gota.vy += 0.3;
        gota.y += gota.vy;

         if(gota.y > canvas.height){
        gotas.splice(i, 1);
    }
    }

   
}

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
        ctx.arc(gota.x, gota.y, 3, 0, 2 * Math.PI)
        ctx.fill();
    }

    ctx.filter = 'none'
}
