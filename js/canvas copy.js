const canvas = document.querySelector("canvas");
        const ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        ctx.moveTo(0,0);
        let x = 0;
        let y = 0;

        while(x < window.innerWidth + 200 && y < window.innerHeight){
            
            ctx.moveTo(x,y);
            x += 50;
            ctx.lineTo(x,y);
            x = x + 35
            y = y + 50
            ctx.lineTo(x,y);
            x = x - 35
            y = y + 50
            ctx.lineTo(x,y);
            x -= 50;
            ctx.lineTo(x,y);
            x = x - 35
            y = y - 50
            ctx.lineTo(x,y);
            x = x + 35
            y = y - 50
            ctx.lineTo(x,y);
            x += 170;
            if(x >= window.innerWidth + 200){
                y+= 185;
                x = 0;
            }
            console.log(x)
            console.log(window.innerWidth)
           
        }

        x = 85;
        y = 50;

        while(x < window.innerWidth + 200 && y < window.innerHeight){
            
            ctx.moveTo(x,y);
            x += 50;
            ctx.lineTo(x,y);
            x = x + 35
            y = y + 50
            ctx.lineTo(x,y);
            x = x - 35
            y = y + 50
            ctx.lineTo(x,y);
            x -= 50;
            ctx.lineTo(x,y);
            x = x - 35
            y = y - 50
            ctx.lineTo(x,y);
            x = x + 35
            y = y - 50
            ctx.lineTo(x,y);
            x += 170;
            if(x >= window.innerWidth + 200){
                y+= 185;
                x = 85;
            }
            console.log(x)
            console.log(window.innerWidth)
           
        }

        



        ctx.stroke();