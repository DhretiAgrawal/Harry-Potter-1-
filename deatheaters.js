class DeathEaters {
    constructor(x,y){
        this.deatheater=createSprite(x,y,30,35);
        this.deatheater.shapeColor="blue";  
        deatheaterG.add(this.deatheater);
    }

    move(){
        this.deatheater.bounceOff(wallG);
    }
}

function createDeathEaters(){
    deatheater1=new DeathEaters(80,350)
    deatheater1.deatheater.velocityX= -1;
    
    deatheater2=new DeathEaters(200,540)
    deatheater2.deatheater.velocityX= -1;

    deatheater3=new DeathEaters(780,280)
    deatheater3.deatheater.velocityY= -1;

    deatheater4=new DeathEaters(1000,550)
    deatheater4.deatheater.velocityX= 1;

    deatheater5=new DeathEaters(1014,110)
    deatheater5.deatheater.velocityX= 1;
}

function moveDeathEaters(){
    deatheater1.move();
    deatheater2.move();
    deatheater3.move();
    deatheater4.move();
    deatheater5.move();
}