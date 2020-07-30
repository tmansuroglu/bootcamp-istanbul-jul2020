const GUEST_LIST = {
  Randy: "Germany",
  Karla: "France",
  Wendy: "Japan",
  Norman: "England",
  Sam: "Argentina"
};

function nameTag(name){
  if(name in GUEST_LIST){
    console.log(`Hi! I'm ${name}, and I'm from ${GUEST_LIST[`${name}`]}.`);
  }else{
    console.log("Hi! I'm a guest.");
  }
}

nameTag("Wendy");
nameTag("Orçun");