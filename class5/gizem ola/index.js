//First//
const a = 5
const b = 55
const c = 37


if (a % 5===0){
  console.log(true)
}
else {
  console.log (false)
}

//Second//

const number1 =50;
const number2 = 40;

if (number1 + number2 < 100 )
{
  console.log(true)
}
else {
  console.log (false)
}

//Fibonacci sequence//

var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for (i = 2; i <= 10; i++) {
  fib[i] = fib[i - 2] + fib[i - 1];
  console.log(fib[i]);
}
