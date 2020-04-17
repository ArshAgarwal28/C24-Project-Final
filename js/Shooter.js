class Shooter {
    constructor(x,y) {
        var options = {
            restitution:0.8,
            density:0.4
        }

        this.body = Bodies.rectangle(x,y,70,10,options);
        this.w = 70;
        this.h = 10;

        World.add(world, this.body)
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        //pos.x = mouseX;
        //pos.y = mouseY;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill ("white");
        strokeWeight(3.5);
        rectMode(CENTER);
        rect(0, 0, this.w, this.h)
        pop();
    }
}