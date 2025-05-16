let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");
let radius = canvas.height / 2;

ctx.translate(radius, radius);
radius = radius * 0.90;

setInterval(drawClock, 1000);

function drawClock() {
    ctx.clearRect(-radius, -radius, canvas.width, canvas.height);
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);  
    drawTime(ctx, radius);
}


function drawFace(ctx,radius) {
    ctx.beginPath(); 
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "white"; 
    ctx.fill();

    let grad = ctx.createRadialGradient(0,0,radius*0.95,0,0,radius*1.05);
    grad.addColorStop(0,'#333');
    grad.addColorStop(0.5,'white');
    grad.addColorStop(1,'#333');

    ctx.strokeStyle = grad;
    ctx.lineWidth=radius*0.1;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius*0.1, 0, 2 * Math.PI);
    ctx.fillStyle = "#333"; 
    ctx.fill();
}


function drawNumbers(ctx,radius){

    ctx.font= radius*0.15 + "px arial";
    ctx.textBaseline ="middle";
    ctx.textAlign ="center";

    for(let num=1;num<13;num++)
    {
        let ang = num * Math.PI / 6;
        ctx.save();
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.restore();
    }

}

function drawTime(ctx, radius) {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let second = now.getSeconds();

    hour = hour % 12;
    hour = (hour * Math.PI / 6) + (minutes * Math.PI / (6 * 60)) + (second * Math.PI / (360 * 60));
    drawHand(ctx, hour, radius * 0.5, radius * 0.07);

    minutes = (minutes * Math.PI / 30) + (second * Math.PI / (30 * 60));
    drawHand(ctx, minutes, radius * 0.8, radius * 0.07);

    second = (second * Math.PI / 30);
    drawHand(ctx, second, radius * 0.9, radius * 0.02);
}


function drawHand(ctx,pos,length,width)
{
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0,-length);
    ctx.stroke();
    ctx.rotate(-pos);

}