// Get Sum of People's Budget exercise
const getBudgets = (arr) => {
  let sum = 0;
  arr.forEach((el) => {
    sum += el.budget;
  });
  console.log(sum);
};

// getBudgets([
//   { name: "John", age: 21, budget: 29000 },
//   { name: "Steve", age: 32, budget: 32000 },
//   { name: "Martin", age: 16, budget: 1600 },
// ]);

// International Greetings exercise
const greeting = (name) => {
  const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina",
  };

  if (GUEST_LIST[name] !== undefined) {
    return `Hi! I'm ${name}, and I'm from ${GUEST_LIST[name]}`;
  } else {
    return "Hi! I'm a guest.";
  }
};
// console.log(greeting("Anna"));

// Quarantine TP exercise
const tpChecker = (obj) => {
  const numberOfSheetsInARoll = 500;
  const numberOfSheetsUsedPerDay = 57;
  let calculatedTP =
    (Object.values(obj)[1] * 500) / (57 * Object.values(obj)[0]);

  if (calculatedTP <= 14) {
    return `Your TP will only last ${Math.floor(calculatedTP)} days, buy more!`;
  } else {
    return `Your TP will last ${Math.floor(
      calculatedTP
    )} days, no need to panic!`;
  }
};
// tpChecker({ people: 3, tp: 20 });
