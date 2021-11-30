let posX;
let posY;

let velX;
let velY;

let radius;
let circleClr;

//	UI
let sliderHue;
let clickCounter;

function setup(){
	let myCanvas = createCanvas(800, 600);
	myCanvas.parent('canvasParent');

	colorMode(HSB, 360, 100, 100);
	sliderHue = createSlider(0, 360, 0, 15); //<--change those values
	sliderHue.parent('canvasUI');
	sliderHue.style('width', '100px');

	posX = width/2;
	posY = height/2;

	velX = 4;
	velY = 3;

	radius = 80;
	circleClr = color(0, 80, 100);

	clickCounter = 0;

}

function draw(){
	background(0, 0, 0); //<--change those values

	noFill();
	stroke(228, 60, 100);
	strokeWeight(5);
	rect(5, 5, 70, 30);

	textSize(24);
	strokeWeight(2);
	fill(228, 60, 100);
	text(clickCounter, 33, 29);

	noStroke();
	circleClr = color(sliderHue.value(), 40, 100); //<--change those values
	fill(circleClr);
	circle(posX, posY, radius * 2);
	if (posX + radius >= width || posX - radius <= 0){
		velX = velX * -1;
	}

	if (posY + radius >= height || posY - radius <= 0){
		velY = velY * -1;
	}

	posX += velX;
	posY += velY;
} // end of draw

function mouseReleased(){
	if(dist(mouseX, mouseY, posX, posY) < radius){
		//circleClr = color(255, 80, 100);
		clickCounter++;
		if(velX > 0){
            velX++;
        }
        else{
            velX--;
        }
        if(velY > 0){
            velY++;
        }
        else{
            velY--;
        }
	}

	else {
		//circleClr = color(0, 80, 100);
	}
}
