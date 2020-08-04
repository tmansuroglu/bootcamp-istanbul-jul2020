/*tpChecker({people: 4, tp: 1}) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({people: 3, tp: 20}) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({people: 4, tp: 12} ➞ "Your TP will last 26 days, no need to panic!"*/

function tpChecker(obj){
  const defaultTp = 500;
  const tpPerDay = 57;
  const result = Math.round((obj.tp * defaultTp)  / (obj.people * tpPerDay)) ; 
  if(result < 14){
      return `Your TP will only last ${result} days, buy more! `

  }else{
    return `Your TP will last ${result} days, no need to panic!`
  }

}
tpChecker({people: 4, tp: 1})
//tpChecker({people: 3, tp: 20})
//tpChecker({people: 4, tp: 12})