// data ko function se bahar lana hai to used only return otherwise not given return

// function getname() {
//     let s = "John Doe";
//     return s;
// }

// let res = getname();
// console.log(res);

// method(object) -> class me use kar rahe h hai to mehtod 
// function -> not compulsory to return anything
// method -> compulsory to return something 
// function getname() {
//     console.log("john");
// }

// getname(); // our function call (non parametrized function call)
// console.log("js call to function"); // js function call (parametrized function call)

// function getname(n) { // parameter(s)
//     console.log("n");
// }
// getname("johan doe"); // arguments/argument
// console.log("dsjkdsksahjsadh");

// function getname(name, city) {
//     console.log(name, city);
// }

// let n = "john doe";
// let c = "new york";
// getname(n, c);

// example of return call
function getsum(n, m) {
    const sum = n + m;
    return sum;
}

let res = getsum(2, 3);
let multiple = 5;
console.log(res * multiple);