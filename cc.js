 var maindisplay = document.getElementById("display");

var display = "";

function getNumber(num){
    display +=num;
    maindisplay.value = display;
}
function answer(){
    maindisplay.value = eval(display);
}
let clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click",()=>
{
    maindisplay.value="";
    display="";
    });
