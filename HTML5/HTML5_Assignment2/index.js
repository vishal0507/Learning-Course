const shape=document.getElementById("canvas");
const ct=shape.getContext('2d');
var main=document.getElementById('content');
var start=350;
var end=410;
var y=300;
var x=400;
var delay=300;
function Shape(x,y)
{ 
    ct.fillStyle="white";
    setTimeout(()=>{
        ct.fillRect(x, y,40,40)
    },delay);
}
function Logo(){
    for(var i=0;i<3;i++){
        for(var j=0;j<3;j++){ 
            main.style.zoom=1.1;
            Shape(x,y); 
            delay+=300;
            x-=50;
        }
        y-=50;
        x=400;
    }
}
setTimeout(()=>{ct.clearRect(400,200,40,40);
    ct.translate(400,200);
    ct.rotate(15*Math.PI / 100);
    ct.fillRect(10,-30,40,40);
    ct.resetTransform();
},3100);

setTimeout(function(){
    ct.font="45px Zen Dots";
    ct.fillText("Syncfusion" , 450, 300);

},3000);
setTimeout(()=>{
    main.style.zoom=0.6;
},3300);
const data='Deliver innovation with ease';
var i=0;
function displayText(){
    ct.font="30px Arial";
    ct.fillText(data[i],start,end);
    i++;
    start+=19;
    if(i<data.length){
        setTimeout(displayText,120);

    }
}
setTimeout(displayText,3600);
