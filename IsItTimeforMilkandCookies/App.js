function timeForMilkAndCookies(date) {
	return date.getMonth() === 11 && date.getDate() === 24 ? true : false;
}

//testing:
console.log(timeForMilkAndCookies(new Date(2013, 11, 24)))
console.log(timeForMilkAndCookies(new Date(3000, 11, 24)))
console.log(timeForMilkAndCookies(new Date(2154, 11, 11)))
console.log(timeForMilkAndCookies(new Date(2010, 11, 2)))
console.log(timeForMilkAndCookies(new Date(1980, 9, 24)))