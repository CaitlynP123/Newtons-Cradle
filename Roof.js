class Roof{
    constructor(x, y, width, height){
        var option = {
            isStatic : true
        }

    this.roof = Bodies.rectangle(x,y,width,height,option) 
    World.add(world, this.roof)
    this.w = width
    this.h = height
}

    display(){
        var pos = this.roof.position
        fill("grey")
        rectMode(CENTER)
        rect(pos.x, pos.y, this.w, this.h)
    }
}