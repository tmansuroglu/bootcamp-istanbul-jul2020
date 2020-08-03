//Problem-1

/*
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

const employeesList = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve", age: 32, budget: 40000 },
  { name: "Martin", age: 16, budget: 2700 },
];

function getBudgets(obj) {
  let budgetSum = 0;
  for (let i=0; i<obj.length;i++) {
       budgetSum += obj[i].budget;
  }
  return budgetSum;
}

getBudgets(employeesList);


//Problem-2

const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina",
};
function greeting(name) {
  if (name in GUEST_LIST) {
    return `Hi! I'm ${name} and I'm from ${GUEST_LIST[name]}.`;
  } else {
    return "Hi! I'm a guest.";
  }
}

//greeting("Randy");
//greeting("Sam");
greeting("Monti");



//Problem-3

const tpParameters = {
  people: "",
  tp: "",
  };

function tpChecker(tpParameters) {
  let lastDays = (tpParameters["tp"] * 500) / (tpParameters["people"] * 57);
  if (lastDays < 14) {
    return `Your TP will only last ${Math.floor(lastDays)} days, buy more!`;
  } else {
    return `Your TP will last ${Math.floor(lastDays)} days, no need to panic!`;
  }
}
//tpChecker({ people: 4, tp: 1 });
//tpChecker({people: 3, tp: 20});
tpChecker({ people: 4, tp: 12 });