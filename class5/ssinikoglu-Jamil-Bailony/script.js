//Divisible by five exercise 1
function isDivisableByFive(number) {
    console.log(number % 5 === 0);
  }
  
  //Less than 100 exercise 2
  function isLessThan100(fNum, sNum) {
    console.log((fNum+sNum) < 100);
  }
  
  //Optional exercise Fibonacci sequence
  function fibonacciSum() {
    let fNumber = 1;
    let sNumber = 2
    let lNumber = 2;
  
    let sumEven = 2;
  
    while(lNumber < 4000000){
      lNumber = fNumber + sNumber;
      fNumber = sNumber;
      sNumber = lNumber;
  
      if(lNumber % 2 == 0) {
        sumEven += lNumber;
      }
    }
  
    console.log(sumEven);
  }
  
  
  // Trying exercise 1 values
  isDivisableByFive(55);
  isDivisableByFive(37);
  
  //Trying exercise 2 values
  isLessThan100(22,15);
  isLessThan100(83,34);
  
  //Sum of the even-valued terms in Fibonacci sequence
  fibonacciSum();