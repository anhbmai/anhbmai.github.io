var ballx = 300;
var bally = 300;
var ballSize = 40;
var score = 0;
var gameState = "intro";
var img, img2, cursorImg; // Added cursorImg here

function preload() {
  img2 = loadImage('https://anhbmai.github.io/portfolio/bunny2.png');
  img = loadImage('https://anhbmai.github.io/house.jpg');
  cursorImg = loadImage('https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNjJkZnJzcXExMWprMzN1MXNkbm9nMTR0Mzhhc3FwNDd1a2N4eWZiYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/WNlsQiGMU387hn7UZQ/giphy.gif');
}

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER);
  textFont('Courier New');
  textSize(12);

  noCursor(); // This hides the default white arrow
}

function draw() {
  background(img);
  fill(176,0,103);            
  stroke('white');    
  strokeWeight(2);    
  textStyle(BOLD);     
  textSize(20);
  if (gameState == "intro") {
    levelIntro();
  }
  if (gameState == "L1") {
    levelOne();
  }
  if (gameState == "L2") {
    levelTwo();
  }
  if (gameState == "L3") {
    levelThree();
  }
  if (gameState == "win") {
    levelWin();
  }

  if (gameState != "intro") {
    fill(176,0,103);
    text(("Score: " + score), width / 2, 40);
  }

  // DRAW THE CUSTOM CURSOR LAST
  // We subtract 25 from mouseX/Y to center the 50x50 image on the tip of the pointer
  image(cursorImg, mouseX - 25, mouseY - 25, 50, 50);
}

function levelIntro() {

 let textJiggle = sin(frameCount * 0.1) * 10;
  text("Steal the food before the homeowner notices!", width / 2, 340 + textJiggle);
  text("Press a key to play", width / 2, 390+ textJiggle);
  if (keyIsPressed === true) {
    gameState = "L1";
  }
}

function levelOne() {
  text("Level 1", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 5) {
    gameState = "L2";
  }
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
  stroke(255);
  line(ballx, bally, mouseX, mouseY);
}

function levelTwo() {
  text("Level 2", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    score = score + 1;
  }
  if (score > 10) {
    gameState = "L3";
  }
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

function levelThree() {
  text("Level 3", width / 2, height - 20);
  var distToBall = dist(ballx, bally, mouseX, mouseY);
  if (distToBall < ballSize / 2) {
    ballx = random(width);
    bally = random(height);
    ballSize = ballSize - 1;
    score = score + 1;
  }
  if (score > 20) {
    gameState = "win";
  }
  image(img2, ballx - ballSize / 2, bally - ballSize / 2, ballSize, ballSize);
}

function levelWin() {
  background(20, 90, 20);
  fill(255);
  text("Look at you! You won!", width / 2, height / 2);
}
