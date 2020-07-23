/*

societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"
*/

function societyName(names) {
  let init = "";
  for(let i = 0; i < names.length; i++) {
    let name = names[i];
    let char = name[0].toUpperCase();
    init = init + char;
  }

  let sortedString = init.split("").sort().join("");
  return sortedString;
}

console.log(societyName(["Adam", "Sarah", "Malcolm"]));
console.log(societyName(["Harry", "Newt", "Luna", "Cho"]));
console.log(societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]));


/*  loops throought Array
  get each Element
    get first lettter
    make it upper
    put it in a string
    sort the string
  return that string */


// Coding Challeng 2 //

/*
chatroomStatus([]) ➞ "no one online"

chatroomStatus(["Liz"]) ➞ "Liz online"

chatroomStatus(["Liz", "Ammar"]) ➞ "Liz and Ammar online"

chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"])
➞ "Liz, Hakan and 4 more online"
*/

/*
If there is no one, return "no one online".
If there 1 person, return "[user1] online".
If there are 2 people, return [user 1] and [user 2] online".
If there are n>2 people, return the first two names and add "and n-2 more online".
*/


function chatroomStatus(users){
  if (users.length ==  0) {
    let status = "no one online";

    return status;
  } else if (users.length == 1) {
    let status = users.join("") + " online";
    
    return status;
  } else if (users.length == 2) {
    let status = users.join(" and ") +  " online";

    return status;

  } else {
    let status = `${users[0]}, ${users[1]} and ${users.length - 2} more online`;

    return status;
  }
}

console.log(chatroomStatus([]));
console.log(chatroomStatus(["Liz"]));
console.log(chatroomStatus(["Liz", "Ammar"]));
console.log(chatroomStatus(["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"]));