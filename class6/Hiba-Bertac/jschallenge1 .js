//Challange 1 
function find(num) {

if  ( num < 20 &&  num > 10 ){
console.log(num); }

if  ( num > 20 ) {
console.log ( num*num );}

if  ( num < 100 ) {
return( num/2 ); }

if ( num >= 100 && num < 200 ) {
  return(num);
}
else {
   return(num*2);
}
}

find (300) 


//Challange 2
function compare(num, str) {

if  ( str.length < num ){
console.log("String was too short."); 
return (false); 
}


else if ( str.length === num ){
console.log("Exact match.") ; return (num) ;}
 

else {
return (-1)}
}



compare(2,"hiba")


//Bonus: switch-case statement

function color(str){
  switch(str){
    case "RED":
      return 0;
    
    case "BLUE":
      return 1;
    
    default:
      return 2;
  
}

}
color("RED")


