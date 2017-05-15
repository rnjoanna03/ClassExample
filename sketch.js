function setup() {
    createCanvas(640,360);
}

function draw() {
    background(100,150,100);
    
    fill(225,204,0);
    stroke(0,0,255);
    ellipse(150,200,50,50);
    
    stroke(0,0,255);
    fill(255, 204, 0);
    ellipse(150,202,10,10);
    
    stroke(0,0,255);
    ellipse(300,200,50,50);
    
    stroke(0,0,255);
    fill(255, 204, 0);
    ellipse(300,202,10,10); 
    
    stroke(100,100,100);
    line(225,220,225, 250);
    line(225,250,230,255);
    
    
    fill(0,0,0);
    rect(100,20,10,150);
    
    fill(0,100,100);
    rect(150,20,10,125);
    
    fill(0,100,0);
    rect(200,20,10,100);
    
    fill(0,0,100);
    rect(250,20,10,100);
    
    fill(200,100,0);
    rect(300,20,10,125);
    
    fill(180,150,20);
    rect(350,20,10,150);
    
    fill(250,200,180)
    arc(225, 300, 80, 80, 0, PI+QUARTER_PI, CHORD);
    arc(225, 335, 40, 40, PI+QUARTER_PI, TWO_PI);
}