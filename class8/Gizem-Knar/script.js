
//Square this number

document.getElementById("square-button").addEventListener("click",function(e){
  let squareNumber = document.getElementById('square-input').value;
  document.getElementById("result1").innerText ="The result of squaring the number " + squareNumber +" is "+ squareNumber* squareNumber;  
})

//Bonus 2
document.getElementById("square-input").addEventListener("keypress",function(e){
  if(e.key ==="Enter"){
      let squareNumber = document.getElementById('square-input').value;
    document.getElementById("result1").innerText ="The result of squaring the number " + squareNumber +" is "+ squareNumber* squareNumber;  
  }
})


//Half this number 

document.getElementById("half-button").addEventListener("click",function halfNumber(e){
  let halfNumber = document.getElementById('half-input').value;
   document.getElementById("result2").innerText = "Half of " + halfNumber +" is "+halfNumber/2 ;
})

//Third Activies
document.getElementById("percent-button").addEventListener("click", function percentOf(e){
  let fraction = document.getElementById('percent1-input').value;
  let whole = document.getElementById('percent2-input').value;
   document.getElementById("result3").innerText = fraction+" is "+ "%"+ ((fraction*100)/whole).toFixed(2)+ " of "+ whole;
})

//Fourth Acitivity
document.getElementById("area-button").addEventListener("click",function (e){
  let radius = document.getElementById('area-input').value;
   document.getElementById("result4").innerText = "The area for a circle with radius "+  radius +" is "+((radius * radius) * Math.PI).toFixed(2);
})


