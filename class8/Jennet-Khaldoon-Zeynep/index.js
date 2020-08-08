const squareButton = document.getElementById('square-button');
const halfButton = document.getElementById('half-button');
const solution = document.getElementById('solution');
const areaButton = document.getElementById('area-button');
const percentButton = document.getElementById('percent-button');
const surpriseButton = document.getElementById('surprise-button');


function square (number) {
  let squareOfNumber = number * number;
  let squareRound = squareOfNumber.toFixed(2);
  solution.innerText = `The result of squaring the number ${number} is ${squareRound}`;
  return squareOfNumber;

}

function halfNumber (number) {
  let halfResult = number / 2;
  solution.innerText = `Half of ${number} is ${halfResult}`;
  return halfResult;
}

function percentOf (num1, num2) {
  let percentOf = (num1 / num2) * 100;
  let percentRounded = percentOf.toFixed(2)
  solution.innerText = `${num1} is ${percentRounded}% of ${num2}`;
  return percentRounded;
}


function area (number) {
  let areaOfCircle = Math.PI * (number * number);
  let areaRounded = areaOfCircle.toFixed(2);
    solution.innerText = `The area for a circle with radius ${number} is ${areaRounded} .`;
  return areaRounded;
}


squareButton.addEventListener('click', function() {
  const squareNumber = document.getElementById('square-input').value;
  square(squareNumber);
  
});


halfButton.addEventListener('click', function() {
  const halfInput = document.getElementById('half-input').value;
  halfNumber(halfInput);
});

percentButton.addEventListener('click', function() {
  const percentageNum1 = document.getElementById('percent1-input').value;
  const percentageNum2 = document.getElementById('percent2-input').value;
  percentOf(percentageNum1, percentageNum2)
});

areaButton.addEventListener('click', function() {
  const areaNumber = document.getElementById('area-input').value;
  area(areaNumber);
});

//Bonus Question
document.addEventListener ('keydown', function(e) {
  if (e.key === "Enter") {
    switch (e.target.id) {
      case "square-input": square(e.target.value);
      break;
      case "half-input": halfNumber(e.target.value);
      break;
      case "percent2-input": percentOf(document.querySelector('#percent1-input').value, e.target.value);
      break;
      case "percent1-input": percentOf(e.target.value, document.querySelector('#percent2-input').value);
      break;
      case "area-input": area(e.target.value);
      break;
      case "surprise-input": surprise (e.target.value);
      break;
    }
  } 
})

//Bonus Question 
function surprise (z) {
  let nHalf = halfNumber (z);
  console.log (nHalf);
  let nSquare = square (nHalf);
  console.log (nSquare);
  let nArea = area (nSquare);
  console.log (nArea);
  let nPercent = percentOf (nArea,square(nArea))
  console.log (nPercent);
  solution.innerText = `- Half of ${z} is ${nHalf},
  - The result of squaring the number ${nHalf} is ${nSquare},
  - The area for a circle with radius ${nSquare} is ${nArea}
  - And ${nArea} is ${nPercent}% of ${square(nArea)}.`;
}

surpriseButton.addEventListener('click', function() {
  const surpriseNumber = document.getElementById('surprise-input').value;
  surprise (surpriseNumber);
});



