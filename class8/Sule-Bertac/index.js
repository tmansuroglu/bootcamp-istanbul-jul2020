function squareNumber(num){
    const result= num*num; 
    console.log(`The result of squaring the number ${num} is ${result}.`);
   return `The result of squaring the number ${num} is ${result}.`;
   };
  
  function halfNumber(num){
    const result= num/2; 
    console.log(`Half of ${num} is ${result}.`);
   return `Half of ${num} is ${result}.`;
  };
  
  function percentOf(fraction,whole){
  const result= (fraction*100)/whole;
  console.log(`${fraction} is ${Math.round(result)}% of ${whole}.`);
  return `${fraction} is ${Math.round(result)}% of ${whole}.`;
  };
  
  function areaOfCircle(r){
    const pi=3.14;
    const result= (r**2)*pi;
    //const roundedRes = Math.round(result)
    console.log(`The area for a circle with ${r} is ${result}`);
    return `The area for a circle with ${r} is ${result}`;
    
  };
  
  const solution = document.querySelector('#solutionP');
  
  
  const body = document.querySelector("body");
  body.addEventListener("keydown", function(e){
    if(e.target.id === "square-input" && e.key === "Enter"){ 
      square.click()
    }
    else if(e.target.id === "half-input" && e.key === "Enter"){ 
      half.click()
    }
    else if((e.target.id === "percent2-input")||(e.target.id === "percent1-input") && e.key === "Enter"){ 
      percent.click()
    }
    else if(e.target.id === "area-input" && e.key === "Enter"){ 
      area.click()
    }
   
  
  });
  
  const square = document.querySelector('#square-button');
  
  square.addEventListener ('click', function(e) {
    
    const input = document.querySelector('#square-input');
    const num = input.value;
    solution.innerText =  squareNumber(num);
    
   
  });
    
  const half = document.querySelector('#half-button');
  
  
  half.addEventListener ('click', function(e) {
    const input = document.querySelector('#half-input');
    const num = input.value;
    solution.innerText = halfNumber(num);
  
  });
  
  const percent = document.querySelector('#percent-button');
  percent.addEventListener ('click', function(e) {
    const input1 = document.querySelector('#percent1-input');
    const input2 = document.querySelector('#percent2-input');
    
    const num1 = input1.value;
    const num2 = input2.value;
    solution.innerText = percentOf(num1,num2);
  
    
  });
  
  
  const area = document.querySelector('#area-button');
  
  area.addEventListener ('click', function(e) {
    const input = document.querySelector('#area-input');
    const r = input.value;
    solution.innerText = areaOfCircle(r);
  
  });
  
  const reset = document.querySelector("#reset");
  const inputs = document.querySelectorAll("input")
  
  reset.addEventListener("click", function(e){
    for(let input of inputs){
      input.value = "";
    }
    solution.innerText = "";
  });
  
  
  
  