//Start of Problem1-Get-Budgets

getBudgets = [{
    name: "John",
    age: 21,
    budget: 29000
  },
  {
    name: "Steve",
    age: 32,
    budget: 32000
  },
  {
    name: "Martin",
    age: 16,
    budget: 1600
  }
];

function sumOfBudget() {

  let total = 0;
  for (let i = 0; i < getBudgets.length; i++) {
    total = getBudgets[i].budget + total;
  }
  console.log(total);
}

sumOfBudget()

//end of Problem1-Get-Budgets


//start of Problem2-International-Greetings
const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

function greeting(string) {

  if (string in GUEST_LIST) {
    return "Hi! I'm " + string + ", and Im from " + GUEST_LIST[string] + ".";
  } else {
    return "Hi! I'm a guest.";
  }
}

greeting("Sam");
//greeting("Hiba");

//end of Problem2-International-Greetings


//start of Problem3-Quarantine-TP
function tpChecker(object) {
  const quarantine = 14;
  const personUse = (object.people) * 57
  //console.log(personUse)
  const tpLast = (object.tp) * 500
  //console.log(tpLast)
  let tpLastingDays = (tpLast / personUse).toFixed(0)
  //console.log(tpLastingDays )
  if (tpLastingDays < quarantine) {
    return `Your TP will only last ${tpLastingDays} days, buy more!`
  } else {
    return `Your TP will only last ${tpLastingDays} days, no need to panic!`;
  }
}

//tpChecker({ people: 4, tp: 12 })
tpChecker({
  people: 3,
  tp: 20
})
//tpChecker({people: 4, tp: 1})

//end of Problem3-Quarantine-TP