function returnNumber(number) {
  if(number > 10 && number < 20) {
    console.log(number);
  } else if (number > 20) {
    console.log(`the square of the number ${number}: ${number * number}`);
  }
  
  if (number < 100){
    return number / 2;
  } else if(number >= 100 && number < 200) {
    return number;
  } else {
    return number * 2;
  }
}

returnNumber(24);
returnNumber(30);


/*
Challenge 1
Write a function that fulfills the following requirements:

It takes a single parameter, a number.
If the number is between 10 and 20, console.log the number.
If the number is less than 100, return the number divided by two.
If the the number is greater than 20, console.log the square of the number.
If the number is greater or equal to 100 but less than 200, return just the number.
Otherwise return the number multiplied by two.
*/

function checkLength(num,str){
  if (str.length < num) {
    console.log(`String was too short.`);
    return false;
  } else if (str.length == num) {
    console.log(`Exact match.`);
    return num;
  } else if (str.length > num) {
    return -1;
  }
}

let result = checkLength(3, "je");
// to save memory xD

console.log(result);
console.log(checkLength(3, "jee"));
console.log(checkLength(3, "jeee"));


checkLength(3, "jee");
/* Challenge 2
Write a function that fulfills the following requirements:

It takes two parameters, a number and a string.
If the length of the string is less than the number, then console.log "String was too short." and return false.
If the length of the string is equal to the number, then console.log "Exact match." and return the number.
If the length of the string is greater than the number, do not console.log anything, and return -1.
Call this function for all three cases, assigning them to variables, and console.log the results of the function calls.
*/

function checkColour(coluorName) {
  switch (coluorName.toUpperCase()) {
    case "RED":
      return 0;
    case "BLUE":
      return 1;
    default:
      return 2;
  }
}
console.log(checkColour("Red"));
console.log(checkColour("bLuE"));
console.log(checkColour("BlaBlaBla"));

/* Bonus: switch-case statement
Write a function that takes a single argument, a string. Use a switch-case statement (you may need to look this up).

If the argument is RED, return 0
If the argument is BLUE, return 1
If the argument is anything else, return 2.
*/




/*function checkLength(num,str){
  if (str.length < num) {
    console.log(`String was too short.`);
    return false;
  } else if (str.length == num) {
    console.log(`Exact match.`);
    return num;
  } else if (str.length > num) {
    return -1;
  }
}*/

/* function checkLengthV2(num,str){
   switch (str.length) {
    case num:
      console.log(`Exact match.`);
      return num;
    default:
      if (str.length < num) {
        console.log(`String was too short.`);
        return false;
      } else if (str.length > num) {
        return -1;
      }
   }
 }

 checkLengthV2()*/


 function checkLengthv3(num,str) {
  if (num < str.length) {
     value = "less"
  } else if (num > str.length) {
     value = "greater"
  } else  value = "equal"
  switch (value) {
    case "less":
      console.log("String was too short");
      return false;
      break;
    case "equal":
     console.log("Exact match");
     return num;
     break;
    case "greater":
      return -1;
      break;
  }
}
console.log(checkLengthv3(2,'bla'))
console.log(checkLengthv3(3,'bla'))
console.log(checkLengthv3(4,'bla'))