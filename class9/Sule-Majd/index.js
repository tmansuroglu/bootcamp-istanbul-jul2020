// - Start with this index.html, which has several input elements and a button:

// - Link index.html to index.js using `script` tag.

// - Add an event listener to the button so that it calls a makeMadLib function when clicked.

// - In the makeMadLib function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like "Pamela really likes pink cucumbers.")

    const noun = document.getElementById("noun");
    const adjective = document.getElementById("adjective");
    const someoneName = document.getElementById("person");
    const button = document.getElementById("lib-button");
    const storyDiv = document.getElementById("story");

  function makeMadLib() {
    const inputAdj = adjective.value;
    const inputNoun = noun.value;
    const inputSomeoneName = someoneName.value;
    const output= `${inputSomeoneName} always drinks the ${inputAdj} ${inputNoun}`;
      storyDiv.innerText = output;
}

  button.addEventListener('click', makeMadLib)

