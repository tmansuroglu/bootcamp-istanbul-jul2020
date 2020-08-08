 
 //Get Sum of People's Budget
 const getBudgets=[
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]

  function cal (){
  let budget = 0;
  for (let i =0 ;i<getBudgets.length; i++){
     budget=getBudgets[i]['budget']+budget;
   }
   return budget;
  }
  cal();

 // International Greetings
 
 const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}

 function Greeting(name){
if (!(name in GUEST_LIST)){return "Hi! I'm a guest."}
else return` Hi! I'm  ${name}  and I'm from ${GUEST_LIST[name]}`
 }
Greeting('Karla') 


//Quarantine TP

function tpChecker(data){
  let result =Math.trunc(((data.tp)*500)/((data.people)*57));
  if (result<14)return `Your TP will only last ${result} days, buy more!`
  else return `Your TP will last ${result} days, no need to panic!`
}
tpChecker({people: 5, tp: 7})
 