// const heading = document.querySelector("h1");
// const button = document.querySelector("button");
// const body = document.querySelector("body");

// button.addEventListener("click", () => {
//     heading.innerHTML = "hello world!";
//     heading.style.color = "red";
//     const p = document.createElement("p");
//     p.innerHTML = "I am a Paragraph!";
    // body.appendChild(p); // user for last child an element
//     button.remove();
// })

const form = document.querySelector("form");
const ul = document.querySelector("ul");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(e.target.username.value);
    const input = document.querySelector("input");
    ul.innerHTML += '<li>${inner.value}</li>';
    input.value = "";
});