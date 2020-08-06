const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
}
function greeting(guest){
  for(let key in GUEST_LIST){
    if(guest === key){
      return `Hi! I'm ${key}, and I'm from ${GUEST_LIST[key]}.`
    }else{
      return "Hi! I'm a guest."

    }

  }
}
greeting("Randy");
//greeting("Bertac");