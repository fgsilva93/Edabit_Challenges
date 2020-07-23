function and(a, b) {
	if(a && b === true) {
		return true;
	}
	else {
		return false; 
	}
};

//testing variables 

console.log(and(true, true));
console.log(and(true, false));
console.log(and(false, true));
console.log(and(false, false));