/////////////VARIABLES
alert("Bubbles is a guessing game. 1 to 20 bubbles will appear on the screen. Each player will take a guess. The player whose guess is closest to the actual number is the winner.");
var numplayers = prompt("How many players?", "1");
var stringer = "0";
numplayers=numplayers+stringer;
var players = [];
var pcount=1;

var winner;

var rnumber = Math.floor(Math.random() * 20);
var numcircles = stringer + rnumber;
var canvas;
var ctx;

for (var i = 0; i < ((numplayers-1) + 1)/10; i++) {
	
	var player = {
	points:0,
	name:prompt("Player "+ pcount, "Pedro"),
	guess:prompt("What's your guess", "2"),
	}
	players.push(player);
	pcount = pcount+1;

}

var previousnumber = 20;
var distance;

for (var i = 0; i < ((numplayers-1) + 1)/10; i++) {
	
	distance = Math.abs(numcircles - players[i].guess);

	if (distance <= previousnumber){

		winner = players[i].name;
		winnerref = i;
		///console.log("-------------")
		///console.log("if statement is true");
		///console.log("distance: " + distance);
		///console.log("winner: " + winner);
		///console.log("winnerref: " + winnerref);
		///console.log("previousnumber: " + previousnumber);
	}
	previousnumber = distance;

		///console.log("-------------")
		///console.log("distance: " + distance);
		///console.log("winner: " + winner);
		///console.log("winnerref: " + winnerref);
		///console.log("previousnumber: " + previousnumber);
}



//// This will determine the starting position of the circles

var ww = window.innerWidth * 0.75;
var wh = window.innerHeight;

var colors = ["#DE86FC","#B686FC","#FC86B3","#76FCB1"];
var circles = [];
for (var i = 0; i < (numcircles + 1)/10; i++) {
	var ball = {
	x:random(50,ww-50),
	y:random(50,wh-50),
	r:50,
	c:colors[Math.floor(Math.random() * 4)],
	xd:0, //Total x-displacement (goes back to 0 every time the circle bounces off the wall)
	yd:0, //Total y-displacement (goes back to 0 every time the circle bounces off the wall)
	xTemp:0, ///Temporary values for x and y
	yTemp:0,
	xdisplace:random(0.5,1), /////This will determine how fast it moves on the x-axis. It is the amount of displacement per loop
	ydisplace:random(0.2,0.6)}  /////This will determine how fast it moves on the y-axis. It is the amount of displacement per loop
	circles.push(ball);


}

document.getElementById("winnertext").innerHTML = "WINNER: " + players[winnerref].name;

////////////CODE
console.log("Hey there its me!")
console.log("Refresh the page for new values")
setUpCanvas();

setInterval(
	function(){clear();drawcircle();},20);
 

////////////FUNCTIONS
function clear(){
	ctx.clearRect(0,0,ww,wh);
}

function drawcircle(){
	for (var i = 0; i < circles.length-1; i++) {
	ctx.beginPath();
	ctx.arc(circles[i].x+circles[i].xd,circles[i].y+circles[i].yd,circles[i].r,0,2*Math.PI);
	ctx.fillStyle=circles[i].c;
	ctx.fill();
	ctx.shadowColor = 'white';
	ctx.shadowOffsetX = 5;
	ctx.shadowOffsetY = 5;
	ctx.globalAlpha = 0.5;
	circles[i].xTemp=circles[i].x+circles[i].xd; //The variable xTemp holds the x-value temporarily. At this moment, xTemp holds the excact x-position of the circle.
	circles[i].yTemp=circles[i].y+circles[i].yd; //The variable yTemp holds the y-value temporarily. At this moment, xTemp holds the excact x-position of the circle.
		

///Making the circles bounce
		if (circles[i].xTemp>(ww-50)){   
		circles[i].x=circles[i].xTemp; // Transfering the temporary value to the actual value of x so it stays where it is before the change of direction
		circles[i].y=circles[i].yTemp; // Transfering the temporary value to the actual value of y so it stays where it is before the change of direction
		circles[i].xdisplace=circles[i].xdisplace*(-1); //The displacement on the x-axis changes direction
		circles[i].ydisplace=circles[i].ydisplace*(1);  //While the displacement on the y-axis remains the same
		circles[i].xd=0;
		circles[i].yd=0;
		circles[i].r=random(40,60);
		}
		if (circles[i].xTemp<50){ //Opposite wall
		circles[i].x=circles[i].xTemp;
		circles[i].y=circles[i].yTemp;
		circles[i].xdisplace=circles[i].xdisplace*(-1);
		circles[i].ydisplace=circles[i].ydisplace*(1);
		circles[i].xd=0;
		circles[i].yd=0;
		circles[i].r=random(40,60);
		}

		if (circles[i].yTemp>(wh-50)){  //Bottom wall
		circles[i].x=circles[i].xTemp;
		circles[i].y=circles[i].yTemp;
		circles[i].xdisplace=circles[i].xdisplace*(1);
		circles[i].ydisplace=circles[i].ydisplace*(-1);
		circles[i].xd=0;
		circles[i].yd=0;
		circles[i].r=random(40,60);
		}
		if (circles[i].yTemp<50){ //Top wall
		circles[i].x=circles[i].xTemp;
		circles[i].y=circles[i].yTemp;
		circles[i].xdisplace=circles[i].xdisplace*(1);
		circles[i].ydisplace=circles[i].ydisplace*(-1);
		circles[i].xd=0;
		circles[i].yd=0;
		circles[i].r=random(40,60);
		}

		circles[i].xd=circles[i].xd+circles[i].xdisplace;//Algebraic Sum of the x-displacement and the amount of displacement per loop
		circles[i].yd=circles[i].yd+circles[i].ydisplace;//Algebraic Sum of the y-displacement and the amount of displacement per loop

	}

}
function random(min,max){
	var a=Math.random()*max
	if (a<min){a=min+1}
		return a;
}
function setUpCanvas(){
	canvas = document.createElement("canvas");
	canvas.height=wh;
	canvas.width=ww;
	ctx = canvas.getContext("2d");
	document.getElementById("wrapper").appendChild(canvas);
}









