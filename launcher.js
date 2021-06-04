class Launcher{
    constructor(bodyA,pointB){
        var options= {
            length: 10,
            stiffness: 0.004,
            bodyA: bodyA,
            pointB:pointB
        }
        this.chain= Constraint.create(options)
        this.pointB= pointB
    World.add(world,this.chain)
    }

    attach(body){
        this.chain.bodyA = body 
    }

    display(){
        if(this.chain.body){
            var A= this.chain.bodyA.position;
            var B=  this.pointB
            push();
            strokeWeight(2)
            line(A.x,A.y,B.x, B.y)
            pop();
        }
    }
    
    fly(){
        this.chain.bodyA= null;
    }
}