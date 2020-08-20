let submitBtn = document.querySelector("#submitBtn");
let submitForm = document.querySelector("#github-form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let serching= document.querySelector("#search").value;

  fetch(`https://api.github.com/search/users?q=${serching}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
    processData(data);
    })
    .catch((error) => console.log(error));
});


function processData(){
for ( let i = 0; i< data.items.lenght; i++){

   document.querySelector(
      "#github-container"
    ).innerHTML += `<img src = "${data.items[i].avatar_url}" width="100px"><br>`;
    document.querySelector(
      "#github-container"
    ).innerHTML += `<h4 class ="username">${data.items[i].login}</h4><br>`;
    document.querySelector(
      "#github-container"
    ).innerHTML += `${data.items[i].url}<br><br>`;



}


}