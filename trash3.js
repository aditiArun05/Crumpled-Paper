class Trash3{
    constructor(x,y,width,height){
var options={
    isStatic:true,
    density:1
}

this.body=Bodies.rectangle(x,y,width,height,options)
this.width=width
this.height=height
World.add(world,this.body)
this.image=loadImage("dustbingreen.png")
}

    display(){
        imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,40,40)

}
}
