const foo = [
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]
const getBudgets = array =>
    array.map(obj => obj.budget)
    .reduce((a,b) => a + b)
  

console.log(getBudgets(foo))
