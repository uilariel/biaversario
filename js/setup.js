const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousemove', function(evento){
    const rect = canvas.getBoundingClientRect();
    mouseX = evento.clientX - rect.left;
    mouseY = evento.clientY - rect.top;
})

canvas.addEventListener('mousedown', function(){
    chovendo = true;
})

canvas.addEventListener('mouseup', function(){
    chovendo = false;
})