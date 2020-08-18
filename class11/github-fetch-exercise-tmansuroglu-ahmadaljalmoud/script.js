document.addEventListener("DOMContentLoaded", ()=>{  // wait until all content is loaded otherwise formData will be null
  const container = document.querySelector("div"); // this is the container that holds all user data
  const formData = document.getElementById("formdata"); // this is form
  

  formData.addEventListener("submit", (e)=> { //when form is submitted
    container.innerHTML="";                   //clear the inside of container first, so there won't be repeated data
    const userInput = document.getElementsByClassName("input")[0]; //this is where we get user name for searching
    e.preventDefault()  //prevent page from refreshing
    fetch(`https://api.github.com/search/users?q=${userInput.value}`) //set user search endpoint
    .then(response => response.json()) // get response and turn it into json file
    .then(json => { //define what to do with json
      for(const aProperty of json.items){  // for each element inside json.items
        const newUl = document.createElement("ul"); //create new ul. This is ul because at first we were making list but later we changed our mind
        container.appendChild(newUl) //append new ul to container
        const userName = document.createElement("h2"); //create header
        userName.innerText = aProperty.login // make the header display user name
        newUl.appendChild(userName) // put the header inside ul
        const image = document.createElement("div"); //create a div for image
        image.innerHTML= `<img src=${aProperty.avatar_url} alt="avatar" width="100px" height="100px">` //put the image tag inside of image div and define src
        newUl.appendChild(image) //append image div to the ul
        const profile = document.createElement("div"); // create a div for profile data
        profile.innerHTML= `<a href="${aProperty.html_url}" target="_blank">Profile Link</a>` // put a link inside of profile div that directs to profile
        newUl.appendChild(profile); // append that profile div to the ul
        const displayRepos= document.createElement("div"); // create a div that will display repos of the user
        newUl.appendChild(displayRepos) // append  repo div to the ul 
        displayRepos.innerHTML = `<input type="button" value="Click here to display ${aProperty.login}'s repos">` //create a button inside of repo div that WILL display all repos of the user
        
        
        
        displayRepos.addEventListener("click", (e)=>{ //define what happens when user clicks on the button
          const allRepoLinks = document.getElementsByClassName("repo"); // array of all repo links with class name repo
          if(allRepoLinks.length===0){ //if there is no repo link displayed / if there is no repo link with class name repo defined
          fetch(`https://api.github.com/users/${aProperty.login}/repos`) //connect to user repos endpoint
          .then(response => response.json())//parse the response
          .then(json => { // decide what to do with parsed response
            displayReposUl = document.createElement("ul");// create a nested ul 
            displayRepos.appendChild(displayReposUl); // append nested ul to the div created to display repos
            for(const repo of json){ //for each repo inside user repos endpoint
              const repoLink = document.createElement("li") //create a list element
              repoLink.innerHTML=`<a href=${repo.html_url} target="_blank">${repo.name}</a>` // make the list element display the repo link
              displayReposUl.appendChild(repoLink); //append new list element to the nested ul
              repoLink.classList.add("repo") // add class "repo" to new list element .
              
            }
          })    
          }
          else{ // if there are repo links displayed
            displayReposUl.remove() // delete the nested ul 
          }
        })
        
      }
    }
    )
    formData.reset() // reset the text box when data is submitted
  }
)})