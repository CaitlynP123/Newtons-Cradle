class Bob{
    constructor(x,y){
        var option = {
            density : 0.8,
            restitution : 0.8,
            friction : 0.3
        }

    this.bob = Bodies.circle(x,y,50,option)
    World.add(world, this.bob)
    }

    display(){
        var pos = this.bob.position
        fill("hotpink")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,50,50)
    }
}