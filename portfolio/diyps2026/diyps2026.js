var img;
var bg;
var castle, clouds, fairy, moon, star, sun, ornament, waves, bunny1, bunny2;
var initials = 'am'; // your initials
var choice = '1'; // starting choice, so it is not empty
var lastscreenshot=61; // last screenshot never taken

function preload() {
// preload() runs once, it may make you wait
//  img = loadImage('cat.jpg');  // cat.jpg needs to be next to this .js file
// you can link to an image on your github account
  bg = loadImage('https://anhbmai.github.io/portfolio/bg.png');
  castle = loadImage('https://anhbmai.github.io/portfolio/castle.png');
  clouds = loadImage('https://anhbmai.github.io/portfolio/clouds.png');
  fairy = loadImage('https://anhbmai.github.io/portfolio/fairy.png');
  moon = loadImage('https://anhbmai.github.io/portfolio/moon.png');
  star = loadImage('https://anhbmai.github.io/portfolio/star.png');
  sun = loadImage('https://anhbmai.github.io/portfolio/sun.png');
  ornament = loadImage('https://anhbmai.github.io/portfolio/treo.png');
  waves = loadImage('https://anhbmai.github.io/portfolio/waves.png');
  bunny1 = loadImage('https://anhbmai.github.io/portfolio/bunny1.png');
  bunny2 = loadImage('https://anhbmai.github.io/portfolio/bunny2.png');
}

function setup() {
createCanvas(600, 600);  // canvas size
image(bg, 0, 0,600, 600);   // use our background screen color

}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // first tool
    let spread = 70
    image(star, mouseX + random(-spread, spread), mouseY + random(-spread, spread), 30, 30);
    
  } else if (toolChoice == '2') { // second tool
    image(castle, mouseX - 100, mouseY - 100, 300, 300);
  
  } else if (toolChoice == '3') { // third tool
    image(clouds, mouseX - 100, mouseY - 100, 200, 130)
    
  } else if (toolChoice == '4') {
    image(fairy, mouseX - 50, mouseY - 50, 100, 130);
    
  } else if (toolChoice == '5') { // this tool calls a function
   image(moon, mouseX - 50, mouseY - 50, 130, 130);
    
  } else if (toolChoice == '6') {
   image(sun, mouseX - 50, mouseY - 50, 130, 130);
   
  } else if (toolChoice == '7') {
   image(ornament, mouseX - 15, mouseY - 100, 40, 200);
  
  } else if (toolChoice == '8') {
    image(waves, mouseX - 140, mouseY - 100 , 230, 150);
    
  } else if (toolChoice == '9') {
    image(bunny1, mouseX - 30, mouseY - 30, 70, 70);
    
  } else if (toolChoice == '0') {
    image(bunny2, mouseX - 30, mouseY - 30, 70, 70);
    
  }
 }

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    image(bg, 0, 0,600, 600); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
  filename=initials+day() + hour() + minute() +second();
  if (second()!=lastscreenshot) { // don't take a screenshot if you just took one
    saveCanvas(filename, 'jpg');
    key="";
  }
  lastscreenshot=second(); // set this to the current second so no more than one per second
  
}
