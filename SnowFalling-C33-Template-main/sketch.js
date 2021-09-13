var bg, snow, snowImg;


function preload() {
  bg = loadImage("snow2.jpg");
  snowImg = loadImage("snow5.webp");
}


function setup() {
  createCanvas(1200,800);
  snow = createSprite(400, 200, 50, 50);
  snow.addImage(snowImg);
  snow.scale = 0.2;

  snow1 = createSprite(140, 87, 50, 50);
  snow1.addImage(snowImg);
  snow1.scale = 0.2;

  snow2 = createSprite(850, 105, 50, 50);
  snow2.addImage(snowImg);
  snow2.scale = 0.09;

  snow3 = createSprite(1100, 330, 50, 50);
  snow3.addImage(snowImg);
  snow3.scale = 0.05;
}

function draw() {
  background(bg);  
  drawSprites();
  fill("white")
text(mouseX+','+mouseY,mouseX,mouseY);
}