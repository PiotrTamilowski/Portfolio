const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// If user opens this page for the first time during this session or if he/she clicks on logo button, this code below will hide canvas for 5 seconds
if (sessionStorage.getItem("isFirstLoad") == null){
    setTimeout(() => {
        canvas.style.visibility = "visible";
    }, 5000)
} else {
    canvas.style.visibility = "visible";
}



ctx.moveTo(0,0);
let x = 0;
let y = 0;
const hexList = [];

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousemove", (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
})

class Hex{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.color = "#00000000";
    }
    draw(){
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        this.x += 50;
        ctx.lineTo(this.x, this.y);
        this.x = this.x + 35
        this.y = this.y + 50
        ctx.lineTo(this.x,this.y);
        this.x = this.x - 35
        this.y = this.y + 50
        ctx.lineTo(this.x,this.y);
        this.x -= 50;
        ctx.lineTo(this.x,this.y);
        this.x = this.x - 35
        this.y = this.y - 50
        ctx.lineTo(this.x,this.y);
        this.x = this.x + 35
        this.y = this.y - 50
        ctx.lineTo(this.x,this.y);
        ctx.closePath();
        //ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
    update(){
        if(mouse.x - this.x < 150 && mouse.x - this.x > -150 && mouse.y - this.y < 150 && mouse.y - this.y > -150){
            this.color = "#00000050";
           
        } else {
             this.color = "#00000000";
        }
        this.draw();
        
    }
}



function init(){
    

    while(x < window.innerWidth + 200 && y < window.innerHeight){
    
        let hex = new Hex(x, y);
        hexList.push(hex);
        hex.draw()
        x += 170;
        if(x >= window.innerWidth + 200){
            y+= 185;
            //y+= 100;
            x = 0;
        }
        
    }

    x = 85;
    y = 50;

    while(x < window.innerWidth + 200 && y < window.innerHeight){
    
        let hex = new Hex(x, y);
        hexList.push(hex);
        hex.draw()
        x += 170;
        if(x >= window.innerWidth + 200){
            y+= 185;
            //y+= 100;
            x = 85;
        }
        
    }

    

}

function animate(){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    hexList.forEach(item => {
        item.update();
    })
    
}


init();
animate();







