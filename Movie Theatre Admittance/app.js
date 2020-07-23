function acceptIntoMovie(age, isSupervised) {
	if(age >= 15 || isSupervised == true) {
		return true;
	}
	else {
		return false;
	}
};

//testing variables

console.log(acceptIntoMovie(14, true));
console.log(acceptIntoMovie(15, true));
console.log(acceptIntoMovie(16, true));
console.log(acceptIntoMovie(14, false));
console.log(acceptIntoMovie(15, false));
console.log(acceptIntoMovie(16, false));
console.log(acceptIntoMovie(14.99999, true));
console.log(acceptIntoMovie(14.99999, false));