// Challenge 1// 

function playground1 (num) {
    if (10<num && num<20) {
      console.log (num);
      return num/2;
    }
    else if (20<num && num<100) {
      console.log(num**2);
      return num/2;  
    }
   
    else if (100<=num && num<200)
    {
      return num;
    }
    else {
      console.log (num*2);
    }
  }
  playground1(11);
  

  
  // Challenge 2//
  
  function playground2 (num , string)
  {
    if (string.length < num) 
    {
        console.log ('String was too short.')
        return false;
    }
      else if (string.length==num)
    {
        console.log ('Exact match.')
        return num;
   }
    else if (num<string.length)
    {
        return -1;
    }  
  }
  playground2 (5,'Ola'); 
  
  
  
  // Challenge 3//
  function color (str) {
  let result;
  switch (str) {
    case 'RED':
  result = 0;
    break;
    case 'BLUE':
    result = 1;
      break;
    default:
    result = 2;
  break;
  }
  return result;
  }
  color('D'); 
  