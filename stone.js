class Stone {
  constructor(x,y,width){
    
    //this.image=loadImage("paper.png")
    this.width=width;
    this.body=Bodies.circle(x,y,width,{isStatic:false})
    World.add(world,this.body)
    //this.visibility=255
  }
  display(){
   
    push()
    fill(255, 0, 0)
    translate(this.body.position.x,this.body.position.y)
  rotate(this.body.angle)
  ellipseMode(CENTER)
    ellipse(0,0,this.width*2);
    pop()
  }

}