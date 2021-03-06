function maxTotal(nums) {
    return nums
    .sort((a,b) => a - b)
    .slice(5, 10)
    .reduce((accumulator, currentValue) => {
        return accumulator + currentValue; 
    }, 0)
}

// testing variables 
console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]))
console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100]))
console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(maxTotal([12, 8, 73, 1, 24, 11, 88, 39, 2, -47]))
console.log(maxTotal([48, 90, 42, -12, 1, -14, -36, -37, -9, -4]))
console.log(maxTotal([-99, -38, -13, -84, 66, 13, -13, -16, 14, 15]))
console.log(maxTotal([60, -70, -53, -4, 53, -66, 10, -7, 56, 89]))
console.log(maxTotal([88, 45, 76, 34, -42, 10, -22, 85, -52, 49]))
console.log(maxTotal([70, -74, 20, -56, -15, 93, -75, 98, 46, 36]))
console.log(maxTotal([-20, -61, 50, 52, 60, -70, 0, 69, 91, -36]))
console.log(maxTotal([31, 75, 78, 76, -51, -8, 17, -23, 34, 100]))
console.log(maxTotal([-79, 85, 55, -5, -86, -72, 31, -68, 13, 1]))
console.log(maxTotal([-93, -79, -26, 53, 74, -55, 68, -36, -6, -94]))
console.log(maxTotal([-100, 21, 22, 65, 19, 2, -11, 3, 24, 73]))
console.log(maxTotal([92, -43, 80, 43, 23, -41, -19, 90, 78, 31]))
console.log(maxTotal([-71, -11, -89, 60, 71, -62, 54, 11, 73, 49]))
console.log(maxTotal([61, -55, 60, -30, 27, 61, -68, -1, -36, -27]))
console.log(maxTotal([67, -44, 40, -75, 27, 71, -59, 4, 45, -91]))
console.log(maxTotal([27, -61, 81, -28, 5, 45, -81, 37, 30, 36]))
console.log(maxTotal([42, 34, -11, -41, -73, 53, 52, 34, 63, -15]))
console.log(maxTotal([-89, 51, -24, -12, 26, 52, -98, -14, -99, 85]))
console.log(maxTotal([-77, 24, 83, -67, -5, 58, -64, 21, 86, 41]))
console.log(maxTotal([-69, 74, -78, 56, -9, -28, 39, 54, -74, 30]))
console.log(maxTotal([70, -25, 78, -58, -49, -42, -77, -52, 93, -37]))
console.log(maxTotal([-30, -29, 32, -60, 84, -13, 67, -77, 94, 64]))
console.log(maxTotal([-54, 7, 18, 83, -45, 68, 0, 78, 55, -30]))
console.log(maxTotal([-81, -51, 63, 94, 22, -91, -75, 75, 28, -97]))
console.log(maxTotal([69, -34, -94, -50, -94, -38, -73, 33, 39, -99]))
console.log(maxTotal([-60, -69, -55, -69, 5, 14, 97, 59, 93, 15]))
console.log(maxTotal([48, 77, -31, 74, 39, 8, -22, 24, 87, 10]))
console.log(maxTotal([56, 24, 46, 28, 61, 38, -32, 85, -36, -80]))
console.log(maxTotal([-73, 72, 94, -5, 72, 0, 30, -93, -24, -10]))
console.log(maxTotal([-48, 75, 31, -31, 29, 74, -56, -14, 7, -55]))
console.log(maxTotal([-11, -92, 89, -23, -67, 45, 89, 10, -28, 76]))
console.log(maxTotal([37, -9, -27, -71, 62, 25, -55, 50, -56, -41]))
console.log(maxTotal([45, -34, 48, 19, 92, 73, -72, 67, 92, -32]))
console.log(maxTotal([-26, -1, -37, 25, 4, -42, -44, -59, 83, 27]))
console.log(maxTotal([-44, 92, -98, -8, -88, -65, 56, 66, -64, 35]))
console.log(maxTotal([45, -12, -73, 1, -6, -75, 94, 41, -7, -67]))
console.log(maxTotal([68, -27, -25, -54, -65, -20, 97, 61, 69, 31]))
console.log(maxTotal([11, -14, -9, -32, 79, -62, 81, -78, 62, -91]))
console.log(maxTotal([-6, -82, 41, -44, 12, -10, 48, 84, 2, -18]))
console.log(maxTotal([8, -4, 19, -81, 26, -10, -96, 47, 50, 64]))
console.log(maxTotal([1, -98, 69, -46, -88, 12, 23, 85, 6, -18]))
console.log(maxTotal([65, 46, 62, 62, 0, -79, -35, -53, 43, 73]))
console.log(maxTotal([38, 8, 48, -1, -52, -22, 12, -61, -90, 9]))
console.log(maxTotal([-48, 74, 81, -66, 33, -89, 16, 13, -82, 37]))
console.log(maxTotal([-88, 3, 30, -16, 57, 17, -46, 26, -33, -55]))
console.log(maxTotal([4, -8, 28, 100, 71, -10, 7, 36, -57, 18]))
console.log(maxTotal([-41, 73, 25, -55, 78, -76, -77, -80, 70, 78]))
console.log(maxTotal([3, -84, -65, -38, 80, -57, -75, -42, 87, -23]))
console.log(maxTotal([-92, -18, 28, -63, 99, -80, -89, 89, -95, -27]))
console.log(maxTotal([32, -100, 29, -81, 14, 19, 23, -10, 55, -57]))
