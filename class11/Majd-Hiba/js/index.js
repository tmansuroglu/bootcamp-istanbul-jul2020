
const submitBtn = document.getElementById("submit-btn")

const form = document.getElementById('github-form');
const reposList = document.querySelector("#repos-list");



form.addEventListener('submit', function (e) {
  e.preventDefault()
  const search = document.querySelector('#search').value;
  const userList = document.querySelector("#user-list");

  fetch(`https://api.github.com/search/users?q=${search}`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    userList.innerText = "";
    reposList.innerText = "";
    //console.log(json);
    const users = json.items;
    
    

    users.forEach((user) => {
      const avatar = user["avatar_url"];
      
      const userItem = document.createElement('li');
      userItem.innerHTML = `<img src='${avatar} ' class='image' alt="user-avatar"></img> <span>${user.login}&nbsp; </span><span id='link'>Show Repos</span>` ;
      const showRepos = document.querySelector("#link");
      const listElements = document.querySelectorAll('li')
      
      
      userItem.id = user.login;
      userItem.addEventListener('click', function(e){
        for (const li of listElements){
          li.style.color = 'black';
          console.log(2)
        } 
        userItem.style.color = 'teal';
        usersRepos(userItem.id);
      // console.log(this.id)
      })
      userList.appendChild(userItem);
    })
    //usersRepos(json)
  })

  //userList.innerHTML = `<li>${}</li>`;
  //reposList.innerHTML = `<li>${}</li>`;
})

function usersRepos(userName){
      
      fetch(`https://api.github.com/users/${userName}/repos` )
      .then (response => {
        return response.json();
      })
      .then(json => {
        reposList.style.backgorund='teal';
        reposList.innerText = "";
        for (const j in json){
        //console.log(json[j].name);
       const userRepoItem = document.createElement('li');
       userRepoItem.innerText = `${json[j].name}`;

       reposList.appendChild(userRepoItem);

        }

      })
      
}


