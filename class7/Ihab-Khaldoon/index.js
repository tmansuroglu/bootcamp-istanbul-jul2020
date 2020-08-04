//societyName(["Adam", "Sarah", "Malcolm"]) ➞ "AMS"

/* 1-Capitalize the array
   2-Sort the array
   3-Take the first letter of each element in the array
   */


  //fruitNames = ["banana", "apple", 'strawberry']
  //fruitNames.sort()

  const names = ["sarah", "Malcolm", "adam"]

  function societyName(array) {
    
    for (let i = 0; i < array.length; i++) {
       array[i] = array[i].toUpperCase();
       array[i] = array[i].slice(0,1); 
    }
    array.sort();
    console.log(array.join(''));
   }

societyName (names)



/*
1-Count array items
2-if array items equals 0 = "no one online"
3-If there 1 person, return "[user1] online"
4-If there are 2 people, return [user 1] and [user 2] online".
5-If there are n>2 people, return the first two names and add "and n-2 more online".


*/

function chatroomStatus(array = []) {
  switch (array.length) {
    case 1:
      return (`${array[0]} online`);
      break;
    case 2:
      return (`${array[0]} and ${array[1]} online`);
      break;
    case 0:
      return "no one online";
      break;
    default :
      return (`${array[0]} and ${array[1]} online and ${array.length -2} more online`);
      break;
  }
}

chatroomStatus()
//chatroomStatus(["Rick"])
//chatroomStatus(["Rick", "Morty"])
//chatroomStatus(["Rick", "Morty", "Squanchy"])
 
