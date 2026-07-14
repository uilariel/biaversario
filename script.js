/*
string " " '' `` 
boolean
number
undefined => quando vamos dar valor para isso mais tarde 
null => quando quisermos definir algo como nada
Bigin*/


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
})

const mouse = {
    x: undefined,
    y: undefined,
}

canvas.addEventListener('click', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
});

canvas.addEventListener('mousemove', function(event){
    mouse.x = event.x
    mouse.y = event.y

});

function drawCircle(){
ctx.fillStyle = 'red';
ctx.strokeStyle = 'white'
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI*2);
ctx.fill();
ctx.stroke()

}

function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}

animate();

console.log(canvas);
console.log(ctx); 
