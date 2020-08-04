function getOnlyEvens(nums) {
	return nums.filter((nums,index) => nums % 2 == 0 && index % 2 === 0);
}

//test variables

console.log(getOnlyEvens([1, 3, 2, 6, 4, 8]));
console.log(getOnlyEvens([0, 1, 2, 3, 4]));
console.log(getOnlyEvens([1, 2, 3, 4, 5]));
console.log(getOnlyEvens([37, 26, 18, 42, 2, 30]));
console.log(getOnlyEvens([49, 41, 30, 44, 26, 0, 5]));
console.log(getOnlyEvens([47, 47, 12, 3, 48]));
console.log(getOnlyEvens([30, 26, 0, 13, 20, 38, 50, 2]));
console.log(getOnlyEvens([34, 21, 38, 28, 13, 8, 26, 29, 24, 5]));
console.log(getOnlyEvens([47, 31, 24, 37, 29, 41, 31, 49, 4, 24]));
console.log(getOnlyEvens([45, 47, 20, 49]));
console.log(getOnlyEvens([20, 14, 10, 32, 28, 6, 49, 5, 46]));
console.log(getOnlyEvens([39, 45, 5]));
console.log(getOnlyEvens([45, 3, 50, 15, 49]));
console.log(getOnlyEvens([45, 25, 10, 47, 24, 30, 28, 48]));
console.log(getOnlyEvens([10, 16, 9, 40, 28, 21, 37, 4, 45]));
console.log(getOnlyEvens([31, 25, 19, 49, 50, 22]));
console.log(getOnlyEvens([38, 36, 8, 34, 8, 45, 4, 45, 2, 9]));
console.log(getOnlyEvens([38, 21, 50, 14]));
console.log(getOnlyEvens([24, 16, 32, 14, 32, 42, 13, 33, 13, 39]));
console.log(getOnlyEvens([38, 24, 4, 49, 5, 33, 1, 10, 3]));
console.log(getOnlyEvens([46]));
console.log(getOnlyEvens([13, 6, 12, 23, 31, 14, 2]));
console.log(getOnlyEvens([7, 1, 34, 14, 26, 3, 7, 7]));
console.log(getOnlyEvens([31, 11, 26, 19, 45, 12]));
console.log(getOnlyEvens([22]));
console.log(getOnlyEvens([29, 11]));
console.log(getOnlyEvens([6, 6, 37, 10, 4]));
console.log(getOnlyEvens([6, 46, 12, 47, 49, 26, 40, 28, 38]));
console.log(getOnlyEvens([31]), []);
console.log(getOnlyEvens([28, 44, 4, 31, 30, 46, 37]));
console.log(getOnlyEvens([24]));
console.log(getOnlyEvens([23, 41, 49, 5, 0, 46, 15, 15]));
console.log(getOnlyEvens([44, 39, 15]));