// First Challange

const wholeNames = [];
const firstLetters = [];

function societyName(wholeNames) {
  for(let i=0; i < wholeNames.length; i++) {
   firstLetters.push(wholeNames[i][0].toUpperCase());
  }
  firstLetters.sort();
  return firstLetters.join('');
}

//societyName(["adam", "sarah", "malcolm"]);
//societyName(["harry", "newt", "luna", "cho"])
societyName(["phoebe", "chandler", "rachel", "ross", "monica", "joey"])


//Second Challenge
const userArray = [];

function chatroomStatus(userArray) {
  if(userArray.length == 0) {
    return "No one online";
  } else if(userArray.length == 1) {
    return userArray[0] + " online ";
  } else if(userArray.length == 2) {
    return userArray[0] + " and " + userArray[1] + " online";
  } else {
    return userArray[0] + ", " + userArray[1] + " and " + (userArray.length - 2) + " more online"
  }
}

//chatroomStatus([])
//chatroomStatus(["Liz"])
//chatroomStatus(["Liz", "Ammar"])
//chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"])