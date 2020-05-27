function largestSwap(num) {
	if (num < parseFloat(num.toString().split('').reverse().join(''))) {
		return false;
	}
	else {
		return true;
	}
}


//testing variables
console.log(largestSwap(27))
console.log(largestSwap(43))
console.log(largestSwap(14))
console.log(largestSwap(53))
console.log(largestSwap(99))