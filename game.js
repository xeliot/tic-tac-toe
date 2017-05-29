var button = []; //stores the canvases
for(var i=1; i<10; i++) button[i] = document.getElementById('canvas'+i);

var ctx = []; //stores the context of the canvases
for(var i=1; i<10; i++) ctx[i] = button[i].msGetInputContext;

var bDisabled = []; //stores the availability of the button
for(var i=1; i<10; i++) bDisabled[i] = false; //all buttons are enabled in the beginning

var isResult = false;
var content = [];

function loop(x)
{
    if(!bDisabled[x]){ //button does not currently contain X or O and therefore is enabled.
        bDisabled[x] = true; //button now contains something
        console.log("Button pressed.");
    }
}