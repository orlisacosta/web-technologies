
/////INITIATE_PART1____________________MAPGENERATOR


var mapx = 800;
var mapy = 500;
var locations = [];

function setup() {
  createCanvas(mapx, mapy);
  pg1 = createGraphics(mapx, mapy);
  pg2 = createGraphics(mapx, mapy);
  pg3 = createGraphics(mapx, mapy);

	noLoop();

}

	function draw() {

} 

function mousePressed() {

   var xposition = event.clientX
   var yposition = event.clientY

if (xposition > (mapx+10) && xposition < (mapx+120) && yposition > (mapy-440) && yposition < (mapy-410)) {

	pg1.clear();
	pg2.clear();
	pg3.clear();
	draw_initial_map (20, 20, 50);
	draw_water_over (20, 20, 5);
	draw_snow (20, 20, 3);

	console.log(xposition, yposition)
}

if (xposition > (mapx+10) && xposition < (mapx+120) && yposition > (mapy-390) && yposition < (mapy-360)) {

save('myMap.png');

}

}


///FUNCTIONS


function draw_initial_map (size, canvasfraction, land_probability){
var drawcount = 0;
var land = Math.floor(Math.random() * land_probability);
var ammount = (mapx / canvasfraction) * (mapy / canvasfraction);
var xlimit = mapx;
var xValue = canvasfraction;
var yValue = canvasfraction;

let land_color = color(10, 225, 10, 255)
let water_color = color(10, 20, 220, 255)


for (let i = 0; i < ammount; i++) {

		if (xValue > mapx * 0.15) {
			land = Math.floor(Math.random() * land_probability*10);
		}
		if (xValue < mapx * 0.85) {
			land = Math.floor(Math.random() * land_probability*10);
		}
		if (yValue > mapy * 0.15) {
			land = Math.floor(Math.random() * land_probability*10);
		}
		if (yValue < mapy * 0.85) {
			land = Math.floor(Math.random() * land_probability*10);
		}

	if (land > 2) {

		pg1.fill(land_color);
		
	}
	else{

		pg1.fill(water_color);
	}

pg1.rect(xValue, yValue, size, size);

	land = Math.floor(Math.random() * land_probability);

	xValue = xValue + canvasfraction;
	if (xValue > xlimit) {
	yValue = yValue + canvasfraction;
	xValue = canvasfraction;
}
}
image(pg1, 50, 50, mapx, mapy);
}

function draw_water_over (size, canvasfraction, water_probability){
var drawcount = 0;
var water = Math.floor(Math.random() * water_probability);
var ammount = (mapx / canvasfraction) * (mapy / canvasfraction);
var xlimit = mapx;
var xValue = canvasfraction;
var yValue = canvasfraction;

let no_color = color(10, 225, 10, 0)
let water_color = color(10, 20, 220, 255)


for (let i = 0; i < ammount; i++) {


		if (xValue < mapx * 0.15) {
			water = Math.floor(Math.random() * water_probability*2);
		}
		if (xValue > mapx * 0.85) {
			water = Math.floor(Math.random() * water_probability*2);
		}
		if (yValue < mapy * 0.15) {
			water = Math.floor(Math.random() * water_probability*2);
		}
		if (yValue > mapy * 0.85) {
			water = Math.floor(Math.random() * water_probability*2);
		}


	if (water > 2) {

		pg2.fill(water_color);
	}
	else{
		pg2.fill(no_color);
		
	}

pg2.rect(xValue, yValue, size, size);

	water = Math.floor(Math.random() * water_probability);

	xValue = xValue + canvasfraction;
	if (xValue > xlimit) {
	yValue = yValue + canvasfraction;
	xValue = canvasfraction;
}
}
image(pg2, 0, 0, mapx, mapy);
}


function draw_snow (size, canvasfraction, snow_probability){
var drawcount = 0;
var snow = Math.floor(Math.random() * snow_probability);
var ammount = (mapx / canvasfraction) * (mapy / canvasfraction);
var xlimit = mapx;
var xValue = canvasfraction;
var yValue = canvasfraction;

let no_color = color(10, 225, 10, 0)
let snow_color = color(255, 255, 255, 255)


for (let i = 0; i < ammount; i++) {


		if (xValue > mapx * 0.15) {
			snow = Math.floor(Math.random() * snow_probability * 2);
		}
		if (xValue < mapx * 0.85) {
			snow = Math.floor(Math.random() * snow_probability * 2);
		}


if (yValue < mapy * 0.15 || yValue > mapy * 0.85) {


	if (snow >= 3) {

		pg3.fill(snow_color);
		
	}
	else{
		pg3.fill(no_color);
		
	}
}


pg3.rect(xValue, yValue, size, size);



	snow = Math.floor(Math.random() * snow_probability);

	xValue = xValue + canvasfraction;
	if (xValue > xlimit) {
	yValue = yValue + canvasfraction;
	xValue = canvasfraction;
}
}
image(pg3, 0, 0, mapx, mapy);
}








/////FINALIZE_PART1____________________MAPGENERATOR
