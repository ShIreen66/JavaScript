const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
const close = document.querySelector(".close");
// console.log("clicked");

menu.addEventListener("click", () => {
    console.log("clicked");
    nav.style.height = "100%"
    menu.style.display = "none";
    close.style.display = "initial"
})

close.addEventListener("click", () => {
    console.log("clicked");
    nav.style.height = "10%"
    menu.style.display = "initial";
    close.style.display = "none"
})