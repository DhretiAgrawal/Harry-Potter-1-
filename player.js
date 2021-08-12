class Player {
    constructor(x,y,width,height){
        this.harry=createSprite(x,y,width,height);
        this.harry.shapeColor="black";  
        
    }

    //Movement with arrow keys
    move(){
        if(keyDown(UP_ARROW)){
            this.harry.y = this.harry.y - 10;
        }
        if(keyDown(DOWN_ARROW)){
            this.harry.y = this.harry.y + 10;
        }
        if(keyDown(RIGHT_ARROW)){
            this.harry.x = this.harry.x + 10;
        }
        if(keyDown(LEFT_ARROW)){
            this.harry.x = this.harry.x - 10;
        }
        
    }
}

