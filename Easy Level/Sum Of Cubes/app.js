function sumOfCubes(nums) {
    let arrayCubing = nums.map(x => x ** 3)
    let sumOfArray = arrayCubing.reduce((x,y) => x + y, 0)
    return sumOfArray
    //return mapping
}

//console.log(sumOfCubes([1,2,3]))

//testing variables:

console.log(sumOfCubes([1, 5, 9]))
console.log(sumOfCubes([3, 4, 5]))
console.log(sumOfCubes([1, 1, 1]))
console.log(sumOfCubes([2]), 8)
console.log(sumOfCubes([5, 1, 2]))
console.log(sumOfCubes([32]))
console.log(sumOfCubes([5, 9, 4, 4, 9]))
console.log(sumOfCubes([0, 1, 2]))
console.log(sumOfCubes([]))