//Challenge 1
const names = ["Şule", "Orçun", "Cihan", "Ray", "Ola", "Gizem", "Khaldoon"]

let secret = [];

function societyName(names){
  for (i=0;i<names.length;i++) {
    console.log(names[i]);

    secret[i] = names[i][0];
  }
  console.log(secret);
  
  console.log(secret.sort().join(''));


}

societyName(names);

console.log("-------------");




//Challenge-2

function chatroomStatus(users) {
  if (users.length == 0){
    console.log("no one online");
  }
  else if(users.length==1){
      console.log(users[0] + " online");
    }
  else if(users.length==2){
      console.log(users[0] + " and " + users[1] + " online");
  }
  else{
      console.log(users[0] + ", " + users[1] + " and " + (users.length-2) + " more online"); 
  }
}


chatroomStatus([]);
chatroomStatus(["Şule"]);
chatroomStatus(["Şule", "Orçun"]);
chatroomStatus(["Şule", "Orçun", "Cihan", "Ray", "Ola", "Gizem", "Khaldoon"]);


/* Alternative Solution for Challenge 2


function chatroomStatus(numbers) {
  const users = ["Şule", "Orçun", "Cihan", "Ray", "Ola", "Gizem", "Khaldoon"];
  
  if (numbers == 0){
    console.log("no one online");
  }
  else if(numbers==1){
      console.log(users[0] + " online");
    }
  else if(numbers==2){
      console.log(users[0] + " and " + users[1] + " online");
  }
  else{
      console.log(users[0] + ", " + users[1] + " and " + (users.length-2) + " more online"); 
  }
};

chatroomStatus();
*/