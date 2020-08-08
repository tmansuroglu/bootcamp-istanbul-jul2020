const tpParameters = {
    people:"",
    tp:""
}

function tpChecker(tpParameters){
   let lastDays = (tpParameters["tp"]*500)/(tpParameters["people"]*57);  
    if (lastDays<14){
    return `Your TP will only last ${Math.floor(lastDays)} days, buy more!`
    } else {
      return `Your TP will last ${Math.floor(lastDays)} days, no need to panic!`  
    }
}
//tpChecker({ people: 4, tp: 1 });
//tpChecker({people: 3, tp: 20});
tpChecker({people: 4, tp: 12});

