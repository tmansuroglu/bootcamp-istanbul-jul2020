//select the input and the form
const searchInput = document.getElementById('search');
//const form = document.getElementById('github-form');
const btn = document.querySelector("#submit");

btn.addEventListener('click', (e) => {
    
    e.preventDefault();
    //take input.value  as parameter of search on url 
    let name= searchInput.value;
    //make a get fetch request wit url{input.value}
    const url= `https://api.github.com/search/users?q=${name}`
    fetch(url)
    .then(response => response.json())
    .then(usersObj=> {
        console.log(usersObj.items);
        let usersArray= usersObj.items;
   
        //loop to get users Li 
        for(let i=0; i<usersArray.length; i++ ){
            const userList = document.getElementById("user-list");
            const userItem = document.createElement("li");
            userItem.innerHTML += `<h2>${usersArray[i].login}</h2> <img src='${usersArray[i].avatar_url}' width='100px' alt='profile picture'>`;
            userList.appendChild(userItem);
        }

        //loop to get the repos li
        //add event listener to the h2-userName to get repos
        const userNamesArray = document.querySelectorAll("ul#user-list h2");
        for (const userName of userNamesArray){
            userName.addEventListener('click', (e)=>{
                e.preventDefault();
                fetch(`https://api.github.com/users/${name}/repos`)
                .then(resp=>resp.json())
                .then(reposObj => {
                    console.log(reposObj)
                    for(let i=0; i<reposObj.length; i++){
                        const reposList = document.getElementById("repos-list");
                        const repoItem = document.createElement("li");
                        repoItem.innerHTML += `${reposObj[i].name}<br/>`;
                        reposList.appendChild(repoItem);
                    }
                    
                })
                .catch(err => err.message);
    })
    
}
    })
    .catch(err=>err.message);
    
}) 

//clean input - reset doesnt work
//search the one I click even if there is not the full name in the input