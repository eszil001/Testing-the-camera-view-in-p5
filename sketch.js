//setting up some variables
var boxSize = 40;
var distance = 100;
var halfDis;

var angle = 0;
var cameraPos = 1000;
var cameraZ = 10;
var img;

//setting up setup
function setup() {
    //the lights + material
	createCanvas(500, 500, WEBGL);
	ambientLight(100,120,200);
	pointLight(255, 255, 200, 255, 1000, -500, 0);
	ambientMaterial(100,100,140,255);
	halfDis = distance * (10-1)/2;
}

function draw() {
    //drawing the ball usin camera
	background(255);	
	camera(width/2, height/2 , cameraPos);
	if (cameraPos > 1000 || cameraPos < -50) {cameraZ = cameraZ*-1; }
	cameraPos = cameraPos+cameraZ;
    
	translate(width/2, height/2);
	angle = angle + 4;
	rotateY(angle/180);
	rotateX(angle/180);
    
	
	push();
	translate(10, 10, 10);
	sphere(200);
	pop();
    
    
		
}

