const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

//var bg ="sunset12.png";

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
   // bg=(1200,700,200,300);
    
}

function draw(){

    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    text("Time:"+hour,50,50);
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response =await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
 //  console.log(response);
    //change the data in JSON format
    var getJSON= await response.json();
   // console.log(getJSON.datetime);
    var dateTime=getJSON.datetime;
    // write code slice the datetime
  var hour=dateTime.slice(11,13);

  console.log(hour);
    // add conditions to change the background images from sunrise to sunset
    if(hour>=05&&hour<=07){
    bg="sunrise1.png";
    }

    if(hour>=07&&hour<=08){
        bg="sunrise2.png";
    }

    if(hour>=08&&hour<=09){
        bg="sunrise3.png";
    }

    if(hour>=9&&hour<=10){
        bg="sunrise4.png";
    }

    if(hour>=10&&hour<=11){
        bg="sunrise5.png";
    }

    if(hour>=11&&hour<=13){
        bg="sunrise6.png";
    }

    if(hour>=13&&hour<=15){
        bg="sunset7.png";
    }

    if(hour>=15&&hour<=16){
        bg="sunset8.png";
    }
    
    if(hour>=16&&hour<=17){
        bg="sunset9.png";
    }

    if(hour>=17&&hour<=19){
        bg="sunset10.png";
    }

    if(hour>=19&&hour<=22){
        bg="sunset11.png";
    }

    if(hour>=22&&hour<=5){
        bg="sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg=loadImage(bg);
  

}

