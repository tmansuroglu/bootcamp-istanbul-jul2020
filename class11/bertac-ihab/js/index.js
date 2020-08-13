
document.addEventListener("DOMContentLoaded", e => {
// vars for DOM selectors
const gitHubForm = document.querySelector("#github-form")
const searchInput = document.querySelector("#search")
const userList = document.querySelector
("#user-list")
const reposList = document.querySelector("#repos-list")

gitHubForm.addEventListener("submit", (e) => {
  e.preventDefault();
  userList.innerHTML = "";
  fetchUsers();
  
})

function fetchUsers(){
  fetch(`https://api.github.com/search/users?q=${searchInput.value}`)
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    //console.log(json.items);
    organizeUsers(json.items);
    
  })
}


function organizeUsers(users){
  users.forEach(user => {
    const div = document.createElement("div");
    const li = document.createElement("li");
    li.className = "user-list-item";

    const h3 = document.createElement("h3");

    const img = document.createElement("img");
    
    const a = document.createElement("a");

    const bodyDiv = document.createElement("div");
    
    userList.appendChild(div);
    div.appendChild(li);
    li.appendChild(bodyDiv);

    bodyDiv.appendChild(h3);
    bodyDiv.appendChild(img);
    bodyDiv.appendChild(a);
    
    bodyDiv.className = "card-body";
    div.className = "card";
    div.setAttribute("style", "width:18rem");
    h3.innerText = user.login;
    h3.className = "card-title";
    img.setAttribute("src", user.avatar_url);
    img.setAttribute("class", "card-img-top");
    a.innerText = "Github profile";
    a.setAttribute("href", user.html_url);
    a.setAttribute("target", "_blank");
    
    h3.addEventListener("click", function(e){
      console.log(e.target.innerText);
      reposList.innerHTML = "";
      fetchRepos(e.target.innerText);
    })


  })
}


function fetchRepos(name){
    fetch(`https://api.github.com/users/${name}/repos`)
    .then(res => res.json())
    .then(repos => repos.forEach(repo => {
      reposList.innerHTML += 
      `
      <li class="list-group-item">
      <a href="#" class="list-group-item list-group-item-action">${repo.name}
      </a>
      </li>
      `
    })
    ) 
  }
  //fetchRepos()







})

