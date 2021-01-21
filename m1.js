song="";
function preload(){
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(500,449);
    canvas.position(525,240); 
    capture = createCapture(VIDEO);
    capture.hide();
}
function draw(){
    image(capture,0,0,500,449);
}
function play(){
    song.play();
}
