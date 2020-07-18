//First
const knar = 5;

if(knar % 5 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Second
const knarr = 83;
const betul = 34;

if(knarr + betul > 100){
  console.log(true);
}
else{
  console.log(false)
}
  
/* Third
0 1 1 2 3 5 8
p c
  p c
    p c
*/

let current = 1, previuos = 0, sum = 0, temp;

while(current < 4000000) {
  temp = current;                     // temp:    1  1  2  3
  current = previuos + current;       //current:  1  2  3  5
  previuos =  temp;                   //previuos: 1  1  2  3
  if(current%2 == 0){
    sum += current;
  }
  console.log(sum);
}


