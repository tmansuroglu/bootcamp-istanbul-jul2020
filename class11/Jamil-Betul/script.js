document.addEventListener('DOMContentLoaded', function () {
  const githubForm = document.querySelector('#github-form');

  githubForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const searchPhrase = evt.target.search.value;
    if (evt.submitter.id === 'search-name') {
      searchNames(searchPhrase);
    } else if (evt.submitter.id === 'search-repo') {
      searchRepo(searchPhrase);
    }
  });
});

// search for github repos
function searchRepo(repoName) {
  fetch(`https://api.github.com/search/repositories?q=${repoName}`)
    .then(response => response.json())
    .then(repo => renderRepos(repo))
    .catch(err => console.log(err))
}

function renderRepos(repos) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  repos.items.map(function (repo) {
    renderRepo(repo);
  });
}

function renderRepo(repo) {
  const userList = document.getElementById("user-list");
  let repoInfo = getRepoInfoCard(repo);

  userList.innerHTML += repoInfo;
}

// search for github users
function searchNames(toSearch) {
  fetch(`https://api.github.com/search/users?q=${toSearch}`)
    .then(response => response.json())
    .then(names => renderUsers(names))
    .then(users => addSearchUserReposListeners(users))
    .catch(err => console.log(err))
}


function renderUsers(results) {
  const userList = document.getElementById("user-list");
  userList.innerHTML = "";
  results.items.map(function (result) {
    renderUser(result);
  });

  return document.querySelectorAll('.user-card');
}

function renderUser(user) {
  const userList = document.getElementById("user-list");
  let userInfo = getUserInfoCard(user);

  userList.innerHTML += userInfo;
}

function addSearchUserReposListeners(users) {
  for (const user of users) {
    user.addEventListener('click', function (evt) {
      document.querySelector('#user-repos').innerHTML = `<div class="spinner-border text-secondary align-center" role="status"><span class="sr-only">Loading...</span></div>`;
      fetchUserRepo(user.children[0].children[1].innerText);
    });
  }
}

function fetchUserRepo(userName) {
  fetch(`https://api.github.com/users/${userName}/repos`)
  .then(response => response.json())
  .then(repos => renderUserRepo(repos))
  .catch(err => console.log(err))
}

function renderUserRepo(repos) {
  document.querySelector('.modal-title').innerText = `${repos[0].owner.login}'s repositories`;
  const userRepos = document.querySelector('#user-repos');

  const ul = document.createElement('ul');
  for (const repo of repos) {
    let liContent =
      `<li><a href="https://github.com/${repo.full_name}" target="_blank">${repo.name}</a></li>`;
    ul.innerHTML += liContent;
  }
  userRepos.innerHTML = '';
  userRepos.appendChild(ul);
}

function getUserInfoCard(user) {
  return `
  <!-- User item -->
  <div class="user-card col-xl-3 col-sm-6 mb-5 animate__animated animate__flipInY">
      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${user.avatar_url}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">${user.login}</h5><span class="small text-uppercase text-muted">${user.type}</span>
          <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="${user.html_url}" class="social-link" target="_blank" data-placement="bottom" title="GitHub profile"><i class="fab fa-github"></i></a></li>
              <li class="list-inline-item"><a href="#" class="user-repo-btn social-link" data-placement="bottom" title="User repos" data-toggle="modal" data-target="#exampleModal"><i class="fas fa-code-branch"></i></a></li>
          </ul>
      </div>
  </div><!-- End -->`;
}

function getRepoInfoCard(repo) {
  return `
  <!-- User item -->
  <div class="user-card col-xl-3 col-sm-6 mb-5 animate__animated animate__flipInY">
      <div class="bg-white rounded shadow-sm py-5 px-4"><img src="${repo.owner.avatar_url}" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm">
          <h5 class="mb-0">${repo.name}</h5><span class="small text-uppercase text-muted">${(repo.description).toLowerCase()}</span>
          <ul class="social mb-0 list-inline mt-3">
              <li class="list-inline-item"><a href="${repo.owner.html_url}" class="social-link" target="_blank" data-placement="bottom" title="User profile"><i class="fab fa-github"></i></a></li>
              <li class="list-inline-item"><a href="${repo.html_url}" class="user-repo-btn social-link"><i class="fas fa-code-branch" data-placement="bottom" title="Repo page"></i></a></li>
              <li class="list-inline-item"><a href="${repo.homepage? repo.homepage: '#'}" class="user-repo-btn social-link" data-placement="bottom" title="Home Page"><i class="fab fa-internet-explorer"></i></a></li>
          </ul>
      </div>
  </div><!-- End -->`;
}
