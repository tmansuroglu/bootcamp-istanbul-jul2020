
const square = document.getElementById("square-button");
 const solutions = document.getElementById("solution");
   
square.addEventListener('click', function (e){
const inputVal = document.getElementById("square-input").value;
solutions.innerText = squareNumber (inputVal)

})

 
function squareNumber (num) {
console.log(`The result of squaring the number ${num} is ${num ** 2}.`)
  return num ** 2;
  
}

const half = document.getElementById("half-button");


half.addEventListener('click', function (e){
const inputVal = document.getElementById("half-input").value;
solutions.innerText = halfNumber (inputVal)

})


function halfNumber (num) {
console.log(`Half of ${num} is ${num / 2}.`)
  return num / 2;
  
}

const percent = document.getElementById("percent-button");


percent.addEventListener('click', function (e){
const inputVal1 = document.getElementById("percent1-input").value;
const inputVal2 = document.getElementById("percent2-input").value;

solutions.innerText = percentOf(inputVal1,inputVal2)

})

 
function percentOf (num1 , num2) {
console.log(`${num1} is ${num1 / num2*100}% of ${num2}.`)
  return  num1 / num2;
  
}

