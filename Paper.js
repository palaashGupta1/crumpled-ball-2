class Paper {
    constructor(x,y,radius) {
      var options = {
          restitution:0.3,
            density:0.5,
        friction:0.5
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image=loadImage("paper ball.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
     
      image(this.image,pos.x, pos.y,50,50);
    }
  };