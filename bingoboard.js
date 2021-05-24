var iconChoice = "fas fa-star"; //also seen in bingoboard.html
var iconChoice = "fas fa-certificate"; //have to pick one!
var p = new Array("4x + 3","2x + 1","x + 2","x - 12","x + 10","5x + 4","x - 4","x + 6","5x + 1","4x - 1","4x + 1","3x - 2","2x + 3","x - y","x + y","4x - 5","x + 5","x - 8","x - 7","x + 3","x - 3","2x + 5","2x - 5","2x - 3","x + 4","x - 5","x - 6","x + 20","x + 1");
var shuffle = getshuffle(p.length); //shuffles the placing of polynomials in the card
var tokens = 1;

function newCard() {
	//Starting loop through each square card
	for(var i=0; i < 24; i++) {  //<--always this code for loops. change in red
		setSquare(i);
	}
}

function setSquare(n) {
	var currSquare = "square"+n;
	var newNum;

	document.getElementById(currSquare).innerHTML = p[shuffle[n]];
	document.getElementById(currSquare).className = 'boxcontent';
}

function getNewNum(n) {
	return Math.floor(Math.random() * n);
}

function anotherCard() {
	for(var i=1; i<usedNums.length; i++) {
	usedNums[i] = false;
	}
	
	newCard();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  droptoken  = document.getElementById(data);
  ev.target.appendChild(droptoken);
  
  //generate a new token if needed
  if (!document.getElementById(data).classList.contains("dropped")){
  	//droptoken.style.color='pink'; //<--used this to test if statement functionality
 	var tokenbin = document.getElementById("tokenbox"); 
  	g = document.createElement('div');
  	tokens = tokens + 1;  
  	g.className="token";
  	g.id = "tokens"+tokens;
  	newicon = document.createElement('i');
  	newicon.className=iconChoice;
  	g.appendChild(newicon);
  	g.setAttribute("draggable","true");
  	g.setAttribute("ondragstart","drag(event)");
  	tokenbin.appendChild(g); 
  }

  //change class when initially dropped, helps determine if new token is needed
  droptoken.className="token dropped";
}