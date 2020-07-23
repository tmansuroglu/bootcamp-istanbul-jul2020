//First challenge

function isNumber(givenNumber) {
    if(givenNumber > 10 && givenNumber < 20) {
      console.log(givenNumber);
    }
    else if(givenNumber < 100) {
      return givenNumber/2;
    }
    else if(givenNumber > 20) {
      console.log(Math.pow(givenNumber, 2));
    }
    else if(givenNumber >=100 && givenNumber <200){
      return givenNumber;
    }
    else {
      return givenNumber*2;
    }
  }
  
  isNumber(102);
  //isNumber(15);
  
  
  // Second challenge
  
  function isMatch(givenNum, givenString) {
    if (givenString.length < givenNum) {
      console.log("String was too short.");
      return false;
    } else if (givenString.length == givenNum){
      console.log("Exact match.");
      return givenNum;
    } else if (givenString.length > givenNum) {
      return -1;
    }
  }
  
  isMatch(5, "zeynep");
  //isMatch(5, "ada");
  //isMatch(5, "betul");
  
  
  //Third challenge
  //let color= "RED";
  //let color= "BLUE";
  let color= "YELLOW";
  
  switch(color) {
    case "RED":
      0;
    case "BLUE":
      -1;
    default: 
     2;
  }
  
  