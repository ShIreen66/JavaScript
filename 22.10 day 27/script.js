// addEventListener
// const button = document.querySelector("button");
// const heading = document.querySelector("h1");

// button.addEventListener("click", () =>{
//     console.log("clicked");
//     heading.innerHTML = "<strike>Hello, World!</strike>";
// });

// Task -> Create a card with html and css and add a button which shows follow and the heading which shows "Strange", when the user clidk on the
// button the text of the button changes to "Unfollow" and the heading changes to "Friends" and vice versa.

const button = document.querySelector("button");
const heading = document.querySelector("h1");

button.addEventListener("click", () =>{
    // console.log("Unfollow");
    if (heading.innerHTML === "Friends"){
        button.innerHTML = "follow"
    heading.innerHTML = "Strange"
    } else {
    button.innerHTML = "Unfollow"
    heading.innerHTML = "Friends"
}
});