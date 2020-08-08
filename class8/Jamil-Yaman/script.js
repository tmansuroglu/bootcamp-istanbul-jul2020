function squareNumber (number) {
    return `The result of squaring the number ${number} is ${Math.pow(number, 2)}.`;
  }
  
  function halfNumber (number) {
    return `Half of ${number} is ${number/ 2}.`;
  }
  
  function percentOf (fNumber, sNumber) {
    return `${fNumber} is ${(fNumber/sNumber)*100}% of ${sNumber}.`;
  }
  
  function circleArea (radius) {
    return `The area for a circle with radius ${radius} is ${(Math.PI * radius * radius).toFixed(2)}.`;
  }
  
  function squareButtonHandeler(evt) {
    const squareInput = document.querySelector('#square-input').value;
    const result = squareNumber(squareInput);
    solution.innerText = result;
  }
  
  function halfButtonHandeler(evt){
    const halfInput = document.querySelector('#half-input').value;
    const result = halfNumber(halfInput);
    solution.innerText = result;
  }
  
  function areaButtonHandeler(evt){
    const areaInput = document.querySelector('#area-input').value;
    const result = circleArea(areaInput);
    solution.innerText = result;
  }
  
  function percentButtonHandeler(evt){
    const fNumber = document.querySelector('#percent1-input').value;
    const sNumber = document.querySelector('#percent2-input').value;
    const result = percentOf(fNumber, sNumber);
    solution.innerText = result;
  }
  
  const squareButton = document.querySelector('#square-button');
  const halfButton = document.querySelector('#half-button');
  const percentButton = document.querySelector('#percent-button');
  const areaButton = document.querySelector('#area-button');
  const solution = document.querySelector('#solution');
  
  squareButton.addEventListener('click', squareButtonHandeler);
  halfButton.addEventListener('click', halfButtonHandeler);
  areaButton.addEventListener('click', areaButtonHandeler);
  percentButton.addEventListener('click', percentButtonHandeler);
  
  document.addEventListener('keyup', function(evt){
    const clickedElement = evt.target;
  
    switch(clickedElement.id){
      case "square-input":
        squareButtonHandeler(evt);
        break;
        case "area-input":
        areaButtonHandeler(evt);
        break;
       case "percent2-input":
        const fNumber = document.querySelector('#percent1-input').value;
        if(fNumber){
          percentButtonHandeler(evt);
        }
        break;
       case "half-input":
        halfButtonHandeler(evt);
        break;
    }
  })
