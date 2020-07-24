

/* Exercise 1 */

 
/*

 function societyName(friendsArray){
  const initialName= [];
  for (let friend of friendsArray){

    const firstLetter= friend.charAt(0);
   
    initialName.push(firstLetter);
  }
  const sortedLetters = initialName.sort();
  

 const secretCode= sortedLetters.join('');
return secretCode;
}
societyName(["Harry", "Newt", "Luna", "Cho"]); 

*/



/* Exercise 2 */



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