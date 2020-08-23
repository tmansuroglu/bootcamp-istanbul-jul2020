let submitBtn = document.querySelector("#submit");
let submitForm = document.querySelector(".form");

submitForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let MY_SEARCH_TERM = document.querySelector("#ask").value;

  fetch(`https://api.github.com/search/users?q=${MY_SEARCH_TERM}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      processData(data);
    })
    .catch((error) => console.log(error));
});

function processData(data) {
  for (let i = 0; i < data.items.length; i++) {
    document.querySelector(
      "#result"
    ).innerHTML += `<img src = "${data.items[i].avatar_url}" width="100px"><br>`;
    document.querySelector(
      "#result"
    ).innerHTML += `<h4 class ="username">${data.items[i].login}</h4><br>`;
    document.querySelector(
      "#result"
    ).innerHTML += `${data.items[i].url}<br><br>`;

    document.querySelector(".username").addEventListener("click", (e) => {
      fetch(`https://api.github.com/users/${data.items[i].login}/repos`)
        .then((response) => {
          return response.json();
        })
        .then((repo) => {
          printRepos(repo);
        })
        .catch((error) => console.log(error));
    });
  }
}
function printRepos(repo) {
  for (let i = 0; i < repo.length; i++) {
    document.querySelector("#repo").innerHTML += `${repo[i].name}`;
  }
}
