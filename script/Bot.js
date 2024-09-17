class Bot{
    constructor(c, keyboard){
        this.c = c;
        this.keyboard = keyboard;
        this.x=5;
        this.largura=20;
        this.altura=100;
        this.y=(this.c.canvas.height/2)-(this.altura/2);
        this.vel=5;
        
        this.raquete2 = new Image ();
        this.raquete2.width = 20;
        this.raquete2.height = 100;
        this.raquete2.src = "assests/raquete2.png";
        this.raquete2.addEventListener('load', () => {
            this.draw()
        });

    }
    management(){
        
        if (this.keyboard.cima) 
            if (this.y > 0 && this.y - 5)
                this.y-=this.vel;
        if (this.keyboard.baixo)
            if (this.y < this.c.canvas.height-this.altura - 5) 
                this.y+=this.vel;
    }
    draw(){
        this.management();
        this.c.fillStyle = "black";
        this.c.drawImage(this.raquete2, this.x, this.y, this.raquete2.width, this.raquete2.height);

    }
}