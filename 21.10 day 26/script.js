// document - "document" is the pre defined object given by the js which holds the connected html file (index.html file)
// console.log(document);
// id - document.getElementById()
// class - document.getElementsByClassName()
// tag - document.getElementsByTagName()
// document.querySelector() - to select the first/single Element
// document.querySelectorAll() - to select the multiple Elements 

const heading = document.querySelector("h1");//selecting tags / value
console.log(heading.innerHTML);//reading value
heading.innerHTML = "good bye"; //changing value
heading.style.color = "green"; //changing style
// heading.remove(); //removing element