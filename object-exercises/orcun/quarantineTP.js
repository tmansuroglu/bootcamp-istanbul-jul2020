/*
tpChecker({people: 4, tp: 1}) ➞ "Your TP will only last 2 days, buy more!"

tpChecker({people: 3, tp: 20}) ➞ "Your TP will last 58 days, no need to panic!"

tpChecker({people: 4, tp: 12} ➞ "Your TP will last 26 days, no need to panic!"
*/


function tpChecker(object){

  let daysLeft = ((((object.tp)*500)/57)/(object.people)).toFixed(0);

  if(daysLeft < 14){

    return `Your TP will only last ${daysLeft} days, buy more!`;
  }
  else if(daysLeft == 14){
    return `Your TP will last ${daysLeft} days, we have taharet musluğu:)`;
  }
  else{
    return `Your TP will last ${daysLeft} days, no need to panic!`;
  }
}

tpChecker({people: 4, tp: 1});
tpChecker({people: 3, tp: 20});
tpChecker({people: 5, tp: 8});