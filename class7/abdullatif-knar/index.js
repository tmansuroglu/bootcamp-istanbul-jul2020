
let arr=["knar", "abdullatif","louis","halit","ammar"];
function societyName(arr){
  let initials = [];
  for( let i =0 ; i<arr.length ; i++){
   initials.push(arr[i].charAt(0).toUpperCase());
  }
  initials.sort();
  console.log(initials);
  return initials.join(",");
}
societyName(arr) 



let users=["knar" ,"abdullatif" ,"louis","halit","ammar"];
function chatroomStatus(users){
  switch(users.length){
    case 0 :
      return  "no one online";
    case 1 :
      return users[0] + " online";
    case 2 :
      return users[0] +" and "+ users[1] + " online";
    default : 
      return users[0] +" and "+ users[1] + "and " + (users.length-2) + " more online";
    
  }
}
chatroomStatus(users);
