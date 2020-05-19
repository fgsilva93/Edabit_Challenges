function charCount(myChar, str) {
	var arr =str.split("");
    return arr.filter(x => x === myChar).length;
    // or return [...str].filter(x => x===myChar).length;
}

//testing variables
console.log(charCount('a', 'edabit'))
console.log(charCount('b', 'big fat bubble'))
console.log(charCount('c', 'Chamber of secrets'))
console.log(charCount('f', 'frank and his friends have offered five foxes for sale'))
console.log(charCount('x', 'edabit'))
console.log(charCount('a', 'Adam and Eve bit the apple and found a snake'))
console.log(charCount('s', 'sssssssssssssssssssssssss'))
console.log(charCount('7', '10795426697'))