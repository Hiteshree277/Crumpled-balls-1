class Ball{
    constructor(x,y,radius){
        var options={
            restitution:0.8,
            isStatic:false,
            friction:1
        }
        this.body=Matter.Bodies.circle(x,y,40,options);
        this.radius=40;
        
        World.add(world,this.body);

    }

    display(){
        push();
        fill(255);
        stroke("lightblue");
        circle(0,0,this.radius);
        pop();
    }
}