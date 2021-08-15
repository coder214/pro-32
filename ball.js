class Ball {
    constructor(x, y, r){
        let options ={
            isStatic: true
        }

        this.body  = Bodies.cirlce(x, y, r, options);
        this.r = r;

        World.add(world, this.body);
    }

    show(){
        let pos = this.body.position.x;
        push()
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        fill('grey');
        ellipse(0 ,0 , this.w, this.h);
        pop()
    }
}