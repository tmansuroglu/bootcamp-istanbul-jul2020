//Secret Society?
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.
// In the console, create a function that takes in an array of names and returns the name of the secret society.

// Notes:

// If you get stuck on a challenge please search it online and try to find resources
// If you are really stuck, please ask your Instructors.

// Examples

// societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

// societyName(["Harry", "Newt", "Luna", "Cho"]) ➞ "CHLN"

// societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"]) ➞ "CJMPRR"//

// const societyName = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"];

// const letters = [];
// for (let i = 0; i < societyName.length; i++) {
//   const firstLetter = societyName[i][0];
//   letters.push(firstLetter);
// }
// letters.sort();
// console.log(letters.join(''))


// Chat Room Status
// In the console, write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there 1 person, return "[user1] online".
// If there are 2 people, return [user 1] and [user 2] online".
// If there are n>2 people, return the first two names and add "and n-2 more online".

// For example, if there are 5 users, return:

// "[user1], [user2] and 3 more online"

// Notes:


// If you get stuck on a challenge please search it online and try to find resources
// If you are really stuck, please ask your Instructors.

const members = ["Liz", "Hakan", "Halit", "Ola", "Jennet"];

function greet(people) {
  const numberOfPeople = members.length;
  if (numberOfPeople === 0) {
    return "no one online";
  } else if (numberOfPeople === 1) {
    return people[0] + ' online';
  } else if (numberOfPeople === 2) {
    return people[0] + ' and ' + people[1] + ' online';
  } else {
    return (people[0] + ', ' + people[1] + ' and '+ (numberOfPeople - 2) + ' more people are online ');
  }
}
console.log(greet(members))