// array methods
// foreach vs map -> traversing -> mutable method = jab origional data me change kar sakte hai
//  filter

let arr = [12, 13, 14, 15, 16, 17 ,18 ,19, 20]

// traversing
// for (const element of arr) {
//     console.log(element);
// }

// call back function ->
// arr. forEach(function (element,index) {});
// console.log(arr);
// arr.forEach((element, index) => {
//     // operation
//     arr[index] = element * 2;
// });

// console.log(arr);

// let arrcopy = arr.map((element,index) => {
//     return element * 2;
// });
// console.log(arr);
// console.log(arrcopy);

// for each origional data me change karta hai jabki map alag se ek array bana deta hai
//  The filter() method creates a new array containing elements that satisfy a specified condition
// The filter() method skips empty elements and does not change the original array.
// const filterdArray = arr.filter((element, index) => {
//     return element % 2 != 0;
// });

// console.log(arr);
// console.log(filterdArray);

//  filter -> acc to condition multiple element deta hai
// filter -> find (acc. to condition value de deta hai find only single elelment deta)
// const filterdArray = arr.find((element, index) => {
//     return element % 2 != 0;
// });

// console.log(arr);
// console.log(filterdArray);

//  agar value hai to uska index nahi hai to -1 or agar multiple hote to first wale ka output
const filterdArray = arr.findIndex((element, index) => {
    return element % 2 != 0;
});

console.log(arr);
console.log(filterdArray);