function setup() {
  createCanvas(windowWidth, windowWidth).position(0,0).style('z-index',-1);
  createA("https://github.com/RandallDavalos","cuenta","_black").id("mio");
  textSize(40);
}

function draw() {
  text("⭐",mouseX,mouseY);
}

function windowResized (){
  resizeCanvas(windowWidth,windowWidth);
}