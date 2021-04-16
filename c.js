var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth; 
canvas.height = window.innerHeight;

var c = canvas.getContext("2d");


var x = 200;
var y = 300;
var radius = 40;
var dy = 4;

function func1(){
    var x = document.getElementById('x').value;
    var y = document.getElementById('y').value;
    var r = document.getElementById("r").value;

    console.log(x + y + r);
    animate(x, y, r);
}

function animate (x1, y2, r2) {
    console.log(x1);
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    c.beginPath();
    c.arc(x1, y2, r2, 0, Math.PI * 2, false);
    c.strokeStyle = "red";
    c.fillStyle = "yellow";
    c.fill();
    c.stroke();

    if (y2 + r2 > innerHeight || y2 - r2 < 0 ){
        dy = -dy;
    }

    y2 += dy;
}

// animate();

