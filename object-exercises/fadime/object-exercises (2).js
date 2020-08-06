//"Your TP will only last 2 days, buy more!"
//"Your TP will last 26 days, no need to panic!"

function tpChecker(obj){
  const quarantineDays = 14;
  const totalSheet = 500;
  const dailySheet= 57;
  const people = obj.people;
  const tpAvailable = obj.tp;
  console.log(people, tpAvailable)
  let remainingDays= ((tpAvailable*totalSheet)/(people*dailySheet)).toFixed(0);
  console.log(remainingDays)
  if(remainingDays< quarantineDays){   
    return `Your TP will only last ${remainingDays} days, buy more!`
  }else {
    return `Your TP will only last ${remainingDays} days, no need to panic!`
  }
  
}


//tpChecker({people: 4, tp: 1})
tpChecker({people: 3, tp: 11});


getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) //➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
])// ➞ 62600
function getBudgets (peopleArr){
let sum = 0;
for (let person of peopleArr) {
  sum += person.budget;
}
console.log(sum)
}


const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
};

//"Hi! I'm [name], and I'm from [country]."
//"Hi! I'm a guest."


function greet(name){

  if ( GUEST_LIST.hasOwnProperty(name)) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}.`
  } else {
    return "Hi! I'm a guest."
  }

}

greet( 'Sam');