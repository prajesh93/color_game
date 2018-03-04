var numSquare=6;
var colors=[];
var pickedColor;
var messageDisp=document.getElementById("message");
var square=document.querySelectorAll(".square");
var reset1=document.getElementById("reset");
var disp=document.getElementById("disp");
var btn=document.querySelectorAll(".mode");

init();

function init(){
	mode();
	setupSquare();
	reset();
}
// Set the square properties so that if it is clicked, we can decide if it was correct or not
function setupSquare(){
	for(var i=0;i<square.length;i++){
	square[i].addEventListener("click",function(){

		var curr=this.style.backgroundColor;
		if(curr===pickedColor){
			messageDisp.textContent="Correct";	
			changeColors(curr);
			reset1.textContent="Play Again?";
			document.querySelector("h1").style.backgroundColor=curr;
		}
		else{
			messageDisp.textContent="Fail";	
			this.style.backgroundColor="#232323";	
		}
	})
	}
}

// Find if the easy mode is selected or the hard mode and set the number of squares to be displayed on screen accordingly
function mode(){
	for(var i=0;i<btn.length;i++){
	btn[i].addEventListener("click",function(){
	btn[0].classList.remove("selected");
	btn[1].classList.remove("selected");
	this.classList.add("selected");	
	if(this.textContent==="Easy")
		numSquare=3;
	else
		numSquare=6;
	reset();

	})
}

}

// Reset the game
function reset(){
	reset1.textContent="New Colors"
	colors=randomColor(numSquare);
	pickedColor=pickColor();
	disp.textContent=pickedColor;
	document.querySelector("h1").style.backgroundColor="steelblue";
	for(var i=0;i<square.length;i++){
	if(colors[i]){
			square[i].style.display="block";
			square[i].style.backgroundColor=colors[i];
		}else{
			square[i].style.display="none";
		}
	}
	messageDisp.textContent="";



}

reset1.addEventListener("click",function(){
	reset();
})




function changeColors(color){

	for(var i=0;i<square.length;i++){
		square[i].style.backgroundColor=color;
	}

}


// Randomly select the color for the game
function pickColor(){
	var num = Math.floor(Math.random() * colors.length );
	return colors[num];
}

// Create a list of colors which will be dislayed in the squares 
function randomColor(num){
	var a=[];
	for(var i=0;i<num;i++){
	var red = Math.floor(Math.random() * 255 );
	var green = Math.floor(Math.random() * 255 );
	var blue = Math.floor(Math.random() * 255 );
	a[i]="rgb("+red+", "+green+", "+blue+")";
	}
	return a;
}