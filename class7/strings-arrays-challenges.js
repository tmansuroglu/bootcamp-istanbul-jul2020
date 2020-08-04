let input =["Majd","Ray","Louis","Sule"]

function SecretGroup(array){
    array.sort();
    const str = array.map(x => x[0]);
  return str.join('');
}

SecretGroup(input);


const input =["Majd","Ray","Louis","Sule"]

function SecretGrroup(array){
  array.sort();
  code= '';
  for(let i=0 ; i<array.length;i++){
      code= code+ array[i][0]
  }
  return  code;
}
SecretGrroup(input);



let input =["Ammar","Majd","Ray","Louis"]
let input_1= ["Ammar"];
let input_2=["Ray","Majd"]
let input_3 =[]
function ChatRoomStatus (ARRAY) {
  switch(ARRAY.length){
    case 0:
    return ["No one is in the room"];
    case 1:
    return [ARRAY[0]," is online"];
    case 2:
    return [ ARRAY[0],"and",ARRAY[1]]
    default:
    return [ARRAY[0],ARRAY[1], "and", ARRAY.length - 2,"more online"];
}
}
console.log (ChatRoomStatus(input).join(" "))
console.log (ChatRoomStatus (input_1).join(" "))
console.log (ChatRoomStatus(input_2).join(" "))
console.log (ChatRoomStatus(input_3).join(" "))
