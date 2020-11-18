function firstLast(arr) {
	return [arr[0], arr[arr.length - 1]]
}

//testing variables: 

console.log(firstLast([5, 10, 15, 20, 25]))
console.log(firstLast(["edabit", 13, null, false, true]))
console.log(firstLast([undefined, 4, "6", "hello", null]))
console.log(firstLast(["hello", "edabit", "dot", "com"]))
console.log(firstLast([3, 2, 1]))
console.log(firstLast(["one", "two"]))
console.log(firstLast([false, false, true, false, false, true, false]))