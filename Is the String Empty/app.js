function isEmpty(s) {
	if(s === "") {
		return true; 
	}
	else {
		return false; 
	}
};

//testing variables

console.log(isEmpty(""));
console.log(isEmpty(" "));
console.log(isEmpty("            "));
console.log(isEmpty("38215"));
console.log(isEmpty("afjabsdf"));
console.log(isEmpty("!?@&"));