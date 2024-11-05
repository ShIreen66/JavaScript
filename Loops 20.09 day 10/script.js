// Iterative Statements/Loops

// 1. Entry Control Loop (while -> iteration of count) (for loop -> )
// 2. Exit Control Loop (do while)


// 1. Loop Variable
// 2. Condition exp
// 3. Body of Loop
// 4. Updation Exp

// syntax
// var name
// while (condition) {
// Loop Statement
// Updation


// ex of while loop
let i = 1

while(i => 10){
    console.log(i);
    i++
}

console.log("End of loop");


// ex of do while loop
// let i = 1

// do {
//     console.log(i);
//     i++;
// } while (i <= 10);

// // console.log("End of loop");

// // for while
// // for (let i = 1; i <=10; i++) {
// //     console.log(i);
// // }

// // break and continue 

// // ex of continue
// // for (let i = 1; i <= 10; i++) {
// //     if (i % 2 !=0) {
// //         // odd
// //         continue; // go to updation expression and skip the below code
// //     }
// //     console.log(i);
// // }


// // ex of break
// for (let i = 1; i <= 10; i++) {
//     if (i === 6) {
//         console.log("loop breaked");
//         break;
//     }
//     console.log(i);
// }