var drops = [];
var dropCount = 500;

function setup(){

    createCanvas(800, 400);

    for(var i = 0; i < dropCount; i++){

        drops[i] = new Drop();

    }

}

function draw(){

    background(0);

    for(var i = 0; i < drops.length; i++){

        drops[i].display();
        drops[i].fall();

    }

}