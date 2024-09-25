
// Day 1
//words vs keywords
// "Ishika" / 'Ishika' / "12" -> words (strings)
// var for if forEach -> reserved keywords
// printing method / function
// keyword() -> method / function call
// console.log() -> to fill many data
// console.error()
// conole.warn()
//  console.log("hello world");
//  console.error("hello world");
//  conole.warn("hello world");


// Day 2

//  variables
// var varname = value/data/info
// id -> word
// var id ="sdfhksdfkhklsdfahh";
// id -> reserved keyword(variable)

// console.log(id);

// naming convensions of the variables
// 1. must start with small/capital/_and must not start with number.
// 2. variable name must not include any special character other than_
// 3. variable name must a single in a single word
// 4. we can use 
//      young_age -> snake_case_pattern
        // teenAgeOther -> camelCasepattern
        // OldAgeOther -> PascalCasePattern
        // Kabab-case-pattern xxxxxxxxxxxxxx
// 5. variable name must be relevent to it's value and unique
// var age = "sheryians coding school"

// Day 3

// data types
// 1.number -> NaN, Infinity, -infinity
// string -> single inverted comma ya double inverted ya terminal string hai
// jab bhi string ke sath kuchhh joda jayega to uska datatypes string ban jayega
// ex of string -> var address
// ex number
// var age = 12;
// console.log(age);
// console.log(typeof age);
// 2. Null
// 3. String
// 4. Boolean
// 5. object
// 6. symbol
// strings
// var age = "city" + "MP"; //concatination + ke symbol ko kehte hai
// console.log(address);
// console.log(typeof address);
// types of strings 
// 1. single line string -> '' /""
// 2. multi line -> '' (template literals)
// var details = 'Name
// age
// Address';
// console.log (details)
// console.log (typeof details)
// multiline strings 
// var username ="Ritesh";
// var age ="20";
// console.log("Username is", username, "and the Age is", age);
// console.log('Username is ${username} and the Age us ${age}');
// boolean 
// ex -> false, true;
// var isVailid = false;
// console.log(isVailid);
// console.log(typeof isVailid)
// object-> Null (iska use pehle se bhare object ko null ya khali karne ke liye kiya jata hai) 
// var age = 23;
// console.log(age);
// console.log(typeof age);
// age = null;
// console.log(age);
// console.log(typeof age);
// undefined -> undefined
// var a = 12;
// var a; //declaration
// console.log(a);
// console.log(typeof a);

// a = 12; //initialization
// console.log(a);

// a = 45;//reinitialization or updation
// console.log(a);


// Symbol ->prepared for int.....

// Day 4

// operators 
// input output scope let var const 
// output
// console.log("hello");
// alert("hello");

// input

// var n = prompt("Enter Number");
// var m = prompt("Enter Number");
// console.log(n + m);
// console.log(typeof n); 

// type conversion
// explicit type conversion ->developer does that
// var n = Number(prompt("Enter Number"));
// var m = +prompt("Enter Number");
// console.log(n + m);
// console.log(typeof n); 

// implicit type conversion -> Computer (PL) does that
// 12 + "hello" = "12hello"

// // confirm -> always give boolean type of data
// var res = confirm("Are you vailid customer?");
// console.log(res);

// Day 5

// scope

// var age = 34; //global variable

// {
//         let username = "Johan"; //local variable
//         username = "Ritesh";

//         const PI = 3.14; //local variable
//         PI = "indore";
//         console.log(username);
//         console.log(city);
// }

// what is JIT in JS ?
// Just In Type

// Day 6

// operators
// 1. Assignment Operators
// 2. Arithmetic Operators
// urinary operators -> ++increment, --decrement
// binary operators -> +, -, *, /, %, **
// shorthand operators -> +=, -=, *=, /=, %=, **=

// let n = 2;
// let m = 11;
// let sum = n + m;
// let subs = n - m;
// let multi = n * m;
// let div = n / m;
// console.log('The sum of ${n} and ${m} is ${sum}');
// console.log('The subs of ${n} and ${m} is ${subs}');
// console.log('The multi of ${n} and ${m} is ${multi}');
// console.log('The div of ${n} and ${m} is ${div}');

// modulodivision operators -> used for reminder
// let modulodivision = n % m; // 2 % 11
// console.log(modulodivision);

// // 
// let exp = m ** n;
// console.log(exp);

// let n = 10;
// console.log(n);

// // n = n + 5;

// n +=5;
// console.log(n);

// Day 7
// arithmetic opeartors + - * / % **
//shorthand operators += -= *= /= %= **=

// increment decrement operators ++ --

//  let a = 12;
// //  12 + 12 + 13 + 12 + 12 = 61
//  let x = a++ + --a + ++a + --a + a++;
//  console.log(res);
//  console.log(a);

//  comparison operators == != > < >= <= === !==
//  comparison operator always provide the boolean result (true/false)

// let a = 10;
// let b = "10";
// let res = a === b;
// console.log(res);
// == me true rahega bcz only number 
// === me false no. ke sath data type bhi

// let a = "Hi";
// let b = "HI";
// let res = a < b; // e > i
// console.log(res);
// when we compare strings with comparision operators, only the first non equal character is 
// comapred a/c to it's ASCII value

// logical operator && || ! result(a/c to the data which is logically compared)
// comparison b/w boolean values
// true && trye && true = true
// true && false && true = false
// false || true || false = true
// false || false || false = false

// falcy values = 0, '', null, undefined, NaN, false

// 0.1 && -10 && null = null
// -1&& -0.5 && true && null && 12 = null
// undefined || NaN || -0.8 || 12 = -0.8

// Day 8


// control flow

// 1. conditional statements if else switch
// 2. iterative staments

// conditional statements
// syntax
// simple if
// if (condition == true) {
//         // true statement
// }

// // simple if else 
// if (condition == true) {
//         // true statements
// } else {
//         // do something else
// }

// // ladder / multiple if-else
// if(condition == true) {
//         // true statements
// } else if (condition == true) {
//         // true statements
// } else if (condition == true) {
//         // true statements
// } else if (condition == true) {
//         // do else
// }

// // nested if else 
// if (condition) {
//         if(condition == true) {

//         } else {
//                 (condition == true)
//         } else {
//                 if else
//         }
// }


// example
// let n = 12;
// simple if 
// if (n > 0) {
//         console.log("number is positive")
// }

// // simple if else

// if (n > 0) {
//         console.log("positive")
// } else {
//         console.log("negative")
// }

// let n = 0;

// ladder/multiple if else
// if (n > 0) {
//         console.log("positive");
// } else if (n < 0) {
//         console.log("negative");
// } else {
//         console.log("zero");
// }

// nested if else
// let n= -5;
// if (n > 0) {
//                 console.log("positive");
//                 if (n % 2 == 0) {
//                         console.log("even");
//                 } else {
//                         console.log("odd");
//                 }
//         } else if (n < 0) { 
//                 if (n % 2 == 0) {
//                         console.log("even");
//                 } else {
//                         console.log("odd");
//                 }
//                 console.log("negative");
//         } else {
//                 console.log("zero");
//         }

// day 09

// during logical operator condition

// let n = 0;

// if (n > 0 && n % 2 == 0) {
//         console.log("positive even");
// } else if (n > 0 && n % 2 != 0) {
//         console.log("positive odd");
// }else if (n < 0) {
//         console.log("negative");
// }else {
//         console.log ("zero")
// }


// fall throw or switch 

// let n = 1;

// switch (n) {
//         case 1:
//                 console.log("hello");
//                 break;
//         case 2:
//                 console.log("hiii");
//                 break;
//                 default:
//                         console.log("deafault");
// }

// write a program to take name and age from the user and 
// a. print on console.
// b. check if user eligible for vote or not and give the suitable message on console.
// c. also if user not eligible for vote print the exact year left to made him eligible for vote.

const username = prompt("enter name");
const age = +prompt("enter age");

console.log(username, age);



// // ternary opt

// // syntax
// // const varname = condition ? true statement : false statement

// const result =
// age >= 18
// ? "eligible for vote"
// :'sorry! '

if (age >=18) {
        console.log("elligible")
} else {
        console.log("Not Eligible");
}


// write a programme to take 3 numeric inputs from the user
// a. check if all three numbers are equal or any two are equal or no one is equal

// const a = prompt ("")

// prep insta -> website
// search prepinsta 100 queustion