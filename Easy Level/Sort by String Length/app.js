function sortByLength(arr) {
	return arr.sort((x,y) => x.length - y.length);
};

// testing variables
console.log(sortByLength(["a", "ccc", "dddd", "bb"]));
console.log(sortByLength(["apple", "pie", "shortcake"]));
console.log(sortByLength(["may", "april", "september", "august"]));
console.log(sortByLength(["maybe"]));
console.log(sortByLength([]));