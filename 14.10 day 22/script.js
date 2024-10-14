// error handling/acception handling

// try catch block is used to handle synchronous (code which runs lline by line) code errors
// try {
//     // open file
//     let a = 12
//     // console.log(a + b)
//     // close file
// } catch (error) {
//     console.log("Something went wrong from the developers end.")
//     // console.log(error.name)
//     // console.log(error.message)
// } finally {
//     console.log("kuchh bhi ho jaye ye block to chalega")
// }

// console.log("Hello World")

// custom error

try {
    let a = 12
    let b = 2
    if (a % b == 0) {
        throw new TypeError("even values not allowed!")
    } else {
        throw new TypeError("odd values not allowed!")
    }
} catch (error) {
    if (error.name == "TypeError") {
        console.log(error.message)
    }  else if (error.name == "EvalError") {
        console.log("odd not allowed!")
    } else {
        console.log("something went wrong")
    }
}
