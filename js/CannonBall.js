class BalaCanhao {
    constructor(x, y) {
        var options = {
            isStatic: true
        };
        this.r = 30;
        this.body = Bodies.circle(x, y, this.r/2, options);
        this.image = loadImage("../assets/bala.png");
        World.add(world, this.body);
    }
    atirar() {
        //cria a variável angulo com o angulo do canhão - 28
     
        //multiplica por pi dividido por 180
      
        //usa esse angulo para criar um vetor
       
        //multiplica os elementos do vetor por 90/3.14
      
        //deixe o corpo móvel

        //dê velocidade ao corpo
        
    }

    display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.r, this.r);
        pop();
    }


}