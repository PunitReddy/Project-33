class Plinko {

    constructor(x, y, r) {

        var options = {

            isStatic : true,
            restitution : 0.4

        }

        this.body = Bodies.circle(x, y, r, options)
        World.add(world, this.body)

        this.r = r;

    }

    display() {

        var pos = this.body.position;
        //var angle = this.body.angle;

        //push();
        //translate(pos.x, pos.y);
        //rotate(angle);
        //imageMode(CENTER);
        noStroke();

        ellipseMode(RADIUS);

        ellipse(pos.x, pos.y, this.r, this.r);
        
        //pop();

    }

}