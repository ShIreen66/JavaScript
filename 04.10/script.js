// array
// aesi cheeze jo squre bracket me likhi ho comma se separate karke
// heterogenes (number, boolean, null, etc)
// creating array
let arr = [12, 34, 56, 78, 90, 98, 76, 54, 32, 10];
// console.log(arr);

// accessing array 
// console.log(arr[0]);
// console.log(arr.flat(-3));

// updating array 
// arr[1] = 12345;
// let res1 = arr.push(1, 2, 3); // returns length of array
// let res2 = arr.unshift(1, 2, 3); // returns length of array

// // Deleting array elements
// let res1 = arr.pop();
// let res2 = arr.shift();
// let res3 = arr.splice(3, 2);

// console.log(arr);
// console.log(res1, res2, res3);


// traversing array
for (const element of arr) {
    console.log(element);
}

// length of an array
console.log(arr.length);

// arr.length -> length is property
// arr. pop() -> pop is method 