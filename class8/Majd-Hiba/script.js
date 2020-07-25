// ------------- Impot HTML elements -------------
// import the square elements from html
const squareBox = document.getElementById('square-button');
const squareInput= document.getElementById('square-input');


// import the half elements from html
const halfBox = document.getElementById('half-button');
const halfInput= document.getElementById('half-input');

// import the percentage elements from html
const percentBox = document.getElementById('percent-button');
const percentInput1= document.getElementById('percent1-input');
const percentInput2= document.getElementById('percent2-input');

// import the area elements from html
const areaInput= document.getElementById('area-input');
const areaBox= document.getElementById('area-button');

// import the solution div elemnt 
const solutionP= document.getElementById('solutionP')

//------------------------------------------------
//--------- functions and event listeners --------

// ### Square function ###
// Add event listener to the button that calculates the output depending on the value in the input box
squareBox.addEventListener('click', function(e){
  const solution= squareNumber(squareInput.value)
  console.log(solution)
  solutionP.innerText = `${squareInput.value} squared equals ${solution}`;
} )

function squareNumber(num){
  const squared= num*num;
  //console.log(`The result of squaring the number ${num} is ${squared}`);
  
  return squared.toFixed(2);
}

// ### Half function ###
// Add event listener to the button that calculates the output depending on the value in the input box
halfBox.addEventListener('click', function(e){
  const solution= halfNumber(halfInput.value);
  console.log(solution);
  solutionP.innerText = `half the number ${halfInput.value} is ${solution}`;
} )


function halfNumber(num){
  const half= num/2;
  //console.log(`half of ${num} is ${half}`);
  return half.toFixed(2);
}

// ### Percentage function ###
// Add event listener to the button that calculates the output depending on the value in the input box
percentBox.addEventListener('click', function(e){
  const solution= percentOf(percentInput1.value,percentInput2.value);
  console.log(solution)
  solutionP.innerText = `${percentInput1.value} is ${solution}% of ${percentInput2.value}`;
} )

function percentOf(fraction, whole){
 const percentage = fraction*100/whole;
  //console.log(`${fraction} is ${percentage}% of ${whole}`);
  return percentage.toFixed(2);
}


// ### area function ###
function areaOfCircle(radius){
 const area = (radius**2)*Math.PI;
  //console.log(`the area of a circle with radius ${radius} is ${area}`);
  return area.toFixed(2)
}

// Add event listener to the button that calculates the output depending on the value in the input box
areaBox.addEventListener('click', function(e){
  const solution = areaOfCircle(areaInput.value);
  console.log(solution);
  solutionP.innerText = `the area of a circle with radius ${areaInput.value} is ${solution}`
})

function operation(num) {
  const half = halfNumber(num);
  const square = squareNumber(half);
  const areaCircle = areaOfCircle(square);
  const percentage = percentOf(areaCircle, square);

}

// operation(7)



