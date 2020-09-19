function isTrue(relation) {
	if (eval(relation.replace(/=/,'===')) == true) {
		return true; 
	}
	else {
		return false; 
	}
};

//testing avariables 

console.log(isTrue("8<7"));
console.log(isTrue("15>4"));
console.log(isTrue("6>6"));
console.log(isTrue("10<10"));
console.log(isTrue("10<9"));
console.log(isTrue("5>6"));
console.log(isTrue("2=2"));
console.log(isTrue("5=13"));
console.log(isTrue("15=137"));
console.log(isTrue("101=101"));