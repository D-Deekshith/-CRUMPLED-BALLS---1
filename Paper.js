class Paper {
  constructor(x, y, radius) {
    var Paper_options = {
      isStatic: false,
      'restitution':0.3,
      'friction':0.5,
      'density':1.2,
      'velocityY': 20
    }
    this.body = Bodies.circle(x, y, radius, Paper_options);
    this.radius = radius

    World.add(world, this.body);
    }
  display(){
    ellipseMode(RADIUS);

    fill("purple");

    circle(this.body.position.x, this.body.position.y, this.radius);
  }
  }