function getNewNum(n) {
	return Math.floor(Math.random() * n);
}

function getshuffle(n) {
	//why doesn't javascript have a built-in shufffle array function?
	var a = Array(n).fill().map((x,i)=>i);
	var b = [];
	var c = [];
	var ht = 0;
	shuffle_turns = (getNewNum(5)+1)*10;
	for (i=0; i<shuffle_turns; i++){
		b = [];
		c = [];
		for (j=0; j<n; j++){
			ht = getNewNum(2);
			popped = a.pop();
			if (ht == 0){
				b.push(popped);
			} else {
				c.push(popped);
			}
		} //for: length of deck, n
		a = b.concat(c);	
	}  //for: shuffle_turns
	return a;
}
