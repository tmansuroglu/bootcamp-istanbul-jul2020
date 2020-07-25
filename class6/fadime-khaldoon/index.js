/*It takes a single parameter, a number.
If the number is between 10 and 20, console.log the number.
If the number is less than 100, return the number divided by two.
If the the number is greater than 20, conso le.log the square of the number.
If the number is greater or equal to 100 but less than 200, return just the number.
Otherwise return the number multiplied by two.*/

function CheckTheNum (num){
  if (num>10 && num<20 ){
    console.log(num);
  } else if (num>20) {
    console.log(num*num);
  } 
  
  if (num<100) {
    return (num/2);
  } else if (num >= 100 && num < 200) {
    return num;
  } else {
    return num*2;
  }
}

CheckTheNum(50);

/*It takes two parameters, a number and a string.
If the length of the string is less than the number, then console.log "String was too short." and return false.
If the length of the string is equal to the number, then console.log "Exact match." and return the number.
If the length of the string is greater than the number, do not console.log anything, and return -1.
Call this function for all three cases, assigning them to variables, and console.log the results of the function calls.*/

function CountLetters(num, word){
  if (word.length < num){
    console.log ("String was too short.");
    return false;
  } else if (word.length === num) {
    console.log ("Exact match");
    return num;
  } else{
    return ("-1");
  }
}

CountLetters(4, 'kitty');
CountLetters(4, 'kit');
CountLetters(4, 'keac');
