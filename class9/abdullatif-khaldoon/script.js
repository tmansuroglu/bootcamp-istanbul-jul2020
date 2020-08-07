// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const story= document.getElementById("story");
const libButton= document.getElementById("lib-button");
  
libButton.addEventListener('click', function(e){
  const noun = document.getElementById('noun').value 
  const adj = document.getElementById('adjective').value 
  const person = document.getElementById('person').value 
  makeMadLib(noun,adj,person);
}
)

function makeMadLib(a,b,c) {
story.innerText = c + ' really  ' + b +" "+ a;
}