// asynchrinous code -> aesa code jo (ex web api) dom, promisses, async await, 
// Synchronous means happening at the same time, while asynchronous means happening at different times or not in real time

// settimeout
console.log(1);

setTimeout(() => {
    console.log(2);
}, 5000);

console.log(3);

// setinterval

let count = 1;

const x = setInterval(() => {
    if (count == 10) {
        clearInterval(x);
    }

    console.log(count); // count stopped due to clearInterval
    count += 1;
}, 1000);

setInterval(() => {
    console.log("hello");
})


// xxxxxxxxxxxxxxxxxxx kal xxxxxxxxxxxxxxxxxxxxx
// promises (handles error of async code)
// creating promise

const p = new Promise((resolve, reject) => {
    // some code which is taking time ro run
    resolve("")
})