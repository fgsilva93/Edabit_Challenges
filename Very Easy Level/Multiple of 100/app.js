function divisible(num) {
	if(num % 100 === 0) {
        return true;
    }
    else {
        return false; 
    }
}

// testing variables

console.log(divisible(1));
console.log(divisible(100));
console.log(divisible(1000));
console.log(divisible(111000));
console.log(divisible(-1));
console.log(divisible(0));
console.log(divisible(-100));