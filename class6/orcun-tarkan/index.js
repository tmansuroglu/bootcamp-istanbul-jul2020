/*
If conditions, return statements exercise
Challenge 1
Write a function that fulfills the following requirements:

It takes a single parameter, a number.
If the number is between 10 and 20, console.log the number.
If the number is less than 100, return the number divided by two.
If the the number is greater than 20, console.log the square of the number.
If the number is greater or equal to 100 but less than 200, return just the number.
Otherwise return the number multiplied by two.
Challenge 2
Write a function that fulfills the following requirements:

It takes two parameters, a number and a string.
If the length of the string is less than the number, then console.log "String was too short." and return false.
If the length of the string is equal to the number, then console.log "Exact match." and return the number.
If the length of the string is greater than the number, do not console.log anything, and return -1.
Call this function for all three cases, assigning them to variables, and console.log the results of the function calls.



Bonus: switch-case statement
Write a function that takes a single argument, a string. Use a switch-case statement (you may need to look this up).

If the argument is RED, return 0
If the argument is BLUE, return 1
If the argument is anything else, return 2.

*/
/*
function number(a){
  if (a>10 && a<=20){
    console.log(a);
  }
  else if (a>20){
    console.log(a**2);
  } 
  if (a<100){
    return a/2;
  }
  else if(100<=a && a<200){
    return a;
  }
}
number(21);


function numb(number, string) {
 if(string.length < number){
   console.log("String was too short.")
 }
 else if(string.length === number){
   console.log("Exact match.")
     return number;
 }
 else if(string.length > number){
   return -1;
 }
}

const tarkan = numb(7, "Tarkan")
const orcun = numb(5, "Orçun")
const abc = numb(2, "abc")
console.log(abc)
console.log(tarkan)
console.log(orcun)


/*Call this function for all three cases, assigning them to variables, and console.log the results of the function calls.*/

/*
Bonus: switch-case statement
Write a function that takes a single argument, a string. Use a switch-case statement (you may need to look this up).

If the argument is RED, return 0
If the argument is BLUE, return 1
If the argument is anything else, return 2.
*/




function sw(a){
  if (typeof(a) === "string"){
    switch(a){
      case "RED":
        return 0;
        break;
      case "BLUE":
        return 1;
        break;
      default:
        return 2;
    }
  }
  else{
    return "invalid input";
  }
}

console.log(sw("RED"))
console.log(sw("BLUE"))
console.log(sw("RE"))
console.log(sw(2))

console.log("-----------")

sw("RED");
sw("BLUE");
sw("RE");
sw(2);