
const societyName = ["Adam", "Sarah", "Malcolm"]
const newList = []
let str = ""
for (let item of societyName){
  newList.push(item[0].toUpperCase())
}
for (let i of newList.sort()){
  str +=   i;
}
console.log(str)

// Without the for ..of loop:

/*
const societyName = ["Adam", "Sarah", "Malcolm"]
const newList = []
for (let item = 0; item < societyName.length; item++){
  newList.push(societyName[item][0])
}
console.log(newList.sort())
*/

// SECOND CHALLENGE


const userList = ["Liz", "Hakan", "Ammar", "Feras", "Jaime", "Derya"];

const len = userList.length;

if (len === 0){
  console.log("No one online") ;
} 
else if (len === 1){
  console.log(`${userList[0]} online`) ;
} 
else if (len === 2){
  console.log(`${userList[0]} and ${userList[1]}online`) ;
} 
else if (len > 2 ){
  console.log(`${userList[0]} and ${userList[1]} and ${len-2} others online`) ;
} 