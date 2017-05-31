var button = []; //stores the canvases
for(var i=1; i<10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = []; //stores the context of the canvases
for(var i=1; i<10; i++) ctx[i] = button[i].getContext('2d');

var bDisabled = []; //stores the availability of the button
for(var i=1; i<10; i++) bDisabled[i] = false; //all buttons are enabled in the beginning

var isResult = false;
var content = [];

var xTurn = true; //X:true O:false

function loop(x)
{
    if(!bDisabled[x]){ //button does not currently contain X or O and therefore is enabled.
        bDisabled[x] = true; //button now contains something
        //console.log("Button pressed.");
        
        button[x].style.webkitTransform = "rotateY(180deg)";
        
        if(xTurn){
            content[x] = 'x';

            setTimeout(function(){
                ctx[x].lineWidth = 3;
                ctx[x].beginPath();
                ctx[x].moveTo(10, 10);
                ctx[x].lineTo(90, 90);
                ctx[x].moveTo(90, 10);
                ctx[x].lineTo(10, 90);
                ctx[x].stroke();
                ctx[x].closePath();
            }, 300);
        }else{
            content[x] = 'o';

            setTimeOut(function(){
                ctx[x].lineWidth = 3;
                ctx[x].beginPath();
                ctx[x].arc(button[x].width/2, button[x].height/2, 45, 0, 2*Math.PI, false);
                ctx[x].stroke;
                ctx[x].closePath();
            }, 300);
        }

        xTurn = !xTurn;
    }
}