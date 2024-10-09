// JSON-> JavaScript Object Notation
//  array of objects are called json 
// nosql -> mern me use hota hai
let arr = [{}, {}, {}]; //array of object
console.log(typeof arr);

let resstr = JSON.stringify(arr); // json -> string
console.log(typeof resstr);

let resjson = JSON.parse(resstr); // string -> json
console.log(typeof resjson);

// strings 
// creating string
// let s = "Hello";

// Read String
// console.log(s);
// console.log(s[0]);
// console.log(s.at(-1));

// string can be reassigned but not replaced
// s = "hiii";
// console.log(s);

// s = null;
// console.log(s);

// string traversing
let s = "Hello-World";
// traversing
for (let i = 0; i < s.length;i++){
console.log(i, s[i]);
}

// methods
let str = "Hello-World"

// string methods
// let x = str.slice(3, 5);
// s+"hiii"
// let x = str.concat("-hii");
// let x = str.replaceAll(o, x);
// let x = str.toLocalUpperCase();
// let x = str.toLocallowerCase();
// let x = str.trim();
// console.log(x);