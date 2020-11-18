function countTrue(arr) {
    return arr.filter((arr) => arr).length
}

//longer version: 

// function countTrue(arr) {
//     let count = 0 

//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == true) {
//             count++; 
//         }
//     }

//     return count;
// }

//testing variables: 

console.log(countTrue([true, false, false, true, false]))
console.log(countTrue([false, false, false, false]))
console.log(countTrue([]))
console.log(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]))
console.log(countTrue([true, false, true, true, false, false, false, false, false]))
console.log(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]))
console.log(countTrue([true, false, true, true, true, false, true, true, false, false]))
console.log(countTrue([false, false, false, false, true, false, true, false, true, false, false]))
console.log(countTrue([true, false, false, false, true, false, false, true, false, false, false]))
console.log(countTrue([true, true, false, true, false, false, false, false, true, false]))
console.log(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]))
console.log(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]))
console.log(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]))