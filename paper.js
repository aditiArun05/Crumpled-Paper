class paper{
constructor(){
var options= {
    density:1.2,
    friction:0.5,
    restitution:0.3,
    isStatic:false
    }

this.body=Bodies.circle(200,500,20,options)
World.add(world,this.body)
} 
display(){
    ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,20,20)
}   
}
