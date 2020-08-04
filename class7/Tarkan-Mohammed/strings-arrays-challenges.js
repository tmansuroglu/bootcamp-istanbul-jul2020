/*
Instructions For The Exercise

Secret Society?
A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
In the console, create a function that takes in an array of names and returns the name of the secret society.

Notes:

If you get stuck on a challenge please search it online and try to find resources
If you are really stuck, please ask your Instructors.

Examples

societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"



---------------------------------------------------------------------------------
Instructions For The Exercise
Chat Room Status
In the console, write a function that returns the number of users in a chatroom based on the following rules:

If there is no one, return "no one online".
If there 1 person, return "[user1] online".
If there are 2 people, return [user 1] and [user 2] online".
If there are n>2 people, return the first two names and add "and n-2 more online".

For example, if there are 5 users, return:

"[user1], [user2] and 3 more online"

Notes:


If you get stuck on a challenge please search it online and try to find resources
If you are really stuck, please ask your Instructors.


Examples:

chatroomStatus([]) ➞ "no one online"

chatroomStatus(["Liz"]) ➞ "Liz online"

chatroomStatus(["Liz", "Ammar"]) ➞ "Liz and Ammar online"

chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"])
➞ "Liz, Hakan and 4 more online"

*/
/*
function societyName(array){
  sortedArray = array.sort()
  name = ""
  for(let i= 0; i<sortedArray.length;i++){
    name =name+ sortedArray[i][0];
  }
  return name
}
*/
//societyName(["Adam", "Sarah", "Malcolm"])

//societyName(["Harry", "Newt", "Luna", "Cho"])

//societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])


/*
function chatroomStatus (arry) {
	if (arry.length===0){
  return "no one online"  
  } 
  else if (arry.length===1) {
    return arry[0] + " online"
    }
  else if (arry.length===2) {
		return arry[0] + " and " + arry[1] + " online "
	}
	else {
    return arry[0] + " and " + arry[1] + " and " + ((arry.length)-2) + " more online "  
  }
}

//chatroomStatus([])
//chatroomStatus(["Liz"])
//chatroomStatus(["Liz","Ammar"])
//chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"])

*/
/*
const sentence = "abc def ghj";
const words = sentence.split("");
words.join("-")
*/