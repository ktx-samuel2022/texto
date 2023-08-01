function setup(){
    canvas = createCanvas(550,350);
    canvas.position(windowWidth/2, windowHeight/2.5)
    video = createCapture(VIDEO);
    video.size(550,350);
    video.position(0, windowHeight/2.5)
}