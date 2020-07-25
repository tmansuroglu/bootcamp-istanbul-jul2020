let number=21; 

if (number%5==0){
  console.log(true);
} else {
  console.log(false);
}

const number1= 10;
const number2= 2;

number1+number2<100?  console.log(true): console.log(false)


let previous = 0;
let current = 1;
let sum = 0;
let next;

   for(i = 1; i < 100; i++){
        next = current + previous;
        previous = current;
        current = next; 
        if(current % 2 === 0 && current < 4000000) {
            sum += current;
        console.log(sum);
        }
   }
