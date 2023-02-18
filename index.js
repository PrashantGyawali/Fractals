const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let startlength='40px';
let anglebetwnbranches=Math.PI/3;
ctx.strokeStyle='black';
ctx.lineWidth='5';


function fractal(x,y,angle,length,branching)
{
    ctx.beginPath();
    ctx.moveTo(x,y);
    let finalx=x+length*Math.cos(angle);
    let finaly=y+length*Math.sin(angle);
    ctx.lineTo(finalx,finaly);
    ctx.stroke();
    branching--;


if(branching>0)  
//Note: fractal in real would have to be never ending but for infinite branching(or even 1000 ) with this method we would quickly reach (Error:Maximum callstack size exceeded)
   { 
    fractal(finalx,finaly,angle+(anglebetwnbranches/2),length/2,branching); //length of next branch is half 
      //angle between branches is 60 degree, but for 2 branches each branch deviates 30 deg from the angle of parent branch
      //each branch emerge out from end of parent branch
    fractal(finalx,finaly,(angle-(anglebetwnbranches/2)),length/2,branching)
   }
}


fractal(0,0,Math.PI/4,300,10); //Math.Pi/4=> initial branch is inclined at 45 deg from horizontal