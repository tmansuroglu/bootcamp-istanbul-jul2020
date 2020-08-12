
/**
 * 
 * Get Sum of People's Budget
 * Create the function that takes an array with objects and returns the sum of people's budgets. 
 */

function getBudgets(budgets) {
    let budgetsSum = 0;

    for (const budget of budgets) {
        budgetsSum += budget.budget;
    }

    return budgetsSum;
}

const test1 = getBudgets([
    { name: "John", age: 21, budget: 23000 },
    { name: "Steve", age: 32, budget: 40000 },
    { name: "Martin", age: 16, budget: 2700 }
]) // ➞ 65700

const text2 = getBudgets([
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]) // ➞ 62600

console.log(test1, text2);

/**
 * 
 * International Greetings
 * Create the function that takes an array with objects and returns the sum of people's budgets. 
 */

function greeting(person) {
    const GUEST_LIST = {
        Randy: "Germany",
        Karla: "France",
        Wendy: "Japan",
        Norman: "England",
        Sam: "Argentina"
    }

    if (person in GUEST_LIST) {
        return `Hi! I'm ${person}, and I'm from ${GUEST_LIST[person]}."`
    } else {
        return `Hi! I'm a guest.`
    }
}

console.log(greeting("Randy")); // "Hi! I'm Randy, and I'm from Germany."
console.log(greeting("Sam")); // "Hi! I'm Sam, and I'm from Argentina."
console.log(greeting("Monti")); // "Hi! I'm a guest."

/**
   Quarantine TP

   Can you spare a square?

   Try to imagine a world in which you might have to stay home for 14 days at any given time. Do you have enough TP to make it through?

   Although the number of squares per roll of TP varies significantly, we'll assume each roll has 500 sheets,and the average person uses 57 sheets per day.

   Create a function that will receive an object with two key/values:

   people ⁠— Number of people in the household.
   tp ⁠— Number of rolls.
   Return a statement telling the user if they need to buy more TP!
*/

function tpChecker(tpInfo) {
    const SHEETS_PER_PERSON = 57;
    const ROLL_SHEETS = 500;
    const QUARANTINE_DAYS = 14;

    const SHEETS_NEEDED = Math.floor((tpInfo.tp * ROLL_SHEETS) / (tpInfo.people * SHEETS_PER_PERSON));

    if(SHEETS_NEEDED > QUARANTINE_DAYS {
        return `Your TP will last ${SHEETS_NEEDED} days, no need to panic!`
    } else {
        return `Your TP will only last ${SHEETS_NEEDED} days, buy more!`
    }
}

console.log(tpChecker({ people: 4, tp: 1 }));  //  "Your TP will only last 2 days, buy more!"
console.log(tpChecker({ people: 3, tp: 20 }));  // "Your TP will last 58 days, no need to panic!"
console.log(tpChecker({ people: 4, tp: 12 }));  // "Your TP will last 26 days, no need to panic!"
