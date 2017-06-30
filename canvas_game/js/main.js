//Get the canvas Element
let canvas = document.getElementById('canvas');
//get context for the canvas 
let ctx = canvas.getContext('2d');//
//begin path
// ctx.beginPath();
// ctx.rect(50,60,100,100);//left , top , height , width
// ctx.fillStyle = '#555';
// ctx.fill();
// ctx.closePath();
// //end path 
// //circle
// ctx.beginPath();
// ctx.arc(240, 160 , 40 ,0 ,Math.PI*2,false);//x and y coordinate  big ,star angle and end angle ..
// ctx.fillStyle = '#b2b2b2';
// ctx.fill();
// ctx.closePath();
// //rectangle
// ctx.beginPath();
// ctx.rect(160 , 10 , 100, 40);
// ctx.strokeStyle = "rgba(0,0,255,0.5)";// just the line around of the canvas 
// ctx.stroke();
// ctx.closePath();


//draw function 
let x = canvas.width/2;//center the circle horizontal
let y = canvas.height- 30;//pull the ball 30px from the bottom of the stage 
//add movement to the ball
let dx = 2;
let dy = -2;
//collision  detections
let ballRadius = 10;
//add 
let paddleHeight = 10;
let paddleWidth = 75;
let paddleX= (canvas.width - paddleWidth )/2;
//right  press
let right =false;
//left press
let left = false;
//add event listener for ke dow
document.addEventListener('keydown', keyDownHandler);
// keyup
document.addEventListener('keyup', keyUpHandler);
//keyDownHandler function 
function keyDownHandler(e){
    console.log(e.keyCode);
    if (e.keyCode == 39){
        right = true;
    }else if(e.keyCode == 37){
        left = true;
    }
}
function keyUpHandler(e){
    console.log(e.keyCode);
    if (e.keyCode == 39){
        right = false;
    }else if(e.keyCode == 37){
        left = false;
    }
}
//draw ball function for make the code cleaner
function drawBall(){
    ctx.beginPath();//begin 
    ctx.arc(x,y,ballRadius,0,Math.PI*2);//circle 
    ctx.fillStyle = 'skyblue';//what color we wanth to fill our canvas element  
    ctx.fill();//call the fill function 
    ctx.closePath();//end
}
// Draw paddle function 
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX,canvas.height - paddleHeight,paddleWidth,paddleHeight);
    ctx.fillStyle = "skyblue";
    ctx.fill();
    ctx.closePath();
}
function draw(){
    ctx.clearRect(0,0,canvas.width , canvas.height);//ever 10 milliseconds our rectangle is clear 
    drawBall();//ball
    drawPaddle();//paddle
    //check if the ball hit the top part of our canvas 
    if(y + dy > canvas.height - ballRadius  || y + dy < ballRadius ){
        dy = -dy;
    }
    //left and bottom
    if(x + dx > canvas.width - ballRadius || x + dx < ballRadius ){//canvas width - ball radius 10 so the ball hit the wall and no get cut to the middle
        dx = -dx;
    }

    // if (y + dy < 0 ){// if y is lest than 0 
    //     dy = -dy;// reverse the value of the dy;
    // }
    // if(y + dy < canvas.height){
    //     dy = -dy;
    // }

    //check if ke press
    if(right && paddleX < canvas.width - paddleWidth){
        paddleX +=7;
    }
    else if (left && paddleX > 0){
        paddleX -=7;
    }
    x += dx;//2 x= x+dx
    y +=dy; // -2
}
//set interval at the end of our code to make sure all our variable star 
setInterval(draw, 10);//take 2 parameter a function and time 