/*
First, First letter of each name
Second, put them in an array
Third, Put them in Alphabetic order
Fourth, Use the function Louis sent "join"
*/
1st challenge 

const friends = ["John", "Will", "Mike"];

function secretSoc (arr){
let secretSocity=[];
for (let i = 0; i < arr.length; i++) {
  secretSocity.push(arr[i][0]);
}

  // It's confusing because you don't need to assign the result of "SORT" to something. We call this changing "in-place"; it just changes the secretSocity array.
  secretSocity.sort ()

  const together = secretSocity.join ('')
  return together;
}

console.log (secretSoc (friends))

// 2nd challenge //


function chatroomStatus(usersArray){
  const people =usersArray.length;
  let statusMessage;
  switch (people){
    case 0:
      statusMessage='no one online';
      break;
    case 1:
      statusMessage=`${usersArray[0]} online`;
    break;
    case 2:
      statusMessage=`${usersArray[0]} and ${usersArray[1]} online`;
    break;
    default:
      statusMessage=`${usersArray[0]}, ${usersArray[1]} and ${people-2} online`;
    } 
 
return statusMessage;

}

 
chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]);