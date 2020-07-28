const button = document.getElementById('lib-button');

button.addEventListener("click", makeMadLib);

function makeMadLib() {
  const inputVal1 = document.getElementById("noun").value;
  const inputVal2 = document.getElementById("adjective").value;
  const inputVal3 = document.getElementById("person").value;
  
  const story = `${inputVal3} really likes ${inputVal2} ${inputVal1}`;
  document.getElementById("story").innerText = story;
  //console.log(inputVal3 +  " really likes " + inputVal2 + " " + inputVal1 + ".")
}


  