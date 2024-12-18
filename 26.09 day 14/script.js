// default parameter


function dets(firstname, batchcode = "MERN12"){
    console.log(firstname, batchcode);
}

dets("John1");
dets("John1");
dets("John2", "B28");
dets("John1", "MERN12");

//1. default parameter must be the last parameter of the function
//2. there should only 1 default parameter in the function

// rest (operator) parameter (...h)
function hobbies(name, ...h) {
    console.log(name, h);
}
hobbies("john", "swimming");
hobbies("john", "swimming", "reading");
hobbies("john");
hobbies("john", "swimming", "reading", "singing");
//1. rest operator must be the last parameter in the function
//2. there must be only one rest parameter in the function

// fat arrow function
// const greet()
//  fat arrow function syntax
//  const funcname = () => {
//  return "hello";
//  };

 // non parameterize fat arrow function
//  const greet = () => "hello";
//  let res = greet();


 // parameterized fat arrow function
 const sum = (a, b) => a + b;
 const res = sum(2, 3);
 console.log(res); 