class Web {
     constructor (BodyA,pointB){
    var puff={
        bodyA:BodyA,
        pointB:pointB,
        stiffness:0.15,
        length:14
    }
    this.kirti=Constraint.create(puff)
    //this.Image=loadImage("Cataplult.png")
    //this.band=loadImage("slingBand.png")
    World.add(world,this.kirti)
     }
    display(){
        //image(this.Image,150,80,150,150)
        if(this.kirti.bodyA){
            push();
            strokeWeight(6)
            stroke(235, 235, 235)
            if(this.kirti.bodyA.position.x<200){
            
        line(this.kirti.bodyA.position.x-20,this.kirti.bodyA.position.y,this.kirti.pointB.x+14,this.kirti.pointB.y+12)
        line(this.kirti.bodyA.position.x-20,this.kirti.bodyA.position.y,this.kirti.pointB.x+50,this.kirti.pointB.y+12)
        }
        else{
            line(this.kirti.bodyA.position.x+25,this.kirti.bodyA.position.y,this.kirti.pointB.x+14,this.kirti.pointB.y+12)
        line(this.kirti.bodyA.position.x+25,this.kirti.bodyA.position.y,this.kirti.pointB.x+50,this.kirti.pointB.y+12)
        }
        //image(this.band,this.kirti.bodyA.position.x-30,this.kirti.bodyA.position.y-10,30,5)
        }
        pop();
    }
//because of this below fly function we released
// our body or me from kirti constraint and then to
// help for not disapearing the body we gave this above display and gave the if condition!
    fly(){
        this.kirti.bodyA=null
    }
    attach(rg){
        this.kirti.bodyA=rg;
    }
}