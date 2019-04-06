function Box(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, w, h, options);
    World.add(world, this.body);
}

Box.prototype.show = function () {
    fill(255, 255, 255);
    noStroke();
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    rect(0, 0, this.w, this.h);
    pop();

 //   rect(pos.x, pos.y, this.w, this.h);
}