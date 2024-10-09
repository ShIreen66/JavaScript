// 1.WAP to accept two integers from user and display the sum of them.
// let a= +prompt("enter first no.");
// let b= +prompt("enter second no.");
// console.log(a+b);

// 2.wap to swap two numbers using third variable
// let n=1;
// let m=3;
// console.log("before swapping:");
// console.log("n: ",n);
// console.log("m: ",m);
// let temp = n; //1
// n = m; //3
// m = temp; //1
// console.log("after swapping:");
// console.log("n: ",n);
// console.log("m: ",m);

// 2.1.wap to swap two numbers wihtout using third variable
// let n = 1;
// let m = 3;

// console.log("before swapping:");
// console.log("n: ",n);
// console.log("m: ",m);
// n = n + m;//4
// m = n + m;//1
// n = n - m;//3

// console.log("after swapping:");
// console.log("n: ",n);
// console.log("m: ",m);


// 3. wap to accept the length and width for the rectangle and display it's area and parameter.

// let length = +prompt("enter the length od the rectangle: ");
// let width = +prompt("enter the length od the rectangle: ");
// let area = length * width;
// let parameter = 2*(length+width);
// // console.log('area of rectangle is ${area} and parameter is ${parameter)')
// console.log(`the area of the rectangle is ${area}`);
// console.log(`the parameter of the rectangle is ${parameter}`);


// 4. accept the 3 side of the triangle and find the area with herons formula
// calculate the area of a triangle using herons formula

let a =12;
let b =11;
let c=13;

let s=(a+b+c) / 2;
let area = Math.sqrt(s * (s-a) * (s-b) * (s-c));
console.log(area.toFixed(2));

// 5. find the surface area of the sphere 

Math.PI