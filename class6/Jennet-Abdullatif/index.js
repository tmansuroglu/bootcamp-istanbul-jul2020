function funct(number) {
  if (number > 10 && number < 20) {
    console.log(number);
  } else if (number > 20) {
    console.log(number * number);
  } if (number < 100) {
    return (number / 2);
  } else if (number >= 100 && number < 200) {
    return number;
  } else {
    return (number * 2);
  }
}
console.log(funct(50));


/*
function funct2(number, string) {
  if (string.length < number) {
    console.log("String was too short.");
    return false;
  } else if (string.length === number) {
    console.log("Exact match.");
    return number;
  } else {
    return -1;
  }
}

let case1 = console.log(funct2(5, 'Hello, world!'));
let case2 = console.log(funct2(13, 'Hello, world!'));
let case3 = console.log(funct2(15, 'Hello, world!'));
*/

/*
function funct3(string) {
  switch (string) {
    case 'RED': 
      return 0;
      break;
    case 'BLUE': 
      return 1;
      break;
    default: return 2;
  }
}
funct3('RED')
*/