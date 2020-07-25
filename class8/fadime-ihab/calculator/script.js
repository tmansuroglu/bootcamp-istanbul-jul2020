/*
Write a function called squareNumber that will take one argument (a number), square that number, and return the result. It should also log a string like "The result of squaring the number 3 is 9."
 */


function squareNumber(num) {
  const total = (num * num);
  console.log(`The result of squaring the number ${num} is ${total}`);
  return total;
}

squareNumber(6);

/*
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result. It should also log a string like "Half of 5 is 2.5.".
*/

function halfNumber(num){
  const total = num/2;
  console.log(`Half of ${num} is ${total}`);
  return total; 
}

halfNumber(5);

/*
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result. It should also log a string like "2 is 50% of 4."
*/

function percentOf(num1,num2) {
  const totalPercLong = num1 / num2 * 100;
  const total = totalPercLong.toFixed(2);
  console.log(`${num1} is ${total}% of ${num2}`);
  return total
}


percentOf(3,7);

/*
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result. It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
*/

function areaOfCircle(radius){
 const area = Math.PI * (radius*radius);
 console.log(`The area for a circle with radius ${radius} is ${area}`);
  return area;
};

areaOfCircle(2)


let solution = document.querySelector("#solution");
//1
const squareButton = document.querySelector("#square-button");
const squareInput = document.querySelector("#square-input");

squareButton.addEventListener("click", function(e){
  const squareInputValue = squareInput.value;
  const total = squareNumber(squareInputValue);
  solution.innerText = total;
});

//2
const halfButton = document.querySelector("#half-button");
const halfInput = document.querySelector("#half-input");

halfButton.addEventListener("click", function(e){
  const halfInputValue = halfInput.value;
  const total = halfNumber(halfInputValue);
  solution.innerText = total;
});

//3
const percentButton = document.querySelector("#percent-button");
const fractionInput = document.querySelector("#percent1-input");
const wholeInput = document.querySelector("#percent2-input");


percentButton.addEventListener("click", function(e){
  const fractionInputValue = fractionInput.value;
  const wholeInputValue = wholeInput.value;
  const total = percentOf(fractionInputValue,wholeInputValue);
  solution.innerText = `${total}\u0025`;
});

//4
const areaButton = document.querySelector("#area-button");
const areaInput = document.querySelector("#area-input");
// double event listener
/*
["click", "keypress"].forEach(e=>{
  areaButton.addEventListener(e, handleEvent = (event) =>{
if (event.keyCode==13){
    const areaInputValue = areaInput.value;
  const area = areaOfCircle(areaInputValue);
  solution.innerText = area;
  }else {
  // if(e.keyCode==13){
    
    const areaInputValue = areaInput.value;
  const area = areaOfCircle(areaInputValue);
  solution.innerText = area;
  console.log(solution);
  // }
  }
})
});*/

areaButton.addEventListener("click", function(e){
  const areaInputValue = areaInput.value;
  const area = areaOfCircle(areaInputValue);
  solution.innerText = area;
});

//--------------

function masterFunction(num) {
  //first operation
  const halfOfNumber = halfNumber(num);
  console.log(halfOfNumber);
  //second operatin
  const squareOfNumber = squareNumber(halfOfNumber);
  console.log(squareOfNumber);
  //third operation
  const areaOfNumber = areaOfCircle(squareOfNumber);
  console.log(areaOfNumber);
  //forth operation
  const percentageOfNumber = percentOf(areaOfNumber,squareOfNumber);
  console.log(percentageOfNumber);
  return percentageOfNumber;

}
//5
masterFunction(5);

const bonusButton = document.querySelector("#bonus-button");
const bonusInput = document.querySelector("#bonus-input");

bonusButton.addEventListener("click", function(e){
  const bonusInputValue = bonusInput.value;
  const bonus = masterFunction(bonusInputValue);
 solution.innerText = bonus;
});


const input = document.querySelectorAll('input');

for( let i=0; i<input.length; i++){
let total;
input[i].addEventListener("keypress", function(e){
  if (e.key === 'Enter'){
    switch (input[i].id){
     case 'square-input':
      const squareInputValue = squareInput.value;
       total = squareNumber(squareInputValue);
      solution.innerText = total;
      break;
     case 'half-input':
     const halfInputValue = halfInput.value;
      total = halfNumber(halfInputValue);
     solution.innerText = total;
    break;
    case 'percent1-input',
    'percent2-input':
      const fractionInputValue = fractionInput.value;
      const wholeInputValue = wholeInput.value;
      total = percentOf(fractionInputValue,wholeInputValue);
    solution.innerText = `${total}\u0025`;
    break;
    case 'area-input':
    const areaInputValue = areaInput.value;
    const area = areaOfCircle(areaInputValue);
    solution.innerText = area;
    break;
    case 'bonus-input':
    const bonusInputValue = bonusInput.value;
    const bonus = masterFunction(bonusInputValue);
    solution.innerText = bonus;
    }
  }
  
});


}

/*
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:
1- Take half of the number and store the result.
2- Square the result of #1 and store that result.
3- Calculate the area of a circle with the result of #2 as the radius.
4- Calculate what percentage that area is of the squared result (#3).
*/



/* Bonus: respond to key presses so that the user doesn't have to click the button. */
 
 //if (e.key === 'Enter')
