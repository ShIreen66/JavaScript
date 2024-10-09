// this keyword in object

// this represent by the parent r(eplace name on keyword/synonym) [ex- mother, father]

// const profile = {
//     name: "Alex",
//     getName: function () {
//         console.log(this.name);
//     },
// };

// profile.getName();
// isme normal function use karna hota hai

// pure function and impure function 

// function which doen'nt use the data outside of the function is called pure function
// function which uses the data outside of the function is calle impure function

// let d = "hello";

// function greet (v) {
//     console.log(v);
// }
// greet(d)

// difference b/w pure function and impure 
// normal function v/s arrow function in js
function greet() {
    console.log("Normal function");
}

greet();
console.log("---------------------------------------------------------");

const greetArrow = () => {
    console.log(this); // xxxx
    // console.log(arguments);
    console.log(globalThis);
    console.log("Arrow Function");
};

greetArrow();
