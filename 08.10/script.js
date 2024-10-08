// includes some every reduce

// let arr = [12, 34, 56, 78, 90, 98, 67, 54, 32, 10];
// console.log(arr.includes(34));
// console.log(arr.includes(34, 5));

// some example
// let someresult = arr.some((value, index) => {
//     return value % 2 == 0;
// });
// console.log(someresult)

// every result
// let everyresult = arr.every((value, index) => {
//     return value % 2 == 0;
// });
// console.log(everyresult)

// reduce
// let s = arr.reduce((accumulator, current) => {
//     console.log(accumulator, current);
//     return accumulator + current;
// }, 0);
// console.log(s);

// Destruction
let arr = [1, 2, 3, 4];
// let [one, two, three, four] = arr;
let [, , , three] = arr;
console.log(three);


// object
let obj = {
    name:"john",
    age: 12,
    city: "Bhopal",
};
const { city, age, name } = obj;
console.log(city, age);
