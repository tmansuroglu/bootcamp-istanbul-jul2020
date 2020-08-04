
function squareNumber(a){
  console.log(`The result of squaring the number ${a} is ${a**2}.`);
  return a**2
}

function halfNumber(a) {
  console.log(`Half of ${a} is ${a/2}.`)
  return a/2
}

function percentOf(fraction, whole) {
  console.log(`${fraction} is ${(fraction/whole*100).toFixed(2)}% of ${whole}`);
  return (fraction/whole*100).toFixed(2);
}

function areaOfCircle(r){
  const PI = 3.14;
  const area = ((r**2)*PI).toFixed(2);
  console.log(`The area for a circle with radius ${r} is ${area}`);
  return area;
}

function all(number){
  const resultHalf = halfNumber(number);
  const resultSquare = squareNumber(resultHalf);
  const resultArea = areaOfCircle(resultSquare);
  const percentageArea = percentOf(resultArea,resultSquare);
}

//all(10);

const solution = document.getElementById("solution");

const squareInput = document.querySelector("#square-input");
const halfInput = document.querySelector("#half-input");
const percentInput1 = document.getElementById("percent1-input");
const percentInput2 = document.getElementById("percent2-input");
const radiusInput = document.getElementById("area-input")
/*
//Keyup event
squareInput.addEventListener("keyup", event => {
  solution.innerHTML += `<br><br>The result of squaring the number ${squareInput.value} is ${squareNumber(squareInput.value)}`;
})

halfInput.addEventListener("keyup", function(){
  solution.innerHTML += `<br><br> Half of ${halfInput.value} is ${halfNumber(halfInput.value)}.`
})

percentInput2.addEventListener("keyup", function() {
  console.log(percentInput1.value)
  console.log(percentInput2.value)
  solution.innerHTML += `<br><br> ${percentInput1.value} is ${percentOf(percentInput1.value, percentInput2.value)}% of ${percentInput2.value}`;
})

radiusInput.addEventListener("keyup", function(){
  solution.innerHTML += `<br><br> The area for a circle with radius ${radiusInput.value} is ${areaOfCircle(radiusInput.value)}`;
})
*/

//Click event

const halfButton = document.getElementById("half-button");
const percentButton = document.getElementById("percent-button");
const radiusButton = document.getElementById("area-button");
const squareButton = document.getElementById("square-button");

squareButton.addEventListener("click", function() {
  solution.innerHTML += `<br><br>The result of squaring the number ${squareInput.value} is ${squareNumber(squareInput.value)}`;
    document.getElementById("square-input").value = "";
});

halfButton.addEventListener("click", function(){
  solution.innerHTML += `<br><br> Half of ${halfInput.value} is ${halfNumber(halfInput.value)}.`
  document.querySelector("#half-input").value = "";
});

percentButton.addEventListener("click", function() {
  solution.innerHTML += `<br><br> ${percentInput1.value} is ${percentOf(percentInput1.value, percentInput2.value)}% of ${percentInput2.value}`;
  document.getElementById("percent1-input").value = "";
  document.getElementById("percent2-input").value = "";
})

radiusButton.addEventListener("click", function(){
  solution.innerHTML += `<br><br> The area for a circle with radius ${radiusInput.value} is ${areaOfCircle(radiusInput.value)}`;
  document.getElementById("area-input").value = "";
})
