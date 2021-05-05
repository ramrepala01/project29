class Polygon{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
          
        }
        // this.polygonImage=loadIma
        this.body = Bodies.circle(x, y,30, options);
        
        
        World.add(world, this.body);
      }
      display(){
        
       // push();
        //translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        ellipse( this.body.position.x,this.body.position.y,30,30);
        //pop();
      }
}