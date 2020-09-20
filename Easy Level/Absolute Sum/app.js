function getAbsSum(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + Math.abs(currentValue), 0);
}

//testing variables:
console.log(getAbsSum([2, -1, -3, 4, 8]));
console.log(getAbsSum([-1]), 1);
console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));
console.log(getAbsSum([8, 9, 10, 32, 101, -10]));
console.log(getAbsSum([500]));