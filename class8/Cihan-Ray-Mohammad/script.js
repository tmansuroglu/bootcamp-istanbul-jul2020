function squareNumber(num) {
    let squareNumber = document.getElementById("square-button").value;
    let squaredNumber = num * num;
    return squaredNumber;
}
squareNumber(2);



function halfOf(num) {
    let half = num / 2;
    return half;
}
halfOf(4);


function percentOf(number1, number2) {
    let percentage = (number1/number2) * 100;
    return percentage;
}

percentOf(20,40);



  function areaOfCircle(radius) {
    let area = Math.PI * squareNumber(radius);
    return area;
}
areaOfCircle(2);


//DOM 
const squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", function() {
  var num = document.getElementById("square-input").value;
  document.getElementById("solution").innerHTML = "The result of squaring the number" + num + ' is ' + squareNumber(num);
});


const halfButton= document.getElementById("half-button");
halfButton.addEventListener("click", function() {
  var num = document.getElementById("half-input").value;
  document.getElementById("solution").innerHTML = 'half of ' + num + ' is ' + halfOf(num);
});



const percentbutton= document.getElementById("percent-button");
percentbutton.addEventListener("click", function() {
  let number1 = document.getElementById("percent1-input").value;
  let number2 = document.getElementById("percent2-input").value;
  document.getElementById("solution").innerHTML =   number1 + ' is ' + percentOf(number1,number2) + '% of ' + number2;
});



const areaOfCircl= document.getElementById("area-button");
areaOfCircl.addEventListener("click", function() {
  let num = document.getElementById("area-input").value;
  document.getElementById("solution").innerHTML =   
  "the area of circle with radius " + num + ' is '+ areaOfCircle(num);
});




