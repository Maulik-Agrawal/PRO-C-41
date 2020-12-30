class Drop{
    constructor(x,y,){
        var options={
            restitution: 0.1,
            friction: 0.1
        }
        this.x = x;
        this.y = y;
        this.r = 1;
        this.body = Bodies.circle(x,y,3,options);
        World.add(world,this.body);
    }

    showDrop()
    {
         fill("blue")
          ellipseMode(CENTER);
           ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
         }

         updateY()
         {
              if(this.body.position.y > height)
              {
                   Matter.Body.setPosition(this.body, {x:random(0,400), y:random(0,400)})
                 }
                  }
}