const solution = document.querySelector("#solution");
const calculate = document.querySelector("#square-button");
calculate.addEventListener('click',function (e){
  let squareNumberInbut= document.querySelector("#square-input").value;
solution.innerText = squareNumber(squareNumberInbut);
  })
  
function squareNumber (number){
 let result = number*number;
 return "The result of squaring the number " + number + " is "  + result;
}



const calculate2 = document.querySelector("#half-button");
calculate2.addEventListener('click',function (e){
  let halfNumberInbut = document.querySelector("#half-input").value;
solution.innerText = halfNumber(halfNumberInbut);
  }) 
 
function halfNumber  (number){
  let result = number/2;
  
  return "Half of " + number + " is "  + result;



}
const calculate3 = document.querySelector("#percent-button");
calculate3.addEventListener('click',function (e){
let percenInbut1= document.querySelector("#percent1-input").value;
let percenInbut2= document.querySelector("#percent2-input").value;
solution.innerText = percentOf(percenInbut1,percenInbut2);
  })
 function percentOf (num1, num2){
   
   let result = ((num1 / num2) * 100).toFixed(2);
   return num1 + " is " + result + "% of " + num2 + ".";
   return result;
   
 }
 



const calculate4 = document.querySelector("#area-button");
calculate4.addEventListener('click',function (e){
  let areaOfCircleInput = document.querySelector("#area-input").value;
solution.innerText = areaOfCircle(areaOfCircleInput);
  })

 
 function areaOfCircle   (radius){
  let result = radius*radius*(Math.PI).toFixed(2);
  
  return"The area for a circle with radius " + radius + " is "  + result;

}
