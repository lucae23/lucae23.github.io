function checkWeather() {
  let myTemp = document.querySelector("#myTemp");
  let body = document.querySelector("body");
  console.log(myTemp);
  let temp = myTemp.value;
  console.log("Temp value is", temp);
  if (temp < 10) {
    console.log("it is freexing");
  } else if (temp >= 10 && temp < 20) {
    console.log("It is pleasant weather");
  } else if (temp >= 20 && temp < 35) {
    console.log("It is nice and sunny");
  } else if (temp >= 35) {
    console.log("It is burning hot");
    body.style.backroundColor = "crimson";
  }
}
