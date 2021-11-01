var stripes;

function setup() {
  createCanvas(450, 400);

  //draw stripes
  for (var x = 30; x < 450; x = x + 55) {
    var stripe = createSprite(x, 200, 35, 300);
    stripe.shapeColor = "white";
  }
}

function draw() {
  background("gray");

  drawSprites();
}
