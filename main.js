x=0;
y=0;
draw_circle="";
draw_rect="";
var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function setup(){
    canvas=createCanvas(900,600)
 }
 function start(){
    document.getElementById("status").innerHTML="System Is Listening Please Speak"
    recognition.start()
 }
 recognition.onresult=function(event){
    console.log(event)
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="The Speech Has Been Recognized As "+content
if(content=="circle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
   document.getElementById("status").innerHTML="Started Drawing a circle"
   draw_circle="set"

   if(content=="rectangle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML="Started Drawing a Rectangle"
    draw_rect="set"
   }
}




 }
 function draw(){
    if(draw_circle=="set"){
      radius=Math.floor(Math.random()*100)
      circle(x,y,radius)
      document.getElementById("status").innerHTML="Circle Is Drawn"
      draw_circle=""
    }  
    if (draw_rect=="set"){
      rect(x,y,70,50)
      document.getElementById("status").innerHTML="Rectangle Is Drawn"
      draw_rect=""
    }
  }
