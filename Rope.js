//create class for rope
class Rope{
    constructor(bodyA,pointB){
        var options={
bodyA:bodyA,
pointB:pointB,
stiffness:1.2,
lenghth:250






        }
        this.pointB=pointB
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
        
    }
    attach(ball){
        this.rope.bodyA=ball
    }
    fly(){
        this.rope.bodyA=null
    }
    display(){
if(this.rope.bodyA){
    var a=this.rope.bodyA.position;
    var b=this.pointB
    push ();
    stroke ("orange");
    strokeWeight(3);
    line(b.x,b.y,a.x,a.y);
    pop();
}

    }
}