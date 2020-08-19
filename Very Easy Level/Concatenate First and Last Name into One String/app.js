function concatName(firstName, lastName) {
	return lastName.concat(', ',firstName);
}

// testing variables 
console.log(concatName("John", "Doe"))
console.log(concatName("First", "Last"))
console.log(concatName("A", "B"))

// In case someone is making odd assumptions about comma characters.
console.log(concatName(",", ","))