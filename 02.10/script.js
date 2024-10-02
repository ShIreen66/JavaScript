// object
// create the object
// const profile = {
//     name: "Alex",
//     age: 20,
// };

// access the object
// console.log(profile.name);
// console.log(profile["name"]);
// console.log(typeof profile);
// console.log(profile);

// update existing property
// profile.age = 45;
// profile["name"] = "John";

// add new property
// profile.city = "New York";
// profile["country"] = "USA";

// delete property
// delete profile.name;
// console.log(profile);

// traversing an object -> matlab object per loop lagana jaha per key ek variable hota hai jisme koi bhi value de sakte hai
const profile1 = {
    name: "john",
    age: 20,
    isStudent: true,
    city: "New York",
};

// traversing an object with for in loop
// for (let key in profile) {
//     console.log(key, " => ", profile[key]);
// }

// key ="name"
// profile[key]

// copying an object
// const profile2 = object.assign({}, profile1);
const profile2 = { ...profile1 }; //spread operator
console.log(profile1);
console.log(profile2);
profile2.name = "John";
console.log(profile1);
console.log(profile2);