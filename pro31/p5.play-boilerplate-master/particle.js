class Particle{
cunstructor(x,y,r){
    var option = {
    'restitution':0.4
    }
    this.r=this.r;
    this.bodies=Bodies.circle(x,y,this.r,options)
    this.colour=colour(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;

    push();
    translate(pos.x,pos.y)
    rotate(angle)
    noStroke();
    fill(this.colour) 
    ellipseMode(RADIUS)
    ellipse(0,0,this.r,this.r)
    pop();
}
}