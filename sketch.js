var hr,mn,sc
var myhour,myminute,mysecond;



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);

}

function draw() {
  background(0);  
  hr = hour();
  mn = minute();
  sc = second();

  mysecond = map(sc,0,60,0,360);

  myminute = map(mn,0,60,0,360);

  myhour = map(hr%12,0,12,0,360);


  push()
  rotate(mysecond);
  stroke("green");
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  drawSprites();
}
