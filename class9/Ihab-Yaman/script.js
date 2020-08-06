// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

const noun = document.querySelector("#noun")
const adjective = document.querySelector("#adjective")
const person = document.querySelector("#person")
const button = document.querySelector("#lib-button")
const story = document.querySelector("#story")



function makeMadLib() {
  let storyLog =  `while ${person.value} was ${adjective.value} a ${noun.value} jumped out of the window`
  story.innerText = storyLog
  noun.value = adjective.value = person.value = ""
}

button.addEventListener("click", makeMadLib)


  