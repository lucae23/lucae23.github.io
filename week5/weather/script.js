function checkAge() {
  let myAge = document.querySelector("#myAge");
  let body = document.querySelector("body");
  console.log(myAge);
  let age = myAge.value;
  console.log("Age value is", age);
  if (age < 4) {
    console.log("You are a baby");
  } else if (age >= 4 && age < 13) {
    console.log("You are a young child");
  } else if (age >= 13 && age < 20) {
    console.log("Your are a teen");
  } else if (age >= 20 && age < 25) {
    console.log("You are a young adult");
    body.style.backroundColor = "crimson";
  } else if (age >= 25) {
    console.log("You are olddddd");
  }
}
