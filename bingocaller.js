//globals continued below functions include list of polynomials
var q = 0; //number of questions called
var shufflepoly = getshuffle(30);

function onhover(){
	document.getElementById("donebtn").style.opacity = "1";
}

function nohover(){
	document.getElementById("donebtn").style.opacity = ".6";
}

function nextpolynomial(){
	if (q>=polynomials.length){
		document.getElementById("caller_window").innerHTML = "Thanks for Playing!";
		document.getElementById("nextbtn").className = "gobutton disabled";
	} else {
		document.getElementById("caller_window").innerHTML = polynomials[shufflepoly[q]];
		//document.getElementById("caller_window").innerHTML = polynomials[q];
	}
	if (q == 0){
		//document.getElementById("caller_window").className ="polynomialdiv";
		document.getElementById("nextbtn").innerHTML = "Next Polynomial";
	}
	if (q<polynomials.length){
		currentp = document.createElement('div');
		currentp.innerHTML = polynomials[shufflepoly[q]];
		currentp.className = "calledpolys";
		document.getElementById("called_p").appendChild(currentp);
	}
	q = q + 1; //last line of function
} //function nextpolynomial

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}


var polynomials = new Array(
"16x"+"2".sup()+" + 24x + 9",
"8x"+"2".sup()+" + 10x + 3",
"12x"+"2".sup()+"+30x+12",
"2x"+"2".sup()+" \u2012 20x \u2012 48",
"x"+"2".sup()+" \u2012 2x \u2012 120",
"5x"+"2".sup()+" + 54x + 40",
"5x"+"2".sup()+" \u2012 16x \u2012 16",
"x"+"2".sup()+" + 2x \u2012 24",
"5x"+"2".sup()+" + 31x + 6",
"20x"+"2".sup()+" \u2012 x \u2012 1",
"32x"+"2".sup()+" \u2012 2",
"12x"+"2".sup()+" \u2012 5x \u2012 2",
"6x"+"2".sup()+" + 5x \u2012 6",
"2x"+"2".sup()+" + 3x \u2012 2xy \u2012 3y",
"x"+"2".sup()+" \u2012 y"+"2".sup(),
"4x"+"2".sup()+" + 4xy \u2012 5x \u2012 5y",
"16x"+"2".sup()+" + 60x \u2012 100",
"x"+"2".sup()+" \u2012 3x \u2012 40",
"x"+"2".sup()+" \u2012 15x + 56",
"2x"+"2".sup()+" \u2012 8x \u2012 42",
"x"+"2".sup()+" \u2012 9",
"2x"+"2".sup()+" \u2012 x \u2012 15",
"4x"+"2".sup()+" \u2012 25",
"4x"+"2".sup()+" \u2012 16x + 15",
"2x"+"2".sup()+" + 5x \u2012 12",
"x"+"2".sup()+" \u2012 x \u2012 20",
"x"+"2".sup()+" \u2012 11x + 30",
"x"+"2".sup()+" + 14x \u2012 120",
"x"+"2".sup()+" + 21x + 20",
"x"+"2".sup()+" + 2x + 1"
);