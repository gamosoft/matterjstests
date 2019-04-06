var Engine = Matter.Engine,
    World = Matter.World,
    Events = Matter.Events,
    Bodies = Matter.Bodies;

var engine;
var world;

var circles = [];
var numCircles = 20;
var floor;
var leftWall;
var rightWall;

var obstacles = [];

function setup() {

    createCanvas(500, 500);
    colorMode(HSB);

    engine = Engine.create();
    world = engine.world;

    for (let i = 0; i < numCircles; i++) {
        var c = new Circle(random(width), 0, 5);
        circles.push(c);
    }

    for (let i = 0; i < 50; i++) {
        var o = new Box(random(width), random(height), 3, 3);
        obstacles.push(o);
    }

    floor = new Box(width / 2, height+50, width, 100);
    leftWall = new Box(0, height / 2, 20, height);
    rightWall = new Box(width, height / 2, 20, height);
}

function draw() {
    background(0, 0, 0);
    // console.log(frameRate());
    Engine.update(engine); //, 1000 / 30);

    for (var i = 0; i < circles.length; i++) {
        circles[i].show();
    }

    floor.show();
    leftWall.show();
    rightWall.show();

    obstacles.forEach(o => {
        o.show();
    });
}