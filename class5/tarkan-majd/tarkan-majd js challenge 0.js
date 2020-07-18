let integer = 5;
let var1= 400
let var2=4

if (integer%5==0){
   console.log("TRUE");
}

else {
  console.log("FALSE");
}

if (var1+var2<100){
  console.log("TRUE")
}

else{
  console.log("FALSE")
}


function fibonacci(a,b){
  let fiboarray = [a,b];
  let fibonumber=0;
  let sum=0;
  let i = 0;

  while(fibonumber<4000000){
  fibonumber = fiboarray[i]+ fiboarray[i+1];
  i++;
  fiboarray.push(fibonumber);
  }

  console.log(fiboarray)

  for (var k=0;k<fiboarray.length;k++){
    if (fiboarray[k]%2==0){
      sum=sum+fiboarray[k];
    }
  }
  console.log(sum)
    }
  fibonacci(1,2)