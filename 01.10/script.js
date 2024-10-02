// Hoisting
// kisi bhi cheeze ko uske banne se pehle use karenge to use hositing kehte h
// compiler value ko declare kar leta hai
// temporal death zone (tdz) - var is partially hoisted hai isliye wo undefined show karte hai or let and const me non partial hota hai isliye ise tdz bolte hai var me conslole undefined and let and const me initialization me phasa rehata hai jise tdz kehte hai var me compilor ke through hoisted ho jata hai jabki let and const me only declare hota hai
// hoisting -> function are fully hoisted, var are partially hoisted and let and const are temporal death zone

// example
add(1, 2);

function add(a, b) {
    console.log(a + b);
}

// ultimately var is variable and const are variable show they will shown is own result

add(1, 2);

var add = (a, b) => {
    console.log(a + b);
};

// 1. variable with var keyword shows partial hoisting
// 2. variable with let keyword shows no hoisting (TDZ)
// 3. function with function keyword shows full hoisting
// 4. function with arrow function shows no hoisting (TDZ) or depening on the way it is declared

// immutable -> aesi value jise change karne per data copy ho jaye (copy karne ke baad bhi change na ho)
// mutable -> array and objects (copy karne ke baad bhi change ho raha hai)
var a = [1, 2, 3];
a = b 