function fact(n) {
	return n == 0 ? 1 : n * fact(n-1);
}

//testing variables

console.log(fact(0));
console.log(fact(1));
console.log(fact(2));
console.log(fact(3));
console.log(fact(7));
console.log(fact(9));
console.log(fact(15));