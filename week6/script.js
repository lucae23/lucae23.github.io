// let a = 20;
// let b = 30;
// function add(a, b) {
//   let total = a + b;
//   console.log(total);
//   return total;
// }

// // let c = a + b;
// let c = add(a, b);
// console.log(c);

// // c = 40 + 56;
// // console.log(c);

// // a = 45;
// // b = 6;
// // c = a + b;
// // console.log(c);

// c = add(a, a,);
// console.log(c);

const header = document.querySelector("header");
console.log(header);
console.log(header.textContent);
const topHeading = document.querySelector("h1");
let course = "Interactive Media";

const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", handleClick);
const myCat = document.querySelector("#my-cat");
console.log(myCat);
myCat.addEventListener("mouseenter", addMe);
myCat.addEventListener("mouseleave", removeMe);

function addMe() {
  myCat.classList.add("round");
}

function removeMe() {
  myCat.classList.remove("round");
}

function handleClick() {
  console.log("Hey did you just click me?");
  myCat.classList.toggle("round");
}

// header.innerHTML += `<h2> This is ${course} <h2>`;
// // console.log(topHeading);
// // console.log(topHeading.textContent);
// topHeading.textContent = "this is new...";
// topHeading.style.color = "red";

// const allParas = document.querySelectorAll("p");
// console.log(allParas);
// // console.log(myFirstPara.textContent);
// for (let i = 0; i < allParas.length; i++) {
//   console.log(allParas[i].textContent);
// }
// // i is the variable,

// const myFirstSub = document.querySelector("#first-sub");
// // console.log(myFirstSub);
