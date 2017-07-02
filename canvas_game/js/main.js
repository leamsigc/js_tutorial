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
//Brick variables 
let brickRowCount = 3;
let brickColumnCount = 10;
let brickWidth = 50;
let brickHeight = 25;
let brickPadding =10;
let brickOffsetTop = 30;
let brickOffsetLeft =30;
//score variable 
let score = 0;
//add lives 
let lives = 3;
//brick array 
let brick = [];
    //for loop c = column 
    for(c = 0 ; c < brickColumnCount;c++){
        brick[c] = [];
        for(r = 0 ; r < brickRowCount;r++){
            brick[c][r] = {x:0, y:0 , status:1}
        }
    }
    //draw the bricks function 
    function drawBrick(){
         for(c = 0 ; c < brickColumnCount;c++){
            for(r = 0 ; r < brickRowCount;r++){
                if(brick[c][r].status === 1){
                    let brickX= (c*(brickWidth + brickPadding))+brickOffsetLeft;
                    let brickY= (r*(brickHeight + brickPadding))+brickOffsetTop ;
                    brick[c][r].x = brickX;
                    brick[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.rect(brickX,brickY,brickWidth,brickHeight);
                    ctx.fillStyle = '#0095DD';
                    ctx.fill();
                    ctx.closePath(); 
                }
                
            }
        }
    }
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
    ctx.fillStyle = 'skyblue';//what color we wants to fill our canvas element  
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
//collision detection function 
function collisionDetection(){
    for(c = 0 ; c < brickColumnCount;c++){
        for(r = 0 ; r < brickRowCount;r++){
           let b = brick[c][r];
           //calculations
           if(brick[c][r].status === 1)
           {
               if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) 
               {
                    dy = -dy;//change the direction of the ball
                    b.status = 0; //change the brick status 
                    if(score === brickColumnCount * brickRowCount - 1){
                        alert('Hell Yea ......Good job !!!');
                        document.location.reload();
                    }
                    score++;
                }
           }
           
        }
    }
}
//draw score 
function drawScore(){
    ctx.font = '20px Cursive';
    ctx.fillStyle = '#fff';
    ctx.fillText('Score :'+score , 8 , 20 );

}
//draw lives 
function drawLives(){
    ctx.font = '20px Cursive';
    ctx.fillStyle = '#fff';
    ctx.fillText('lives:'+lives ,canvas.width - 65, 20 );

}
function draw(){
    ctx.clearRect(0,0,canvas.width , canvas.height);//ever 10 milliseconds our rectangle is clear 
    drawBall();//ball
    drawPaddle();//paddle
    drawBrick();//draw the bricks
    collisionDetection(); // Collision detection 
    drawScore()//draw the score in the canvas
    drawLives()//lives
    //check if the ball hit the top part of our canvas 
    if( y + dy < ballRadius ){
        dy = -dy;
    }else if (y + dy > canvas.height - ballRadius){
        if(x > paddleX && x <paddleX+paddleWidth){
            dy = -dy;
        }else{
            lives--;
            if(!lives){
                alert('Game over !!!;');
            document.location.reload();
            }else{
                x = canvas.width/2;
                y = canvas.height-30;
                dx = 2;
                dy = -2;
                paddleX = (canvas.width - paddleWidth)/2;
            }
        }
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

    //check if key press
    if(right && paddleX < canvas.width - paddleWidth){
        paddleX +=7;
    }
    else if (left && paddleX > 0){
        paddleX -=7;
    }
    x += dx;//2 x= x+dx
    y +=dy; // -2
    //request Animation frame
    requestAnimationFrame(draw);
}
//add Mouse move event handler
document.addEventListener('mousemove', mouseMoveHandler);
function mouseMoveHandler(e){
    let relativeX = e.clientX - canvas.offsetLeft;
    if(relativeX > 0 + paddleWidth/2 && relativeX < canvas.width- paddleWidth/2){
        paddleX = relativeX - paddleWidth / 2;
    }
}
//set interval at the end of our code to make sure all our variable star 
//setInterval(draw, 10);//take 2 parameter a function and time 
draw();