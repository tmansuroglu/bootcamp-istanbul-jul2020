
let output = document.querySelector('#render')
document.querySelector(".submitButton").addEventListener('click', (e) => {
  const name = document.querySelector('.name').value;
  fetch(`https://api.github.com/search/users?q=${name}`)
  .then(response => {
    return response.json();
  })
  .then(json => {
    for(let i =0 ; i<json.items.length ;i++){
   const login = document.createElement("p");   
  login.innerHTML = json.items[i].login;               document.body.appendChild(login); 
  const image = document.createElement("img");  
  image.setAttribute('src', json.items[i].avatar_url); 
  image.setAttribute('height', '35px');
image.setAttribute('width', '35px');
  document.body.appendChild(image); 
  login.addEventListener('click', (e) => {
    fetch(`https://api.github.com/users/${json.items[i].login}/repos`)
  
  .then(response => {

    return response.json();
  })
  .then(json => {
     for(let i =0 ; i<json.items.length ;i++){
      
  login.innerHTML = json.items[i].name;                 
   }} ) 
})
    }
})})











