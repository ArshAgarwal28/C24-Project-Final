class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
}