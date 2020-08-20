function getBudgets(arr){
    let totalBudget = 0;
    for(const eachElment of arr){
      totalBudget += eachElment.budget
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
  /*---------------------------------------*/
  const GUEST_LIST = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
  }
  
  function greeting(name){
  if (GUEST_LIST.hasOwnProperty(name)){
    return `Hi! I'm ${name}, and I'm from  ${GUEST_LIST[name]}.`
  }else {
    return 'hi iam a guest';
  }
  
  
  }
  greeting("Randy");
  /*-------------------------------------------*/

  function tpChecker(object){
    const usersNumber = object["people"]
    const tpNumber = object["tp"]
    const AVG = (tpNumber/usersNumber)*(500/57)
        
        if(AVG<14){
          return `Your TP will only last ${Math.round(AVG)} days, buy more!`        }
        else{
          return `Your TP will last ${Math.round(AVG)} days, no need to panic!`
        }
    }
     tpChecker({people: 4, tp: 12});