class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0;
        this.accelration=0.2;
        this.friction=0.05;
        this.maxSpeed=3;
        this.angle=0;
        this.controls = new Controls();
    }

    update(){
        if(this.controls.forward){
            this.speed+=this.accelration;
        }

        if(this.controls.reverse){
            this.speed-=this.accelration;
        }

        this.speed>this.maxSpeed?this.speed=this.maxSpeed:null;
        -this.speed>this.maxSpeed?this.speed=-this.maxSpeed:null;
        this.speed>0?this.speed-=this.friction:null;
        this.speed<0?Math.min(this.speed+=this.friction,0):null;
        Math.abs(this.speed)<this.friction?this.speed=0:null;
        this.controls.right?this.angle-=0.03:null;
        this.controls.left?this.angle+=0.03:null;
        
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            - this.width/2,
            - this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}