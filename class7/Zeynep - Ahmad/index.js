const str=[];
const INPUT=["Ahmad", "Zeynep", "Sarah", "Malcolm"];
function societyName(input){
  for (let i=0;i< input.length;i++){
    input.sort();
    //console.log(INPUT);
    let n= input[i].split("");
    //console.log(N[0]);
    //STR=N[0];
    str.push(n[0]);

  }
  console.log(str.join(""));
}

societyName(INPUT)


function chatroomStatus(index){
  
  let num=index.length-2;
  if (index==0){
    return ("no one online");
  }
  else if(index.length==1){
    return (`${index} online`);
  }
  else if (index.length==2){
    return (`${index[0]}, and ${index[1]} online`);
  }
  
  else {
    return (`${index[0]},${index[1]} and ${num} more online`);
  }
  
}


console.log(chatroomStatus([]));
console.log(chatroomStatus(["Liz"]));
console.log(chatroomStatus(["Liz", "Ammar"]));
console.log(chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]));