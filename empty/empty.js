function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(138, 3, 70);

  //hair
  noStroke();
  fill(250, 152, 185);
  triangle(135,120,37,600,563,598);
  triangle(465,120,563,600,37,598);
  fill(0);
  circle(300,190,370);
  fill(0);
  triangle(130,120,85,364,135,250);
  triangle(127,250,153,372,185,302);
  triangle(470,120,515,364,465,250);
  triangle(473,250,447,372,415,302);
  triangle(202,380,195,332,218,350);
  triangle(398,380,405,332,382,350);
  fill(250,250,250);
  
// shirt base
noStroke();
fill('white');
stroke(2);
circle(300, 623, 400); 

// start the mask
noStroke();
push(); 
  // 
  circle(300, 623, 400);
  drawingContext.clip();

  // Draw the polka dots
  fill('pink'); 
  let dotSpacing = 30;
  let dotSize = 15;

  // Grid of dots 
  for (let x = 100; x <= 500; x += dotSpacing) {
    for (let y = 423; y <= 823; y += dotSpacing) {
      circle(x, y, dotSize);
    }
  }
pop();
  stroke(3);
  fill('white');
  triangle(300,572,252,430,210,450);
  triangle(300,572,348,430,390,450);
  
  //ears
  noStroke();
  fill(250, 233, 215);
  ellipse(152,234,50,50);
  ellipse(448,234,50,50);
  fill(230, 204, 179);
  ellipse(152,234,30,30);
  ellipse(448,234,30,30);
  
  //face
  fill(250, 233, 215);
  rect(270,377,61,70);
  triangle(300,575,252,430,348,430);
  circle(300,230,300);
  fill(242, 162, 185);
  ellipse(230,300,60,30);
  ellipse(370,300,60,30);
  fill(230, 83, 123);
  ellipse(300,330,50,30);
  stroke(0);
  strokeWeight(2);
  line(290, 330, 310, 330);
  
  //eyes
  fill(252, 250, 252);
  circle(230,230,100);
  circle(370,230,100);
  fill(0);
  arc(230, 230, 100, 100, HALF_PI, 80);
  arc(370, 230, 100, 100, HALF_PI, 80);
  // *** EYELASHES ***
  stroke(0);         
  strokeWeight(2);
  
  // lashes
  line(200, 190, 190, 170); 
  line(230, 180, 230, 155); 
  line(260, 190, 270, 170); 
  
  // lashes
  line(340, 190, 330, 170); 
  line(370, 180, 370, 155); 
  line(400, 190, 410, 170); 
  
  //bangs-left
  fill(0)
  push();           
  translate(213,126); 
  rotate(20);       
  ellipse(0, 0,60,203); 
  pop();       
  
  //bangs-right
  push();           
  translate(390,132); 
  rotate(21);       
  ellipse(0, 0,60,200); 
  pop();    
 
}
  

  
