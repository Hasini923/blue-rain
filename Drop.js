class Drop{

    constructor(){

        this.x = random(width);
        this.y = random(-500, -500);
        this.z = random(0, 20);
        this.len = map(this.z, 0, 20, 10, 20);
        this.yspeed = map(this.z, 0, 20, 1, 20);

    }

    fall(){

        this.y = this.y + this.speedY;
        this.gravity = map(this.z, 0, 20, 0, 0.2);
        this.speedY = this.speedY + this.gravity;

        if(this.y > height){

            this.y = random(-300, -200);
            this.speedY = map(this.z, 0, 30, 4, 30);   
    
        }
    
    }

    display(){

        var thick = map(this.z, 0, 25, 2, 3);
        strokeWeight(thick);
        stroke("blue");
        line(this.x, this.y, this.x, this.y + 10);

    }
   
}