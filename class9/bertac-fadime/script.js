// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")
const libButton= document.querySelector('#lib-button');
const story = document.querySelector("#story");

function makeMadLib() {
  const newArr = [];
  const inputs = document.querySelectorAll("input");
  for(const input of inputs){
    newArr.push(input.value);
  }
  story.innerHTML = `${newArr[2]} plays with ${newArr[1]} ${newArr[0]} all the time!`;
}
  

libButton.addEventListener('click', makeMadLib);