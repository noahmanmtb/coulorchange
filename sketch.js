var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);  
  btn_red=createButton("red")
  btn_red.position(100,50)
  btn_red.mousePressed(rb)
  btn_green=createButton("green")
  btn_green.position(250,50)
  btn_green.mousePressed(gb)
}

function draw() {
  background(r,g,b);
}
function rb() {
r=255
g=0
b=0
}
function gb() {
  r=0
  g=255
  b=0
  }

