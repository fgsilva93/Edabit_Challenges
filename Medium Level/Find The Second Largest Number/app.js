function secondLargest(arr) {
    let arraySorted = arr.sort((a,b) => a - b)
    let arrayReversed = arraySorted.reverse()
	return arrayReversed[1]
}

//Short simple verison:
// function secondLargest(arr) {
//   return arr.sort((a, b) => b - a)[1]
// }

//testing variables:
console.log(secondLargest([10, 40, 30, 20, 50]))
console.log(secondLargest([25, 143, 89, 13, 105]))
console.log(secondLargest([54, 23, 11, 17, 10]))
console.log(secondLargest([513, 211, 131, 417, 11]))
console.log(secondLargest([63, 44, 11, 22, 33, 66, 65]))