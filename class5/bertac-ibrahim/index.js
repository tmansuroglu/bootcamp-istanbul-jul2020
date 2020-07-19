function div(x){
  if (x % 5 === 0){
    return true;

  }

  return false;
  
}
console.log(div(9))

function sum(x,y){
  if (x + y < 100){
    return true;
  }
  
  return false
  
}
console.log(sum(122,15))


function fib(){
  let x = 0;
  let y =  1;
  let sum = 0;
  while (x<4000000){
    result = x + y;
    x = y
    y = result
    if (x % 2 ===0){
      sum += x;
    }
    }
  console.log("Sum:",sum)
}
fib();

