const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var time
var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;
    time=0
}
function draw(){
    getBackgroundImg();
    if(backgroundImg)
        background(backgroundImg);
    
    Engine.update(engine);
    //noStroke();
    textSize(35)
    fill("black")
    if (time)
        text("Time  " + time, width-1100, 150);
    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    
    datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    time=datetime.slice(11,16);
    console.log(hour)
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }else if(hour>06 && hour<=08){
    bg = "sunrise2.png";
    }else if(hour>08 && hour<=10){
    bg = "sunrise3.png";
    }else if(hour>10 && hour<=11){
    bg = "sunrise4.png";
    }else if(hour>11 && hour<=13){
    bg = "sunrise5.png";
    }else if(hour>13 && hour<=15){
    bg = "sunrise6.png";
    }else if(hour>15 && hour<=17){
    bg = "sunset7.png";
    }else if(hour>17 && hour<=18){
    bg = "sunset8.png";
    }else if(hour>18 && hour<=19){
    bg = "sunset9.png";
    }else if(hour>19 && hour<=21){
    bg = "sunset10.png";
    }else if(hour>21 && hour<=23){
    bg = "sunset11.png";
    }else{
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
}
