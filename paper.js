class Paper{
    constructor(x,y,r){
       var options = {
          isStatic: false,
          'restitution': 0.3,
          'friction': 0,
          'density': 1.2
      }
      this.image = loadImage("paper.png");
      this.y = y
      this.x = x
      this.r = r
      this.body = Bodies.circle(this.x, this.y, (this.r - 20) / 2, options)
      World.add(world, this.body);
    }

    display() {
        push()
        var paperpos = this.body.position;
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        image(this.image, 0, 0, 50,50);
        // ellipse(0, 0, this.r, this.r);
        pop()
    }
}