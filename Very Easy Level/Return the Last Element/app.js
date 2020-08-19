function getLastItem(arr) {
	return arr.pop();
}

//testing variables

console.log(getLastItem(['Cat', 'Dog', 'Duck']));
console.log(getLastItem([1, 2, 3]));
console.log(getLastItem([undefined]))
console.log(getLastItem([true, false, false, true]));
console.log(getLastItem([7, 'String', false, undefined, null]));
console.log(getLastItem([false]));
console.log(getLastItem([undefined, undefined, undefined]));
console.log(getLastItem([1, 2, 3, 56, 87, 23, 65, 45]));
console.log(getLastItem(['Apple', 'Orange', undefined]));
console.log(getLastItem([true, false, 'Apple']));
console.log(getLastItem([null, null, null]));
console.log(getLastItem([1]));