function Circle(x, y, r) {
    this.hue = random(360);
    this.x = x;
    this.y = y;
    // r+=random(10);
    this.r = r;
    var options = {
        restitution: random(0.5, 1),
        friction: 0, //random (-1, 1),
        density: random(0, 1)
    }
    this.body = Bodies.circle(x, y, r, options);
    World.add(world, this.body);
}

Circle.prototype.show = function () {
    fill(this.hue, 255, 255);
    noStroke();
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    ellipse(0, 0, this.r * 2);
    pop();
}