// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const noun = document.getElementById('noun');
const adjective = document.getElementById('adjective');
const person = document.getElementById('person');
const story = document.getElementById('story');

const libButton = document.getElementById('lib-button');

libButton.addEventListener('click', makeMadLib);

function makeMadLib() {
 story.innerText = `${person.value} really like ${adjective.value} ${noun.value}`;
}

