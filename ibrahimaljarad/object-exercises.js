/*
Get Sum of People's Budget
Create the function that takes an array with objects and returns the sum of people's budgets.

getBudgets([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]) ➞ 65700

getBudgets([
  { name: "John",  age: 21, budget: 29000 },
  { name: "Steve",  age: 32, budget: 32000 },
  { name: "Martin",  age: 16, budget: 1600 }
]) ➞ 62600

 */

function getBudgets(array){
    let totalBudget = 0;
    for(const eachPerson of array){
      totalBudget += eachPerson.budget
    }
    return totalBudget
  }

  getBudgets([
    { name: "John",  age: 21, budget: 29000 },
    { name: "Steve",  age: 32, budget: 32000 },
    { name: "Martin",  age: 16, budget: 1600 }
  ])

  
  getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve",  age: 32, budget: 40000 },
    { name: "Martin",  age: 16, budget: 2700 }
  ])
  

/*
```
tpChecker({people: 4, tp: 1}) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({people: 3, tp: 20}) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({people: 4, tp: 12} ➞ "Your TP will last 26 days, no need to panic!"
```
*/

 

function tpChecker(object){
    const numberOfPeople = object["people"];
    const numberOfTP = object["tp"];
    const SHEET_PER_ROLL = 500;
    const AVERAGE_USAGE_PER_PERSON_PER_DAY = 57;
    let numberOfDaysTPWillLast = (numberOfTP*SHEET_PER_ROLL)/(AVERAGE_USAGE_PER_PERSON_PER_DAY*numberOfPeople)
  
    if(numberOfDaysTPWillLast<14){
      return `Your TP will only last ${Math.round(numberOfDaysTPWillLast)} days, buy more!`
    }
    else{
      return `Your TP will last ${Math.round(numberOfDaysTPWillLast)} days, no need to panic!`
    }
  }
  
  tpChecker({people: 4, tp: 12})
  tpChecker({people: 3, tp: 20})
  tpChecker({people: 4, tp: 1})  



/*
greeting("Randy") ➞ "Hi! I'm Randy, and I'm from Germany."

greeting("Sam") ➞ "Hi! I'm Sam, and I'm from Argentina."

greeting("Monti") ➞ "Hi! I'm a guest."

 */

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}



function greeting(name){
  if(GUEST_LIST.hasOwnProperty(name)){
    return `Hi! I'm ${name}, and I'm from  ${GUEST_LIST[name]}.`
  }
  else{
    return "Hi! I'm a guest."
  }
}

greeting("Sam")
greeting("Monti")
greeting("Randy")