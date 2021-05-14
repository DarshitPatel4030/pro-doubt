var partical




function setup() {
  createCanvas(1400, 600);
  createSprite(400,800);
  particle = new Particle(200,300,30)


}

function draw() {
  background(255,255,255);  
  drawSprites();
  particle.display();
}