
function challenge1(num){
    if(num>10 && num<20){
      console.log(num);
    }
    else if(num<100){
      return (num/2) ;
    }
    else if(num > 20){
      console.log(num*num);
    }
    else if(num>=100 && num<200){
      return num;
    }
    else{
      return num*2;
    }
  }
  
  function challenge2(num, str){
    let length = str.length;
    if(length<num){
      console.log("String was too short.");
      return false;
    }
    else if(length===num){
      console.log("Exact match.");
      return num;
    }
    else if(length>num){
      console.log("Ibrahim and Knar");
      return -1;
    }
  }
  
  let bol = challenge2(7,"hello");
  console.log(bol);
  
  let number = challenge2(5,"hello");
  console.log(number);
  
  let int = challenge2(3,"hello");
  console.log(int);
  
  function bonus(arg){
    switch(arg){
      case "RED":
        return 0;
        break;
      case "BLUE":
        return 1;
        break;
      default:
        return 2;
        break;
    }
  }
  
  
  
  
  